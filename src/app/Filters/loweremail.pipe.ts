import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loweremail'
})
export class LoweremailPipe implements PipeTransform {

  transform(value: string): string {
    if(value.length === 0){
      return value
    };
    
    return value.toLowerCase();  
  }

}
