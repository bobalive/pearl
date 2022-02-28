const header = document.querySelector('header'),
menu = document.querySelector('.header__menu'),
link = document.querySelector('.header__link')

header.addEventListener('click', (e) =>{
    if(e.target.classList.contains('header')){
        menu.style =`
        left:-100%;
       `
        link.style =`
        opacity:1;`
    }
    else if(e.target.classList.contains('header__btn')||e.target.classList.contains('header__btn-line')){
        menu.style =`
        transition:0.5s;
        left:0;`
        link.style =`
        transition:0.5s;
        opacity:0;
        `
    }
})


 class Blur{
     constructor(obj){
        this.card = document.querySelectorAll(obj.card)

        this.card.forEach(item =>{

            this.img = item.querySelector('img')

            item.addEventListener('mouseover' ,()=>this.mouseOver(item))
            item.addEventListener('mouseleave',()=>this.mouseLeave(item))
        })
     }

     mouseOver(item){
        this.img = item.querySelector('img')
        this.link = item.querySelector('a')
        this.title = item.querySelector('h2')

        this.title.style =`
        opacity: 1;
        transform: scale(1);
        `


        this.link.style =`
        opacity: 1;
        transform: scale(1);
        `
        this.img.style= `
         filter:blur(0px);
         `

     }
     mouseLeave(item){
        this.img = item.querySelector('img')
        this.link = item.querySelector('a')
        this.title = item.querySelector('h2')


        this.title.style =`
        opacity: 0;
        transform: scale(0.5);
        `


        this.link.style =`
        opacity: 0;
        transform: scale(0.5);
        `
        this.img.style =`
         filter:blur(7px)
         `
     }
     
 }

var  blur = new Blur({
     card: '.main__imgBox-card'
 })





