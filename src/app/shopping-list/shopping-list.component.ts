import { Component, OnInit, OnDestroy, } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subcription: Subscription;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
   this.subcription= this.slService.ingredientChanged.subscribe(
      (ingredients: Ingredient[])=>{
        this.ingredients = ingredients;
      });
  }
  ngOnDestroy(){
    this.subcription.unsubscribe();
  }
}
