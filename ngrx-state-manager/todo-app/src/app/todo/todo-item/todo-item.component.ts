import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../model/todo';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;

  get todoStyle() {
    return {
      textDecoration: this.todo.done ? 'line-through' : ''
    };
  }

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toggleDone(): void {
    // this.store.dispatch();
  }

}
