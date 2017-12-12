import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CounterReducer from './counter.reducers';
import * as CounterActions from './counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter: number = -1;

  constructor(private store: Store<{counterReducer: CounterReducer.State}>) { }

  ngOnInit() {
    this.store.select('counterReducer')
      .subscribe((state: CounterReducer.State) => this.counter = state.likeCounter);
  }

  like() {
    this.store.dispatch(new CounterActions.Like());
  }

}
