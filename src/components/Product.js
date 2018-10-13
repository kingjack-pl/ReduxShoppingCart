import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activeproduct, addtocart, removefromcart } from '../actions';

class Product extends Component {

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
    return (
        <div className="col-lg-4" onMouseOver={() => this.onMouseOver(id)}>
            <img src={src} alt={name} />
            <button className="btn btn-primary" onClick={() => this.onAddToCart(id)}>Do Koszyka</button>
            <button className="btn btn-danger" onClick={() => this.removeProduct(id)}>Wyeb</button>
        </div>
    );
  }
}

export default connect(null, {activeproduct, addtocart, removefromcart})(Product);
