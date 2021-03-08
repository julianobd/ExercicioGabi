import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesNo'
})
export class yesNoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value ? "Sim" : "Não";
  }
}
