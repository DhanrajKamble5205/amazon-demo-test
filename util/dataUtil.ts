export class DataUtil {

    static getRandomNumber(length = 6) {
        return Math.floor(Math.random() * Math.pow(10, length));
    }

    static getRandomEmail() {
        return 'user_' + this.getRandomNumber(4) + '@gmail.com';
    }

    static getRandomName() {
        const names = ["Raj", "Amit", "Sunil", "Neha", "Priya", "Kiran"];
        return names[Math.floor(Math.random() * names.length)];
    }
}

/*Use in Test

import { DataUtil } from "../utils/dataUtil.js";

const username = DataUtil.getRandomName();
const email = DataUtil.getRandomEmail();

await page.fill('#name', username);
await page.fill('#email', email);


✔ Avoids duplicate data
✔ Helps when the application needs unique values to create accounts or entries
*/