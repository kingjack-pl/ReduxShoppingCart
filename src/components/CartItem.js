import React, {Component} from 'react';

class CartItem extends Component {

    render(){
        const { name, price } = this.props.item;

        return (
            <p>
                {name}<br/>
                {`Cena: ${price} zł`}<br/>
            </p>
        )
    }
}

export default (CartItem);
