import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nota'
})
export class NotaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value>=1 && value <=4){
      return value+' DESAPROBADO';
    }
    if(value>4 && value <=6){
      return value+' APROBADO';
    }
    if(value>6){
      return value+' PROMOCIONADO';
    }
  }

}
