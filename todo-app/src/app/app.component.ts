import { Component, EventEmitter } from '@angular/core';

import { AppModel } from './app.model';
import { Todo } from './todo/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new AppModel();

  changeTodo(todo: Todo) {
    const i = this.model.todoList.findIndex((t) => t.text === todo.text);
    if (i !== -1) {
      this.model.todoList[i] = todo;
    }
  }
}
