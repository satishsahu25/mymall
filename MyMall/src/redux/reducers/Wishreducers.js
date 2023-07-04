const { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } = require("../actions/ActionTypes");

const wishreducers=(initialState=[],actions)=>{
    switch(actions.type){
    
            
            case ADD_TO_WISHLIST:
                return [...initialState, actions.payload];
            case REMOVE_FROM_WISHLIST:
                const deletedArraywish=initialState.filter((item,index)=>{
                    return index!==actions.payload
                })
                return deletedArraywish;
        default:
            return initialState;
    }
}

export default wishreducers;