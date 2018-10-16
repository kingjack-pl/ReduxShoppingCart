import React, { Component } from "react";
import CartItem from "./CartItem";

export default class CartList extends Component {
	render() {
		const {
			arrCartItemsId,
			objProductsList,
			removeAllFromCart
		} = this.props;

		const cartItems = arrCartItemsId.map(id => objProductsList[id]);
		const cartItem = cartItems.map(item => (
			<CartItem key={item.id} item={item} />
		));
		const totalPrice = cartItems.reduce(
			(prev, next) => (prev += next.price),
			0
		);

		if (totalPrice === 0) {
			return null;
		}

		return (
			<div className="cartBox">
				<h3>Koszyk</h3>
				{cartItem}
				<div className="col-lg-12 text-right">
					<p>
						<b>Do zapłaty: {totalPrice} zł</b>
					</p>
					<button
						className="btn btn-danger"
						onClick={() => removeAllFromCart()}
					>
						Usuń wszystkie produkty
					</button>
				</div>
			</div>
		);
	}
}
