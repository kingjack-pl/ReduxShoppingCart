import _ from 'lodash';
import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { fetchproducts } from '../actions';
import Product from './Product';
import ProductDesc from './ProductDesc';
import CartList from './CartList';

class ProductList extends Component {
    componentDidMount() {
        this.props.fetchproducts();
    }

    renderProductList() {
      return _.map(this.props.products, product => {
          return (
              <Product key={ product.id } data={ product } />
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
                <ProductDesc data={ activeProduct }/>
            </div>
            <div className="col-lg-12">
                <CartList products={ products } addToCart={ addToCart } />
            </div>
        </Fragment>
    );
  }
}

function mapStateToProps( state ) {
    const { products, activeId, addToCart} = state.items;

    return {
        products,
        activeId,
        addToCart
    }
}

export default connect(mapStateToProps, {fetchproducts})(ProductList);
