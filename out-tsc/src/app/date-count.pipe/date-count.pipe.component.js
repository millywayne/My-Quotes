import { __decorate } from "tslib";
import { Pipe, } from '@angular/core';
let DateCountPipe = class DateCountPipe {
    transform(value) {
        let today = new Date();
        let todayWithNoTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var dateDifference = Math.abs(value - todayWithNoTime);
        const secondsInADay = 86400;
        var dateDifferenceSeconds = dateDifference * 0.001;
        var dateCounter = dateDifferenceSeconds / secondsInADay;
        if (dateCounter >= 1 && value > todayWithNoTime) {
            return dateCounter;
        }
        else {
            return 0;
        }
    }
};
DateCountPipe = __decorate([
    Pipe({
        name: 'dateCount'
    })
], DateCountPipe);
export { DateCountPipe };
//# sourceMappingURL=date-count.pipe.component.js.map