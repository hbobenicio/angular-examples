import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  intervalId : any;
  counter = 0;
  numbers : number[];
  gameStarted: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  onStartGame() {
    this.reset();
    this.intervalId = setInterval(() => this.gameStep(), 1000);
    this.gameStarted = true;
  }

  onStopGame() {
    clearInterval(this.intervalId);
    this.gameStarted = false;
  }

  gameStep() {
    this.counter++;
    console.log('Tick: ' + this.counter);
    this.numbers.push(this.counter);
  }

  reset() {
    this.intervalId = undefined;
    this.counter = 0;
    this.numbers = [];
  }

}
