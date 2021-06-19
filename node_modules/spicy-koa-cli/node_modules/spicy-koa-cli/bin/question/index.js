import inquirer from "inquirer";
import middleware from "./middleware.js";
import port from "./port.js";
import projectName from "./projectName.js";
export default () => {
  return inquirer.prompt([projectName(), port(), middleware()]);
};
