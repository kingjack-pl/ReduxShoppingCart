import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activeproduct, addtocart, removefromcart } from '../actions';

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            disabledBtn: false
        }
    }

    onMouseOver(id) {
        this.props.activeproduct(id);
    }

    onAddToCart(id) {
        this.props.addtocart(id);
        this.setState({
            disabledBtn: true
        })
    }

    removeProduct(id) {
        this.props.removefromcart(id);
        this.setState({
            disabledBtn: false
        })
    }

  render() {
    const { name, id, src } = this.props.data;
    let btn = '';

    if(this.state.disabledBtn) {
        btn = <button className="btn btn-danger" onClick={() => this.removeProduct(id)}>Usuń</button>;
    } else {
        btn = <button className="btn btn-primary" onClick={() => this.onAddToCart(id)}>Do Koszyka</button>;
    }

    return (
        <div className="col-lg-4" onMouseOver={() => this.onMouseOver(id)}>
            <img src={src} alt={name} />
            { btn }
        </div>
    );
  }
}

export default connect(null, {activeproduct, addtocart, removefromcart})(Product);
