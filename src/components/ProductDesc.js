import React from "react";

const ProductDesc = ({ data, data: { src, name, cat, desc, price } = {} }) => {
	if (!data) {
		return <div>Ładowanie...</div>;
	}

	return (
		<div className="productDesc">
			<img src={src} alt={name} />
			<h3>{name}</h3>
			<p>
				Kategoria: {cat}
				<br />
				Cena: {price} zł
			</p>
			<p>Opis: {desc}</p>
		</div>
	);
};

export default ProductDesc;
