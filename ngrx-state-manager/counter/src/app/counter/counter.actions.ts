import { Action } from '@ngrx/store';

export const LIKE = 'LIKE';
export const DISLIKE = 'DISLIKE';

export class Like implements Action {
  readonly type = LIKE;
  constructor(){}
}

export class Dislike implements Action {
  readonly type = DISLIKE;
  constructor(){}
}

export type Actions = Like | Dislike;
