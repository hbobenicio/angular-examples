import { Component } from '@angular/core';
import { Route } from './app.router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Workaround to access the Route Enum inside the template
  // (at least this avoid hardcoding route strings on them...)
  Route = Route;

  currentRoute : Route = Route.RECIPES;

  changeRoute(event) {
    this.currentRoute = event;
    console.log(this.currentRoute);
  }
}
