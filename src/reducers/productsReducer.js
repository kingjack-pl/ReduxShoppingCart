import {
	FETCH_PRODUCTS,
	ACTIVE_PRODUCT,
	ADD_TO_CART,
	REMOVE_FROM_CART,
	REMOVE_ALL_FROM_CART
} from "../actions";

const init = {
	objProductsList: {},
	activeProductId: 1,
	arrCartItemsId: []
};

export default function(state = init, action) {
	switch (action.type) {
		case FETCH_PRODUCTS:
			return {
				...state,
				objProductsList: action.payload
			};
		case ACTIVE_PRODUCT:
			return {
				...state,
				activeProductId: action.payload
			};
		case ADD_TO_CART:
			return {
				...state,
				arrCartItemsId: [...state.arrCartItemsId, action.payload]
			};
		case REMOVE_FROM_CART:
			return {
				...state,
				arrCartItemsId: state.arrCartItemsId.filter(
					id => id !== action.payload
				)
			};
		case REMOVE_ALL_FROM_CART:
			return {
				...state,
				arrCartItemsId: []
			};
		default:
			return state;
	}
}
