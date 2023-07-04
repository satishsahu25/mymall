import { ADD_ADDRESS, ADD_ORDER, ADD_TO_CART, ADD_TO_WISHLIST, DELETE_ORDER, REMOVE_ADDRESS, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "./ActionTypes";

export const addItemtoCart=(data)=>({
    type:ADD_TO_CART,
    payload:data
});
export const removeItemfromCart=(indx)=>({
    type:REMOVE_FROM_CART,
    payload:indx
});
export const addItemtoWishlist=(data)=>({
    type:ADD_TO_WISHLIST,
    payload:data
});
export const removeItemfromWishlist=(indx)=>({
    type:REMOVE_FROM_WISHLIST,
    payload:indx
});
export const addAddress=(data)=>({
    type:ADD_ADDRESS,
    payload:data
});
export const removeAddress=(indx)=>({
    type:REMOVE_ADDRESS,
    payload:indx
});
export const addOrder=(data)=>({
    type:ADD_ORDER,
    payload:data
});
export const removeOrder=(indx)=>({
    type:DELETE_ORDER,
    payload:indx
});

