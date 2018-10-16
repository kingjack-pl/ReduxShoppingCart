import React from "react";

const CartItem = ({ item: { name, price } }) => (
	<p className="col-lg-2">
		Model: {name}
		<br />
		Cena: {price} zł
		<br />
	</p>
);

export default CartItem;
