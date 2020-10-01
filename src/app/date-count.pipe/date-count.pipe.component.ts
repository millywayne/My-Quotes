import { pipe, PipeTransform ,} from '@angular/core';

@pipe({
  selector: 'app-date-count.pipe',
  templateUrl: './date-count.pipe.component.html',
  styleUrls: ['./date-count.pipe.component.css']
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); 
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference =Math.abs(value-todayWithNoTime )
    const secondsInADay= 86400; 

    var dateDifferenceSeconds=dateDifference*0.001; 

    var dateCounter = dateDifferenceSeconds/secondsInADay;

    if (dateCounter >= 1 && value > todayWithNoTime){
        return dateCounter;
    }else{
        return 0;
    }
  }
} 
