import { Component, Output, EventEmitter } from '@angular/core';
import { Route } from '../app.router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output('routeChanged') routeChangedEvent = new EventEmitter<Route>();

  onNavigateToRecipes() {
    this.routeChangedEvent.emit(Route.RECIPES);
  }

  onNavigateToShoppingList() {
    this.routeChangedEvent.emit(Route.SHOPPING_LIST);
  }
}
