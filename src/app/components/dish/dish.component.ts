import { Component, Input } from '@angular/core';

@Component({
  selector: 'dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})

export class DishComponent {
  @Input() name: string;
  @Input() price: number;
  @Input() description: string;
}
