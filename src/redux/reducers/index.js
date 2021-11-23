import { combineReducers } from "redux";
import { selectedProduct } from "../actions/productActiions";
import { productReducer, selectedProductReducer } from "./Productreducer";

  const reducers = combineReducers({
    allproducts : productReducer,
    product: selectedProductReducer
})

export default reducers;