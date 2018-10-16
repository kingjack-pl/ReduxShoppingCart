import React, { Component } from "react";

export default class Product extends Component {
	render() {
		const {
			isInCart,
			data: { name, id, src },
			removeFromCart,
			addToCart,
			activeProduct
		} = this.props;

		let btnAddOrRemoveFromCart = null;

		if (isInCart) {
			btnAddOrRemoveFromCart = (
				<button
					className="btn btn-danger"
					onClick={() => removeFromCart(id)}
				>
					Usuń
				</button>
			);
		} else {
			btnAddOrRemoveFromCart = (
				<button
					className="btn btn-primary"
					onClick={() => addToCart(id)}
				>
					Do Koszyka
				</button>
			);
		}

		return (
			<div className="col-lg-4" onMouseOver={() => activeProduct(id)}>
				<img src={src} alt={name} />
				{btnAddOrRemoveFromCart}
			</div>
		);
	}
}
