class Parallax {
    constructor(obj){
        this.boath = document.querySelector(obj.boath);
        this.bg = document.querySelector(obj.bg);
        this.clouds = document.querySelectorAll(obj.clouds);
        window.addEventListener('scroll', ()=>{
            this.move()
        })
    }
    move(){
        // console.log(scrollY);
        this.boath.style.transform = `translateX(${scrollY}px)`;
        this.bg.style.objectPosition = `0 ${50 + scrollY / 10}%`;
        this.clouds.forEach((elem)=>{
            let speed = elem.getAttribute('data-speed');
            elem.style.transform = `translateX(${scrollY * speed}px)`;
        })
    }
}

const parallax = new Parallax({
    boath: '.header__boat',
    bg: '.header__fantasy', 
    clouds: '.header__cloud'
})
// console.log(parallax);

class Text {
    constructor(objTitle){
        if (typeof objTitle == 'string') {
            this.title = document.querySelector(objTitle);            
        } else if (objTitle instanceof HTMLElement) {
            this.title = objTitle
        }
        this.fullText = this.title.innerHTML;
        this.title.innerHTML = '';
        this.addLetters();
    }
    addLetters(x=0){
        this.title.innerHTML += this.fullText[x];
        if (x < this.fullText.length - 1) {
            setTimeout(() => {
                x++;
                this.addLetters(x)
            }, 100);
        }
    }
}

const a = document.querySelector('.header__title');

// let text = new Text('.header__title');
// let text = new Text(['fsdf']);
let text = new Text(a);
// console.log(text);
let text1 = new Text('.parallax__title');

class ParallaxMove {
    constructor(ball){
        this.balls = document.querySelectorAll(ball);
        window.addEventListener('mousemove', (e)=>{
            // console.log(e);
            this.move(e);
        })
    }
    move(event){
        this.balls.forEach((elem)=>{
            let speed = elem.getAttribute('data-speed');
            let x = event.x / 60 * speed;
            let y = event.y / 60 * speed;
            elem.style.transform = `translate(${x}px, ${y}px)`;
        })
    }
}

const parallaxMove = new ParallaxMove('.parallax__ball')
// console.log(parallaxMove);

class Timer {
    constructor(obj){
        this.section = document.querySelector(obj.section);
        this.num = document.querySelectorAll(obj.num);
        this.state = true;
        this.num.forEach((elem)=>{
            elem.innerHTML = 0;
        })
        // this.setNums()
        window.addEventListener('scroll', ()=>{
            this.scrollSect()
        })
    }
    scrollSect(){
        // console.log(scrollY);
        // console.log(this.section.offsetTop); // растояние от верхнего края
        // console.log(this.section.offsetHeight); // высота секции
        let top = scrollY + innerHeight - this.section.offsetHeight / 2;
        if(top > this.section.offsetTop && this.state){
            this.setNums()
            this.state = false;
        }
    }
    setNums(){
        this.num.forEach((elem)=>{
            let count = +elem.getAttribute('data-num');
            function timer(x=0) {
                x++;
                elem.innerHTML = x;
                if (x < count) {
                    setTimeout(() => {
                        timer(x)
                    }, 5);                    
                }
            }
            timer()
        })
    }
}

const timer = new Timer({
    section: '.timer',
    num: '.timer__num'
})
// console.log(timer);

class Bubble {
    constructor(selector){
        this.btn = document.querySelectorAll(selector);
        this.btn.forEach((elem)=>{
            elem.addEventListener('mousemove', (event)=>{
                this.move(event, elem)
            })
        })
    }
    move(event, elem){
        let x = event.pageX - elem.offsetLeft;
        let y = event.pageY - elem.offsetTop;
        let span = elem.querySelector('span');
        span.style.top = y + 'px';
        span.style.left = x + 'px';
        // console.log(x, y);
    }
}

const bubble = new Bubble('.timer__btn');
// console.log(bubble);

class Rotate3D {
    constructor(elem){
        this.card = document.querySelectorAll(elem);
        this.card.forEach((a)=>{
            a.addEventListener('mousemove', (event)=>{
                this.rotateCard(event, a)
            })
        })
    }
    rotateCard(event, elem){
        const cardItem = elem.querySelector('.card__item');
        cardItem.style.transform = `rotateX(30deg)`;
        let halfHeight = cardItem.offsetHeight / 2;
        console.log(halfHeight);
    }
}

const rotate3D = new Rotate3D('.card');
console.log(rotate3D);