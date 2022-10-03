export default class Cart{
    constructor(img, name , price , quantity){
        this.img = img
        this.name = name
        this.price = price
        this.quantity =quantity
        this.price_quantity = this.getPriceQuantity() 
    }
    getPriceQuantity(){
       var priceEdited =  this.price.slice(1)
        return  `$${(priceEdited * this.quantity).toFixed(2)}`
    }

}