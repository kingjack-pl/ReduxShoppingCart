import Product from "../components/Product";
import { connect } from "react-redux";
import { activeProduct, addToCart, removeFromCart } from "../actions";

export default connect(
	null,
	{ activeProduct, addToCart, removeFromCart }
)(Product);
