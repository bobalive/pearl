const slider = (button, image)=> {
    var btn = document.querySelectorAll(button),
    images = document.querySelectorAll(image),
    box = document.querySelectorAll('.menu__main-slider'),
    activeSlide = 0,
    b= 0;

    var interval = setInterval(()=>{
        b++
        if (b > 3){
            b = 0
        }
        imageChange(activeSlide,b)
        removeActive()
        btn[b].classList.add('active')
        activeSlide= b
    },5000)


    //перебор псевдо объектов
    box.forEach(item =>{
        item.addEventListener('mouseover' , ()=>{
            clearInterval(interval)
        })
        item.addEventListener('mouseleave' , ()=>{
            interval = setInterval(()=>{
                b++
                if (b > 3){
                    b = 0
                }
                imageChange(activeSlide,b)
                removeActive()
                btn[b].classList.add('active')
                activeSlide= b
            },5000)
        })
    })

    btn.forEach((button,i) => {
        button.addEventListener('click' , ()=>{
            slide(i, button)
        })
    })


    //Функции

    function slide(i, el){
        removeActive()
        addActive(el)
        imageChange(activeSlide,i)
        activeSlide= i
    }


    function removeActive(){
        btn.forEach(btn =>btn.classList.remove('active'))
    }
    function addActive(button){
        button.classList.add('active')
    }

    function imageChange(activeSlide,i){

       if (activeSlide < i){
           
           for (let a = 0; a< i; a++){
               images[a].style=`
               transition:0;
               transform: translateX(-100%)`
           }  
           
           
           images[activeSlide].style = `
           transition:0.5s;
           transform: translateX(-100%)`


           images[i].style = `
           transition:0.5s;
           transform: translateX(0);
           `


       }else if (activeSlide > i){
        

        for (let   a =activeSlide; a> i; a--){
            images[a].style= ` 
            transition:0;
            transform: translateX(100%)`
        }
        
        images[activeSlide].style = `
        transition:0.5s;
        transform: translateX(100%)`

        images[i].style =`
        transform: translateX(0);
        transition:0.5s;`
       }


    }
}

export default slider