import _ from "lodash";
import data from './data';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const ACTIVE_PRODUCT = 'ACTIVE_PRODUCT';
export const ADDTOCART = 'ADDTOCART';
export const REMOVEFROMCART = 'REMOVEFROMCART';

export function fetchproducts() {
    const dataObj = _.mapKeys(data, "id");

    return {
        type: FETCH_PRODUCTS,
        payload: dataObj
    };
}

export function activeproduct(id) {

    return {
        type: ACTIVE_PRODUCT,
        payload: id
    };
}

export function addtocart(id) {

    return {
        type: ADDTOCART,
        payload: id
    };
}

export function removefromcart(id) {

    return {
        type: REMOVEFROMCART,
        payload: id
    };
}
