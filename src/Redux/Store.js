import { createStore } from 'redux';

const initialState = {
  user: null,
  userDetails: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
      };
    case 'SAVE_USER_DETAILS':
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return state;
  }
};

const Store = createStore(rootReducer);

export default Store;
