import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setGender'
})
export class SetGenderPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value == '1') return 'Male';
    else return 'Female';
  }

}
