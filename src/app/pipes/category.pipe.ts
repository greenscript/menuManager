import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/rx';

@Pipe({ name: 'categoryPipe', pure: false })
export class CategoryPipe implements PipeTransform {
  constructor() {}

  transform(items:any[], args:string[]):any[] {
    if (typeof items === 'object') {
      var resultArray = [];
      if (args.length === 0) {
          resultArray = items;
      } else {
        for (let item of items) {
          if (item.category != null && item.category.match(new RegExp(''+args, 'i'))) {
            resultArray.push(item);
          }
        }
      }

      return resultArray;

    } else {
      return null;
    }
  }
}
