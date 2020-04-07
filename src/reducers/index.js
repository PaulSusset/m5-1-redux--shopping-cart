import { bindActionCreators } from "redux";
import { isSwitchStatement } from "typescript";

const initialState = {};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      console.log(state);
      console.log(action);
      // console.log(state[action.item.id].quantity);
      if (Object.keys(state).includes(action.item.id)) {
        return {
          ...state,
          [action.item.id]: {
            ...action.item,
            quantity: state[action.item.id].quantity + 1,
          },
        };
      } else {
        return {
          ...state,
          [action.item.id]: {
            ...action.item,
            quantity: 1,
          },
        };
      }
    }
    case "REMOVE_ITEM": {
      let stateCopy = { ...state };
      delete stateCopy[action.item.item.id];
      return stateCopy;
    }
    case "UPDATE_ITEM": {
      return {
        ...state,
        [action.item.item.id]: {
          ...action.item.item,
          quantity: action.item.value,
        },
      };
    }

    default:
      return state;
  }
};

export const getStoreItemArr = (state) => Object.values(state);

export default cartReducer;
