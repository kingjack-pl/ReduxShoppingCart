import React, {Component} from 'react';
import CartItem from './CartItem';

class CartList extends Component {

    renderCartItems(cartItems){
        return cartItems.map( (item) => {
          return (
              <CartItem key={item.id} item={item} />
          )
        })
    }

    render(){
        let totalPrice = 0;
        const { addToCart, products } = this.props;
        const cartItems = addToCart.map( (id) => {
            return products[id]
        });

        cartItems.map((item) => {
            totalPrice += item.price
        });

        if(!totalPrice) {
            return '';
        }

        return (
            <div className="cartBox">
                <h3>Koszyk</h3>
                { this.renderCartItems(cartItems) }
                <div className="col-lg-12 text-right">
                    <p><b>Do zapłaty: {totalPrice} zł</b></p>
                </div>
            </div>
        )
    }
}

export default CartList;
