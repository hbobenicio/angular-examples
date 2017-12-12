import * as CounterActions from './counter.actions';

export interface State {
  likeCounter: number;
};

const initialState: State = {
  likeCounter: 0
};

export function reducer(state: State = initialState, action: CounterActions.Actions): State {
  switch(action.type) {
    case CounterActions.LIKE: {
      console.log('Counter::reducer - LIKE action dispatched');
      return {
        ...state,
        likeCounter: state.likeCounter + 1
      };
    }

    default: {
      console.log('Counter::reducer - UNKNOWN action dispatched');
      return state;
    }
  }
}
