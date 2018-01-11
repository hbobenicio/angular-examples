import { Action as StoreAction } from '@ngrx/store';

export const LIKE = 'LIKE';
export const DISLIKE = 'DISLIKE';
export const RESET = 'RESET';
export const SET_TO = 'SET_TO';

export class Like implements StoreAction {
  readonly type = LIKE;
  constructor(){}
};

export class Dislike implements StoreAction {
  readonly type = DISLIKE;
  constructor(){}
};

export class Reset implements StoreAction {
  readonly type = RESET;
  constructor(){}
};

export class SetTo implements StoreAction {
  readonly type = SET_TO;
  constructor(public value: number){}
};

export type Actions = Like | Dislike | Reset | SetTo;
