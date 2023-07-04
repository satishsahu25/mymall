const {
    ADD_ORDER,
    DELETE_ORDER,
  } = require('../actions/ActionTypes');
  
  const orderreducers = (initialState = [], actions) => {
    switch (actions.type) {
      case ADD_ORDER:
        return [...initialState, actions.payload];
      case DELETE_ORDER:
        const deletedorder = initialState.filter((item, index) => {
          return index !== actions.payload;
        });
        return deletedorder;
      default:
        return initialState;
    }
  };
  
  export default orderreducers;
  