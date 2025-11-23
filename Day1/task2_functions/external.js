function checkEven(x) {
  if (x % 2 == 0) return "even";
  return "odd";
}
for (i = 1; i <= 10; i++) {
  console.log(i);
}
function postiveOrNegative(x) {
  if (x > 0) return "Positive";
  else if (x < 0) return "Negative";
  return "zero";
}
function returnWeekDay(day) {
  switch (day) {
    case 0:
      return "Saturday";
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    default:
      return "Should be a number between 0 to 6";
  }
}
function returnWeekEndORNot(day) {
  switch (day) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "Weekday";
    case 6:
      return "Weekend";
    default:
      return "Should be a number between 0 to 6";
  }
}
console.log(checkEven(10));
console.log(postiveOrNegative(10));
console.log(returnWeekDay(5));
console.log(returnWeekEndORNot(6));
