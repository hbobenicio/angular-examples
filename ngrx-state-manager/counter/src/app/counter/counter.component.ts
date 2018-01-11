import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from './ngrx/counter.state';
import * as CounterReducer from './ngrx/counter.reducers';
import * as CounterActions from './ngrx/counter.actions';

interface CounterSlice {
  counter: CounterState
}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter: number = -1;

  constructor(private store: Store<CounterSlice>) { }

  ngOnInit() {
    this.store.select('counter')
      .subscribe((state: CounterState) => this.counter = state.likeCounter);
  }

  like() {
    this.store.dispatch(new CounterActions.Like());
  }

  dislike() {
    this.store.dispatch(new CounterActions.Dislike());
  }

  reset() {
    this.store.dispatch(new CounterActions.Reset());
  }

  setTo(value) {
    this.store.dispatch(new CounterActions.SetTo(value));
  }

}
