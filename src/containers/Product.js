import Product from '../components/Product';
import { connect } from 'react-redux';
import { activeproduct, addtocart, removefromcart } from '../actions';

export default connect(null, {activeproduct, addtocart, removefromcart})(Product);
