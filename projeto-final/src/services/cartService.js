export default{
    getCart: function(){
        let cart;

        if(localStorage.getItem("cart")){
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        else{
            cart = [];
            localStorage.setItem("cart", JSON.stringify(cart));
        }

        return JSON.parse(localStorage.getItem("cart"));
    },
    
    addToCart: function(produto){
        let cart = this.getCart("cart");
        cart.push(produto)      ;
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}