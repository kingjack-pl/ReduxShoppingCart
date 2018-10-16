import { combineReducers } from "redux";
import ProductsReducer from "./productsReducer";

const rootReducer = combineReducers({
	items: ProductsReducer
});

export default rootReducer;
