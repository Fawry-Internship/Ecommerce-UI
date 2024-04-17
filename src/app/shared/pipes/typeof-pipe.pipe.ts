import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeofPipe'
})
export class TypeofPipePipe implements PipeTransform {

  transform(value: any): any {
    console.log("Pipe works ", typeof value);
    return typeof value;
  }

}
