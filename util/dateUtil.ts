
export class DateUtil {

    static getTodayDate() {
        let today = new Date();
        return today.toISOString().split('T')[0]; // YYYY-MM-DD
    }

    static addDays(days:number) {
        let date = new Date();
        date.setDate(date.getDate() + days);
        return date.toISOString().split('T')[0];
    }

    static getTimeStamp() {
        return new Date().getTime();
    }
}

/*
Use in Test

import { DateUtil } from "../utils/dateUtil.js";

console.log(DateUtil.getTodayDate());
console.log(DateUtil.addDays(3));
console.log(DateUtil.getTimeStamp());


✔ Useful when filling date fields in forms
✔ Helpful in naming screenshots with timestamps
*/