import { Todo } from './todo/todo.model';

export class AppModel {
  public todoList : Todo[]

  constructor() {
    this.todoList = [
      new Todo('Wash the dishes'),
      new Todo('Do the homework', true)
    ];
  }
}
