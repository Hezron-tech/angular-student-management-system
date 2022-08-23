import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private eleRef:ElementRef) { 
    eleRef.nativeElement.style.background ='#A52A2A';
    eleRef.nativeElement.style.display='flex';
    eleRef.nativeElement.style.justifyContent='space-evenly';
    eleRef.nativeElement.style.color='white';

  }

}
