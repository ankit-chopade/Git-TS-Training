import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteremp'
})
export class FilterempPipe implements PipeTransform {

  transform(input:any[],minsal:number,maxsal:number): any[] {
    let output:number[]=[];

    if(minsal>=0 && maxsal>=0)
    {
      output=input.filter(x=>x.sal>=minsal && x.sal<=maxsal)
    }
    else{
      output=input;
    }
    return output;
  }

}
