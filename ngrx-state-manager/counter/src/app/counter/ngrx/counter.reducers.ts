import { Actions, LIKE, DISLIKE, RESET, SET_TO } from './counter.actions';
import { CounterState, initialState } from './counter.state';

/**
 * This function needs to ALWAYS return a new state object.
 * Remember that the State object needs to be and stay immutable.
 * 
 * @param state The state slice of the Global State
 * @param action The union of the actions of this feature
 * @returns New state slice
 */
export function counterReducer(state: CounterState = initialState, action: Actions): CounterState {
  switch(action.type) {
    case LIKE: {
      return {
        ...state,
        likeCounter: state.likeCounter + 1
      };
    }

    case DISLIKE: {
      return {
        ...state,
        likeCounter: state.likeCounter - 1
      };
    }

    case RESET: {
      return {
        ...state,
        likeCounter: 0
      };
    }

    case SET_TO: {
      return {
        ...state,
        likeCounter: action.value
      };
    }

    default: {
      console.error('Counter::reducer - UNKNOWN action dispatched');
      return state;
    }
  }
}
