import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCantidadAlumnos]'
})
export class CantidadAlumnosDirective {

  constructor(el: ElementRef) {
    setTimeout(() => {
      console.log(el);
      console.log(el.nativeElement.innerText);
      el.nativeElement.style.padding = '0.2rem';
      el.nativeElement.style.borderRadius = '50%';
      el.nativeElement.style.margin = '1rem';
      if(el.nativeElement.innerText >17){
        el.nativeElement.style.backgroundColor = 'green';
        el.nativeElement.style.color = 'white';
      }
      else if(el.nativeElement.innerText >10 && el.nativeElement.innerText < 15){
        el.nativeElement.style.backgroundColor = 'yellow';
      }
      else if(el.nativeElement.innerText < 5){
        el.nativeElement.style.backgroundColor = 'red';
       

      }

    }, 1000);


 }
}
