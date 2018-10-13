import _ from 'lodash';
import React, {Component, Fragment} from 'react';
import CartList from '../containers/CartList';
import Product from '../containers/Product';
import ProductDesc from './ProductDesc';

export default class ProductList extends Component {
    componentDidMount() {
        this.props.fetchproducts();
    }

    renderProductList() {
      return _.map(this.props.products, product => {
          return (
              <Product key={product.id} data={product} isInCart={this.props.addToCart.indexOf(product.id) !== -1} />
          );
      });
    }

  render() {
    const { products, activeId, addToCart } = this.props;
    const activeProduct = products[activeId];

    if(!this.props.products) {
        return <div>Ładowanie...</div>;
    }

    return (
        <Fragment>
            <div className="col-lg-6">
                { this.renderProductList() }
            </div>
            <div className="col-lg-6">
                <ProductDesc data={activeProduct}/>
            </div>
            <div className="col-lg-12">
                <CartList products={products} addToCart={addToCart} />
            </div>
        </Fragment>
    );
  }
}
