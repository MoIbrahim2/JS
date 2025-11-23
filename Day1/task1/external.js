//Would print undefined as the hoisting took a place and put the definition of the variables at the beginning of the file without giving them value
console.log(number1);
console.log(number2);
console.log(number3);
//If i removed the var keyword the hoisting will not be acheived so if i tried to log before intialization of the variable will return error
var number1 = 3,
  number2 = 2.9,
  number3 = 0xff;
var firstName = "mohamed";
var middleName = "ibrahim";
var lastName = `hassan`;
var flag = true;
console.log("this is external JS file");
firstName[3] = "b";
//Will be printed as "mohamed" with no edit in the variable because in JS string protected from being altered, but you can change the whole variable.
console.log(firstName);
console.log(typeof number1);
console.log(typeof number2);
console.log(typeof number3);
console.log(typeof firstName);
console.log(typeof middleName);
console.log(typeof lastName);
