import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>(); 
  private recipes: Recipe[] = [
  new Recipe('Schintzel','Description 1','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
    new Ingredient('Meat',1),new Ingredient('Fries',20)
  ]),
  new Recipe('Burger','Description 2','https://cdn.pixabay.com/photo/2018/05/31/15/06/not-hear-3444212_960_720.jpg',[
    new Ingredient('Meat',2),new Ingredient('Bread',10)
  ])
  ];

  constructor(private slService: ShoppingListService){
  }

  getRecipes(){
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}