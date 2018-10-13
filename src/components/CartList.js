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
        const { addToCart, products } = this.props;
        let totalPrice = 0;

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
            <div>
                <h3>Koszyk</h3>
                { this.renderCartItems(cartItems) }
                <p>Do zapłaty: {totalPrice} zł</p>
            </div>
        )
    }
}

export default (CartList);
