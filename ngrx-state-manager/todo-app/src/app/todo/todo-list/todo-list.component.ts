import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[] = [];
  // todoList$: Observable<AppState>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('todoList').subscribe((todoList: Todo[]) => this.todoList = todoList);
  }

}
