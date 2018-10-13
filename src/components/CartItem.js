import React, {Component} from 'react';

class CartItem extends Component {

    render(){
        const { name, price } = this.props.item;

        return (
            <p className="col-lg-2">
                {name}<br/>
                {`Cena: ${price} zł`}<br/>
            </p>
        )
    }
}

export default (CartItem);
