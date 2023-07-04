const {
  ADD_ADDRESS,
  REMOVE_ADDRESS,
} = require('../actions/ActionTypes');

const addressreducers = (initialState = [], actions) => {
  switch (actions.type) {
    case ADD_ADDRESS:
      return [...initialState, actions.payload];
    case REMOVE_ADDRESS:
      const deletedaddress = initialState.filter((item, index) => {
        return index !== actions.payload;
      });
      return deletedaddress;
    default:
      return initialState;
  }
};

export default addressreducers;
