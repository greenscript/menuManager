import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public dishes: Array<any> = [
    {name: 'Pizza', price: 13, description: 'The better pizza slice in town.', category: 'LU'}
  ];

  getDish(e) {
    this.dishes.push(e);
    console.log(this.dishes);
  }

}
