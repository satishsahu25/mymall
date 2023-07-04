const { ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } = require("../actions/ActionTypes");

const reducers=(initialState=[],actions)=>{
    switch(actions.type){
        case ADD_TO_CART:
            return [...initialState, actions.payload];
        case REMOVE_FROM_CART:
            const deletedArray=initialState.filter((item,index)=>{
                return index!==actions.payload
            })
            return deletedArray;        
 
        default:
            return initialState;
    }
}

export default reducers;