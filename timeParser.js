import { addUnitOfTime } from "./addUnitOfTime.js";

function timeParser(timeExpression) {
  if (!timeExpression || typeof timeExpression != "string") {
    console.log("Invalid input");
  }

  let dateOutcome = new Date();

  if (!timeExpression.startsWith("now()")) {
    console.log("Expression must start with 'now'");
  }

  const modifiers = timeExpression.substring(5).trim();

  if (!modifiers) {
    return dateOutcome;
  }

  const modifierRegex = /([+-])(\d+)([a-z]+)/g;
  let match;

  while ((match = modifierRegex.exec(modifiers)) !== null) {
    const operator = match[1];
    const value = parseInt(match[2], 10);
    const unit = match[3];

    if (operator === "+") {
      addUnitOfTime(dateOutcome, value, unit);
    }
  }

  return dateOutcome;
}

console.log(timeParser("now()"));
console.log(timeParser("now()+1d"));
console.log(timeParser("now()+7h+20m"));
console.log(timeParser("now()+1y+8mon+1d+7h+3m+13s"));
