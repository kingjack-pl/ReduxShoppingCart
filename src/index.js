import React from "react";
import ReactDOM from "react-dom";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ProductList from "./containers/ProductList";

import "./style/index.css";

ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<ProductList />
	</Provider>,
	document.querySelector("#root")
);
