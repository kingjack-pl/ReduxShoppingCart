import mapKeys from "lodash.mapkeys";
import data from "./data";
const dataObj = mapKeys(data, "id");

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const ACTIVE_PRODUCT = "ACTIVE_PRODUCT";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART";

export const fetchProducts = () => ({
	type: FETCH_PRODUCTS,
	payload: dataObj
});

export const activeProduct = id => ({
	type: ACTIVE_PRODUCT,
	payload: id
});

export const addToCart = id => ({
	type: ADD_TO_CART,
	payload: id
});

export const removeFromCart = id => ({
	type: REMOVE_FROM_CART,
	payload: id
});

export const removeAllFromCart = () => ({
	type: REMOVE_ALL_FROM_CART
});
