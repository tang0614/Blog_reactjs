import * as actionTypes from "./actions";

const INGREDIENT_PRICE = {
  salad: 1.5,
  bacon: 2.3,
  meat: 3.2,
  cheese: 2.7,
};

const initialState = {
  ingredient: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 4,
  building: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredient: {
          ...state.ingredient,
          [action.name]: state.ingredient[action.name] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICE[action.name],
        building: true,
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredient: {
          ...state.ingredient,
          [action.name]: state.ingredient[action.name] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICE[action.name],
        building: true,
      };
    default:
      return state;
  }
};

export default reducer;
