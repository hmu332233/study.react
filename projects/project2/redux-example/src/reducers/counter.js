import * as types from '../actions/ActionTypes';

const initialState = {
  number: 0,
  dumb: 'dumb',
  dumbObject: { 
    a: 0,
    b: 1,
    c: 2
  }
};

export default function counter(state, action) {
  if(typeof state == 'undefined') {
    return initialState;
  }
  
  /* */
  switch(action.type) {
    case types.INCREMENT:
      return { 
        ...state, 
        number: state.number + 1,
        dumbObject: {
        	...state.dumbObject,
        	a: 1
      	}
      };
  	case types.DECREMENT:
  		return {
      	...state,
      	number: state.number - 1
    	};
  default:
  	return state;
  };


  
  return state;
} 