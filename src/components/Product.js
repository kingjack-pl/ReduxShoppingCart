import React, { Component } from 'react';

export default class Product extends Component {
    onMouseOver(id) {
        this.props.activeproduct(id);
    }

    onAddToCart(id) {
        this.props.addtocart(id);
    }

    removeProduct(id) {
        this.props.removefromcart(id);
    }

    render() {
        const { name, id, src } = this.props.data;
        let isInCart = this.props.isInCart;
        let btn = '';

        if(isInCart) {
            btn = <button className="btn btn-danger" onClick={() => this.removeProduct(id)}>Usuń</button>;
        } else {
            btn = <button className="btn btn-primary" onClick={() => this.onAddToCart(id)}>Do Koszyka</button>;
        }

        return (
            <div className="col-lg-4" onMouseOver={() => this.onMouseOver(id)}>
                <img src={src} alt={name} />
                {btn}
            </div>
        );
    }
}
