import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output('onSelectRecipe') onSelectRecipeEmitter = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a test 1', 'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg'),
    new Recipe('Another Test Recipe 2', 'This is simply a test 2', 'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg'),
    new Recipe('Some Delicious Recipe 3', 'This is simply a test 3', 'http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg')
  ];

  constructor() {}

  ngOnInit() {
    // TODO deal with the case the recipe list may be empty
    // this.onSelectRecipeEmitter.emit(this.recipes[0]);
  }

  onSelectRecipe(recipe: Recipe) {
    this.onSelectRecipeEmitter.emit(recipe);
  }

}
