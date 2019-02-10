import * as types from '../actions/ActionTypes';

const initialState = {
  color: [255, 255, 255]
};

export default function ui(state, action) {
  if(typeof state == 'undefined') {
    return initialState;
  }
  
  if(action.type === types.SET_COLOR) {
    return {
      ...state,
      color: action.color
    };
  } else {
    return state;
  }
};