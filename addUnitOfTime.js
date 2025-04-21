export function addUnitOfTime(date, value, unit) {
  switch (unit) {
    case "s":
      date.setUTCSeconds(date.getUTCSeconds() + value);
      break;
    case "m":
      date.setUTCMinutes(date.getUTCMinutes() + value);
      break;
    case "h":
      date.setUTCHours(date.getUTCHours() + value);
      break;
    case "d":
      date.setUTCDate(date.getUTCDate() + value);
      break;
    case "mon":
      date.setUTCMonth(date.getUTCMonth() + value);
      break;
    case "y":
      date.setUTCFullYear(date.getUTCFullYear() + value);
      break;
    default:
      throw new Error(`Time unit indicated is unknown: ${unit}`);
  }
}
