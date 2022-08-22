import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {


  transform(value: string, gender:string): string  {

    if( gender.toLocaleLowerCase() == "female")
    {
    return "Miss." + value;}
  
    else if( gender.toLocaleLowerCase() == "male")
    {
    return "Mr." + value;}
  
    else
    return value
      }   
    }


