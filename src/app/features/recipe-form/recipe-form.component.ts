import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/database/recipe.model';
import * as moment from 'moment';
@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  constructor() { }

  public addRecipe: Recipe;


  ngOnInit() {
    this.addRecipe = this.createRecipe();
  }

  private createRecipe() {
    const recipe: Recipe = {
      title: 'New Recipe',
      id: '',
      publishDate: moment().toDate(),
      isDraft: true,
      authorId: 'admin',
      body: '',
      featureImg: ''
    };
    return recipe;
  }

}
