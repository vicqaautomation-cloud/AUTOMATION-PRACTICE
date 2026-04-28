import { test } from "@playwright/test";
import chalk, { colorNames } from "chalk";

// defining Union Type for log levels
type Level = "log" | "info" | "warn" | "error";

//creating the function to log the message with the level and color
export async function log(level: Level, message: string) {
    const plainLine = `[${level.toUpperCase()}]: ${message}`; // for Allure
    let coloredLine = plainLine

    // Pick color based on log level
    switch (level) {
        case "info":
            coloredLine = chalk.blue(plainLine);
            break;
        case "warn":
            coloredLine = chalk.yellow(plainLine);
            break;
        case "error":
            coloredLine = chalk.red(plainLine);
            break;
        default:
            coloredLine = chalk.white(plainLine);
    }

    // Print colored text in terminal
    (console[level] || console.log)(colorNames);

    //Send plain text to Allure
    await test.step(plainLine, async () => {});
}