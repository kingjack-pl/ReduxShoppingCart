import CartList from '../components/CartList';
import { connect } from 'react-redux';
import { removeallfromcart } from '../actions';

export default connect(null, {removeallfromcart})(CartList);
