import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../interface/sttudent';



@Pipe({
  name: 'search'
  
})
export class SearchPipe implements PipeTransform {
  // name=''
  // gender=''
  // amount_balance=0




 
  transform(value:Student[], name:string): Student[] {
    if(value.length==0 || name==''){
      return value
    }
    const filtered:Student[]=[]
    for(let stud of value){
      if(stud.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase())!==-1){
        filtered.push(stud)
      }
    }
    return filtered
  }


}
