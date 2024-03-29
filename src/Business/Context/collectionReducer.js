import { GET_PRODUCTS, GET_SERVICES, INSERT_PRODUCTS, INSERT_SERVICES } from "./types";

export default (state, action) => {
    const {payload, type} = action;

    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        case GET_SERVICES:
            return {
                ...state,
                services: payload
            }
        case INSERT_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        case INSERT_SERVICES:
            return {
                ...state,
                services: payload
            }
        default:
            return state;
    }
}