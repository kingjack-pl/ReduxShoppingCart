import React, {Component} from 'react';
import CartItem from './CartItem';

export default class CartList extends Component {

    renderCartItems(cartItems){
        return cartItems.map( (item) => {
          return (
              <CartItem key={item.id} item={item} />
          )
        })
    }

    removeAllProduct() {
        this.props.removeallfromcart();
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
                    <button className="btn btn-primary" onClick={() => this.removeAllProduct()}>Usuń wszystkie produkty</button>
                </div>
            </div>
        )
    }
}
