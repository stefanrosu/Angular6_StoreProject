import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()

export class RecipeService{
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
  new Recipe('Schintzel','Description 1','https://www.retetecalamama.ro/wp-content/uploads/2009/03/snitel-de-porc-in-pesmet-reteta-snitel-traditionala.jpg',[
    new Ingredient('Meat',1),new Ingredient('Fries',20)
  ]),
  new Recipe('Burger','Description 2','https://www.redrobin.com/content/redrobin/site/en/nav/index/tavern-menu/jcr%3Acontent/centerParsys/responsivegrid/responsivegrid_826483054/responsivegrid_copy_328301901/image_1793125813.img.jpg',[
    new Ingredient('Meat',2),new Ingredient('Bread',10)
  ])
  ];

  constructor(private slService: ShoppingListService){
  }

  setRecipes(data: Recipe[]){
    this.recipes = data;
    this.recipeChanged.next(this.recipes.slice());

  }

  getRecipes(){
    return this.recipes.slice();
  }
  getRecipe(index: number){
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number){
    this.recipes.splice(index,1);
    this.recipeChanged.next(this.recipes.slice());
  }
}