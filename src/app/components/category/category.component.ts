import { Component, Input } from '@angular/core';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent {
  @Input() title: string;
  @Input() categoryValue: string;
  @Input() dishes: Array<any>;
}
