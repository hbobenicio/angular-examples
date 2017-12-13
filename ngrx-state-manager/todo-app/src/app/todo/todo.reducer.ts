import { AppState, initialState } from '../app.state';
import { Action } from '@ngrx/store';

export function todoReducer(state: AppState = initialState, action: Action): AppState {
  return state;
}
