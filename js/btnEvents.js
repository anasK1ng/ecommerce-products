
export default function btnEvents(){

    const btnPlus = document.querySelector('[btn-plus]')
    const btnMinus =document.querySelector('[btn-minus]')
    const quantityArea = document.querySelector('.quantity')
    btnPlus.addEventListener('click',_ =>{
        if(!isNaN(quantityArea.textContent)){
            quantityArea.textContent =Number(quantityArea.textContent) + 1
        }
    })

    btnMinus.addEventListener('click',_ =>{
        
        if(!(isNaN(quantityArea.textContent)) && quantityArea.textContent>1){
           var bool = !isNaN(quantityArea.textContent)
            quantityArea.textContent = quantityArea.textContent -  1
        }
    })
    

    const btnMenuCart = document.querySelector('.menu__cart  .cart__icon')
    const cartSection = document.querySelector('.cart__section')
    cartSection.addEventListener('click',_=>{
    
    
    })


    btnMenuCart.addEventListener('click',_=>cartSection.classList.toggle('visible'))


    //change images 
    const itemsImage = document.querySelectorAll('.product__images .img__item')
    const screenImage = document.querySelector('.screen__img img')
    itemsImage.forEach(image =>{
        image.addEventListener('click', ()=>{
            var oldImage = document.querySelector('.active-img')
            var imageSrc = image.querySelector('img').dataset.bigimg
            oldImage.classList.remove('active-img')

            image.classList.add('active-img')
            console.log(imageSrc)
            screenImage.setAttribute('src' ,imageSrc)

        })
    })

    // menu togle button 
    const btnToggle = document.querySelector('.nav__toggle')
    const navItems = document.querySelector('.nav__items')
    btnToggle.addEventListener('click',()=>{
        navItems.classList.toggle('show-menu')
    }) 
    const btnClose = document.querySelector('.nav__items .btn__close img')

    btnClose.addEventListener('click',()=>{
        navItems.classList.toggle('show-menu')
    }) 







    // thumbnails section & buttons 


const thumbnailsBtn = document.querySelectorAll('[data-thumbnailbtn]')

const thumbnailsItems = document.querySelectorAll('.thumbnail__item')
thumbnailsBtn.forEach(btn =>{
    btn.addEventListener('click', e=>{
        var index = Array.from (thumbnailsItems).indexOf(document.querySelector('[data-thumbnail] [data-active]'))
        console.log(index)
        if(btn.dataset.thumbnailbtn=='next'){
            thumbnailsItems[index].removeAttribute('data-active')
            if( index == (thumbnailsItems.length-1)) {
                index = -1
            } 
            index++
            thumbnailsItems[index].setAttribute('data-active',true)
        } 
        if(btn.dataset.thumbnailbtn == 'previous'){
            thumbnailsItems[index].removeAttribute('data-active')
            if( index == 0) {
                index = thumbnailsItems.length
            } 
            index--
            thumbnailsItems[index].setAttribute('data-active',true)
        }
    })
})





const thumbnailSection = document.querySelector('.thumbnail')

const screenImg = document.querySelector('.screen__img')
const thumbnailBtnClose = document.querySelector('.thumbnail__btn__close')
screenImg.addEventListener('click',_=>{
    console.log(thumbnailSection)
    thumbnailSection.classList.add('thumbnail__show')
    
})
thumbnailBtnClose.addEventListener('click', _=>{
    thumbnailSection.classList.remove('thumbnail__show')
   
    
})



}