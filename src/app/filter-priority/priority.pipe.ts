import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './types';

@Pipe({
  name: 'priority'
})
export class PriorityPipe implements PipeTransform {

  responseArr: Item[] = [];

  transform(value: Item[]): Item[] {
    value.map(el => {
      if(el.priority >= 500){
        this.responseArr.push(el)
      }
    })
    return this.responseArr;
  }

}
