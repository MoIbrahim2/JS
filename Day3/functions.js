// 1
const array = [1, 2, 2, 3, 4, 4, 5];
console.log(new Set(array));

const remove_duplicates = (array) => {
  return array.filter((item, index) => array.indexOf(item) === index);
};
console.log(remove_duplicates(array));

// 2
const array_names = ["apple", "banana", "mango"];
console.log(
  array_names.map((item) => {
    let reversed = "";
    for (let i = item.length - 1; i >= 0; i--) {
      reversed += item[i];
    }
    return reversed;
  })
);

// 3
const getEvenAndMultiply = (array) => {
  array = array.map((item) => {
    if (item % 2 == 0) {
      return item * 2;
    }
  });
  return array.filter((item) => {
    return item;
  });
};
console.log(getEvenAndMultiply([1, 2, 3, 4, 5, 6]));
// 4
const secondLargestNumber = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let n = 0; n < array.length - i - 1; n++) {
      if (array[n] > array[n + 1]) {
        let temp = array[n];
        array[n] = array[n + 1];
        array[n + 1] = temp;
      }
    }
  }
  console.log(array);
  return array[array.length - 2];
};
console.log(secondLargestNumber([10, 30, 50, 20, 40]));

// 5
const evenIndexOddIndex = (array) => {
  let evenArray = [];
  let oddArray = [];
  array.forEach((item, index) => {
    if (index % 2 == 0) evenArray.push(item);
    else oddArray.push(item);
  });

  console.log(evenArray);
  console.log(oddArray);
};
evenIndexOddIndex(["a", "b", "c", "d", "e"]);

// 6
const countNumbersGreaterThan = (array, number) => {
  let count = 0;
  for (let i of array) {
    if (i > number) count++;
  }
  return count;
};
console.log(countNumbersGreaterThan([20, 60, 51, 75, 33, 99], 50));

//7
const findTheLongestWord = (array) => {
  let largestString = "";
  let largetLenght = 0;
  for (let i in array) {
    if (array[i].length > largetLenght) {
      largetLenght = array[i].length;
      largestString = array[i];
    }
  }
  return largestString;
};
console.log(findTheLongestWord(["hi", "international", "cat", "sun"]));

// 8
const generateRandomArray = (length, min, max) => {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return array;
};
console.log(generateRandomArray(5, 10, 50));

// 9
const roundArray = (array) => {
  array = array.map((item) => Math.round(item));
  return array;
};
console.log(roundArray([1.2, 3.7, 4.5]));

// 10
const daysSinceDate = (array) => {
  array = array.map((item) => {
    todayDate = new Date();
    itemDate = new Date(item);
    daysInMilliseconds = todayDate - itemDate;
    days = daysInMilliseconds / (1000 * 60 * 60 * 24);
    return days;
  });
  return array;
};
console.log(daysSinceDate(["2024-01-01", "2024-03-01", "2024-04-15"]));

//11
const sortByDate = (array) => {
  return array.sort((a, b) => {
    a = new Date(a);
    b = new Date(b);
    return a - b;
  });
};
console.log(sortByDate(["2024-05-01", "2024-01-01", "2024-03-15"]));
