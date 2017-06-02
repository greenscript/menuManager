import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dish-form',
  templateUrl: './newDishForm.component.html',
  styleUrls: ['./newDishForm.component.css']
})

export class NewDishFormComponent {
  public title: string = 'New Dish';
  public categories: Array<any> = [
    {name: 'Lunch', key: 'LU'},
    {name: 'Breakfast', key: 'BF'},
    {name: 'Drinks', key: 'DN'}
  ]
  public dishes: Array<any> = [];
  @Input() name: string;
  @Input() description: string;
  @Input() category: string;
  @Input() price: number;
  @Output() sendDish: EventEmitter<any> = new EventEmitter();

  send() {
    this.sendDish.emit(
      {
        name: this.name,
        price: this.price,
        description: this.description,
        category: this.category
      }
    );
  }



}
