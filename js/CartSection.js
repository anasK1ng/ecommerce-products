import Cart from './Cart.js';

export default class CartSection {

    constructor(querrySection,querryContainer,productContainer){
        this.sotorage = 'carts'    
        this.cartSection = document.querySelector(querrySection);
        this.cartContainer = document.querySelector(querryContainer);
        this.productContainer = document.querySelector(productContainer)
        this.productContainer.querySelector('.checkin__section .btn__add').addEventListener('click',(e)=>{
            e.preventDefault()
            this.Add()
        })
        
        // const btnDelete = this.cartContainer.querySelectorAll('.cart__item .btn__delete')
        // btnDelete.forEach(item =>{
            
        //     item.addEventListener('click', (e) =>{
        //         this.Delete(e)
        //     })
        // })
        this.Load();
        
    }

    

    GetData(){
        var img , name , price, quantity

            img  = document.querySelector('.product__images .active-img img').getAttribute('src')
            name = document.querySelector('.product__data .data__title').textContent
            price = document.querySelector('.price__section .price').textContent
            quantity = document.querySelector('.quantity__section .quantity').textContent
        
        var cartItem = new Cart(img,name,price,quantity)
       return cartItem
    }
    AddItem(cart={}){
        var cartItem = CartSection.GetCartItem(cart)
        this.cartContainer.insertAdjacentHTML('beforeend',cartItem)
        var item = this.cartContainer.querySelector('.cart__item:last-of-type')
        item.querySelector('.btn__delete').addEventListener('click',e=>{
            this.Delete(e)
        })
        console.log(cart)
        
    }
    Add(){
        console.log("add btn start")

        var cart = this.GetData()
         this.AddItem(cart)
        this.save()
    }
    Delete(e){
        var cartItem = e.target.closest('.cart__item')
        cartItem.remove()
        this.save()
        
    }
    GetAllCartItems(){
        return Array.from(this.cartContainer.querySelectorAll('.cart__item'))
    }
    CartsNumber(){
        var ItemsLenght =this.GetAllCartItems().length
       
        const numberLabel = document.querySelector('.menu__cart  .cart__icon .cart__icon__number')
        numberLabel.textContent = ItemsLenght
        ItemsLenght >0 ? numberLabel.classList.remove('visible'):numberLabel.classList.add('visible')
        
    }
    
    static GetCartItem({img,name,price,quantity,price_quantity}){
        return `
            <div class="cart__item">
                <div class="cart__img">
                    <img src="${img}" />
                </div>
                <div class="cart__data">
                    <span class="cart__name"> ${ name }</span>
                    <div class="cart__price__quantity"><span class="cart__price">${ price }</span> x <span class="cart__quantity">${quantity}</span></div>
                    <span class="cart__calculate">${ price_quantity }</span>
                </div>
                <img class="btn__delete" src="images/icon-delete.svg" />
            </div>
         `
    }
    DestractItem(item){
        
       var img  = item.querySelector('img').getAttribute('src'),
        name = item.querySelector('.cart__name').textContent,
        price = item.querySelector('.cart__price').textContent,
        quantity = item.querySelector('.cart__price__quantity .cart__quantity').textContent
       
    
    var cartItem = new Cart(img, name,price,quantity)
    
    return cartItem
    }
    Load(){
        var cartItems = JSON.parse(localStorage.getItem(this.sotorage) || "[]")
        for(var cart of cartItems){
           this.AddItem(cart)
       }
       this.CartsNumber();
   }
    save(){
        
        console.log("item")
        const data = this.GetAllCartItems().map(item =>{
            
            var {img , name , price , quantity, price_quantity} = this.DestractItem(item)
            return {
                img : img,
                name : name,
                price : price,
                quantity :quantity,
                price_quantity : price_quantity
            }
        })
        localStorage.setItem(this.sotorage,JSON.stringify(data))
        this.CartsNumber()
    }
}