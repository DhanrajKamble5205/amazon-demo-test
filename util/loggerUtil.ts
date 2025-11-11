export class Logger {

    static info(message:string) {
        console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
    }

    static warn(message:string) {
        console.warn(`[WARN] ${new Date().toISOString()} - ${message}`);
    }

    static error(message:string) {
        console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
    }
}

/*
Use in Test

import { Logger } from "../utils/logger.js";

Logger.info("Starting Login Test");
await page.click('#loginButton');
Logger.warn("Login response taking longer than expected");
Logger.error("Login Failed - Incorrect Response Code");
✔ Standardized logging format
✔ Easy to filter logs by level
✔ Timestamped entries for better traceability
*/