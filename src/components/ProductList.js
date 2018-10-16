import map from "lodash.map";
import React, { Component, Fragment } from "react";
import CartList from "../containers/CartList";
import Product from "../containers/Product";
import ProductDesc from "./ProductDesc";

export default class ProductList extends Component {
	componentDidMount() {
		this.props.fetchProducts();
	}

	render() {
		const { objProductsList, activeProductId, arrCartItemsId } = this.props;

		if (!objProductsList) {
			return <div>Ładowanie...</div>;
		}

		const renderProductList = map(objProductsList, product => (
			<Product
				key={product.id}
				data={product}
				isInCart={arrCartItemsId.indexOf(product.id) !== -1}
			/>
		));
		const activeProduct = objProductsList[activeProductId];

		return (
			<Fragment>
				<div className="col-lg-6">{renderProductList}</div>
				<div className="col-lg-6">
					<ProductDesc data={activeProduct} />
				</div>
				<div className="col-lg-12">
					<CartList
						objProductsList={objProductsList}
						arrCartItemsId={arrCartItemsId}
					/>
				</div>
			</Fragment>
		);
	}
}
