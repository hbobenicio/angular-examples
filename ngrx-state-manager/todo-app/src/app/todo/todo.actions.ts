import { Action } from '@ngrx/store';

export const TOGGLE_TODO = '[Todo] Toggle Todo';

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;
  constructor(private todoIndex: number){}
}

export type Actions = ToggleTodoAction;
