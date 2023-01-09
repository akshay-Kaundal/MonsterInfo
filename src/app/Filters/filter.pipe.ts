import { Pipe, PipeTransform } from '@angular/core';
import { Monsterdetail } from '../Model/monsterdetail';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, property: string): Monsterdetail[] {
    if(value.length === 0 || !filterString){
      return value;
    }

    let filteredMonster: Monsterdetail[] = [];
    for (let monster of value){
      if(monster[property].toLowerCase().includes(filterString.toLowerCase())){
        filteredMonster.push(monster);
      }
    }
    return filteredMonster;
  }
}
