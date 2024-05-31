import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.cyanBright(" jj's Word Counter"));
console.log("=".repeat(40));
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
let words = answers.sentence.trim().split(" ");
console.log("=".repeat(40));
console.log(chalk.bold("-Sentence words:"));
console.log(words);
console.log(chalk.bold(` -Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(40));
