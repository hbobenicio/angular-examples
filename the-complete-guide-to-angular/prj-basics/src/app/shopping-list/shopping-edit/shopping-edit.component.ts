import {
  Component, OnInit,
  ViewChild, ElementRef,
  Output, EventEmitter
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput : ElementRef;
  @ViewChild('amountInput') amountInput : ElementRef;
  @Output() onAddedIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.onAddedIngredient.emit(newIngredient);
  }

  onDeleteIngredient() {

  }

  onClearIngredients() {

  }

}
