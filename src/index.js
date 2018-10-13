import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ProductList from './containers/ProductList';

import './style/index.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <ProductList />
    </Provider>
    , document.querySelector('#root'));
