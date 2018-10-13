import { FETCH_PRODUCTS, ACTIVE_PRODUCT, ADDTOCART, REMOVEFROMCART, REMOVEALLFROMCART } from '../actions';

const init = {
    products: {},
    activeId: 1,
    addToCart: []
};

export default function (state = init, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case ACTIVE_PRODUCT:
            return {
                ...state,
                activeId: action.payload
            };
        case ADDTOCART:
            return {
                ...state,
                addToCart: [...state.addToCart, action.payload]
            };
        case REMOVEFROMCART:
            return {
                ...state,
                addToCart: state.addToCart.filter(id => id !== action.payload)
            };
        case REMOVEALLFROMCART:
            return {
                ...state,
                addToCart: []
            };
        default:
            return state;
    }
}
