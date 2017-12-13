import { Todo } from './model/todo';

export interface AppState {
  todoList: Todo[]
}

export const initialState: AppState = {
  todoList: [
    { title: 'Arrumar a cama', done: true },
    { title: 'Estudar', done: false },
  ]
}
