import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/ingredients.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Tomatoes', 20)
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
