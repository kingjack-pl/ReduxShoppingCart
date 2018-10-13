import ProductList from '../components/ProductList';
import { connect } from 'react-redux';
import { fetchproducts } from '../actions';

function mapStateToProps( state ) {
    const { products, activeId, addToCart } = state.items;

    return {
        products,
        activeId,
        addToCart
    }
}

export default connect(mapStateToProps, {fetchproducts})(ProductList);
