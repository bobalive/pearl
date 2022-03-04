const slider = ()=> {
    var btn = document.querySelectorAll('.menu__main-btn'),
    images = document.querySelectorAll('.menu__main-img')

    var activeSlide = 0

    

    btn.forEach((button,i) => {
        button.addEventListener('click' , ()=>{
            removeActive()
            addActive(button)
            imageChange(activeSlide,i)
            activeSlide= i
            
        })
    })

    function removeActive(){
        btn.forEach(btn =>btn.classList.remove('active'))
    }
    function addActive(button){
        button.classList.add('active')
    }

    function imageChange(activeSlide,i){
       if (activeSlide < i){
           images[activeSlide].style = `
           transition:0.5s;`

           for (let a = 0; a< i; a++){
               images[a].style=`
               transition:0;
               right:100%`
           }           
           images[i].style = `
           right:0;
           transition:0.5s;`


       }else if (activeSlide > i){
        images[activeSlide].style = `
        transition:0.5s;
        right:-100%;`

        for (let   a =activeSlide; a> i; a--){
            images[a].style= ` 
            transition:0;
            right:-100%`
        }
        images[i].style =`
        right:0;
        transition:0.5s;`
       }


    }
}

export default slider