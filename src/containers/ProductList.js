import ProductList from "../components/ProductList";
import { connect } from "react-redux";
import { fetchProducts } from "../actions";

const mapStateToProps = ({ items }) => ({ ...items });

export default connect(
	mapStateToProps,
	{ fetchProducts }
)(ProductList);
