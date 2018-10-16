import CartList from "../components/CartList";
import { connect } from "react-redux";
import { removeAllFromCart } from "../actions";

export default connect(
	null,
	{ removeAllFromCart }
)(CartList);
