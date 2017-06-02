import { Component, Input } from '@angular/core';
import { DishComponent } from '../dish/dish.component';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent {
  @Input() dishes: Array<any>;
  public categories: Array<any> = [
    {name: 'Lunch', value: 'LU' },
    {name: 'Drinks', value: 'DN' },
    {name: 'Breakfast', value: 'BF' }
  ]
}
