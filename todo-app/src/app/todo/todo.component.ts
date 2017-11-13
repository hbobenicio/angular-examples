import {
  Component,
  Input, Output,
  EventEmitter
} from '@angular/core';

import {Todo} from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: Todo;
  @Output('todoChanged') todoChangedEvent = new EventEmitter<Todo>();

  onToggleTodoStatus() {
    console.log('[TODO] Todo toggled. Triggering todoChanged event.');

    const newTodo = new Todo(this.todo.text, !this.todo.done);
    this.todoChangedEvent.emit(newTodo);
  }
}
