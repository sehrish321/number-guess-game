#!/usr/bin/env node
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
const sleep = () => new Promise((resolve) => setTimeout((resolve), 2000));
async function welcomeScreen() {
    let title = chalkAnimation.rainbow(figlet.textSync('NUMBER GUESS GAME'));
    await sleep();
    title.stop();
}
await welcomeScreen();
const game = async () => {
    while (true) {
        let userInput = await inquirer.prompt({
            name: "usernumber",
            type: "number",
            message: "enter a number:",
        });
        let randomValue = Math.floor(Math.random() * 3);
        if (randomValue == userInput.usernumber) {
            console.log(chalk.green("you win"));
            break;
        }
        else if (randomValue > userInput.usernumber) {
            console.log(chalk.red("user enter value is low"));
        }
        else if (randomValue < userInput.usernumber) {
            console.log(chalk.yellow("user enter value is high"));
        }
    }
};
game();
