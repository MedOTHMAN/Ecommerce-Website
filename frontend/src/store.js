import Cookie from 'js-cookie';
import {applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { productDetailsReducer, productListReducer, productSaveReducer } from './reducers/productReducers';
import { userSigninReducer , userRegisterReducer } from './reducers/userReducers';

const cartItems = Cookie.getJSON("cartItems") || [];
const userinfo = Cookie.getJSON("userinfo") || null;

const initialState = {cart: {cartItems}, userSignin:{userinfo}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails : productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk))); 
export default store;