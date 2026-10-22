//---------------------------targil1
let a = "some string";
let b = "other string";

a = a + b; 
b = a.substring(0, a.length - b.length); 
a = a.substring(b.length);             

console.log(a); 
console.log(b); 

//---------------------------targil2

const grid = [
  ["X", "o", "x", "X", "."],
  ["o", "x", "o", ".", "X"],
  [".", "X", "o", "x", "o"],
  ["x", ".", "X", "o", "."],
  ["X", "o", ".", "x", "X"]
];

let count = 0;

for (let row = 0; row < grid.length; row++) {
  for (let col = 0; col < grid[row].length; col++) {

    if (grid[row][col] === "X") {
      count++;
      console.log(`Row: ${row}, Col: ${col}`);
    }
    
  }
}

console.log(`\nסה"כ הופיע 'X' : ${count} פעמים.`);

//------------------------targil3

let family = { parents: {}, children: [ {name: "Ali"}, {name: "Lea"}, {name: "Mona"} ] };
console.log(family.children[2].name);

//------------------------targil4

let arr=[1,2,3,4,5];
let temp=arr[0];
for (let i = 0; i < arr.length/2; i++) {
    temp=arr[i];
    arr.splice(i, 1, arr.length-i);
    arr.splice(arr.length-i-1, 1, temp);
}

console.log(arr);

//------------------------targil5

const mixedArray = [
  42, 
  "שלום", 
  true, 
  { name: "דני" }, 
  null, 
  100, 
  "עולם", 
  false, 
  null, 
  [1, 2, 3], 
  { a: 1 }
];


const counts = {
  number: 0,
  string: 0,
  object: 0,
  boolean: 0,
  null: 0
};

for (let item of mixedArray) {
  if (item === null) {
    counts.null++;
  } else {
    let itemType = typeof item;
    if (counts.hasOwnProperty(itemType)) {
      counts[itemType]++;
    }
  }
}

console.log("תוצאות הספירה:", counts);

//------------------------targil6

const numbers = [45, 120, 89, 200, 10, 105, 99, 150];

const filteredNumbers = [];
let comparisonCount = 0;

for (let i = 0; i < numbers.length; i++) {
  comparisonCount++; 
  
  if (numbers[i] > 100) {
    filteredNumbers.push(numbers[i]);
  }
}

console.log("מערך חדש (מספרים גדולים מ-100):", filteredNumbers);
console.log("סך הכל השוואות שבוצעו:", comparisonCount);

//-----------------------targil7
const numberGroups = {
  even: [],
  odd: []
};

let divisibleByBothCount = 0;

for (let i = 1; i <= 50; i++) {
  
  if (i % 2 === 0) {
    numberGroups.even.push(i);
  } else {
    numberGroups.odd.push(i);
  }


  if (i % 2 === 0 && i % 3 === 0) {
    divisibleByBothCount++;
  }
}

console.log("קבוצות המספרים:", numberGroups);
console.log("כמות המספרים שמתחלקים גם ב-2 וגם ב-3:", divisibleByBothCount);

//----------------------targil8

const size = 3;
const myGrid = [];

for (let row = 0; row < size; row++) {
  myGrid[row] = []; 
  
  for (let col = 0; col < size; col++) {
    if (row === col || col === size - 1 - row) {
      grid[row][col] = "#";
    } else {
      grid[row][col] = "."; 
    }
  }
}

console.table(grid);

//------------------targil16
const users = [
  { name: "Alice", status: "active", age: 22 },
  { name: "Bob", status: "inactive", age: 16 },
  { name: "Charlie", status: "active", age: 15 },
  { name: "Diana", status: "inactive", age: 25 },
  { name: "Eve", status: "active", age: 30 }
];

let inactiveUnder18Count = 0;

for (let user of users) {
  if (user.status === "active" && user.age > 18) {
    console.log(user.name);
  }
  if (user.status === "inactive" && user.age < 18) {
    inactiveUnder18Count++;
  }
}

console.log("Inactive under 18 count:", inactiveUnder18Count);
//----------------------targil17
const numbers = [45, 12, 89, 3, 200, 56];
let min = numbers[0];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log("Min:", min);
console.log("Max:", max);
//-----------------------targil18
let arr = [1, 2, 3];
const rotations = 3;

for (let step = 0; step < rotations; step++) {
  let first = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = first;
}

console.log(arr);

//----------------------targil19
const obj = { name: "Ali", age: 25 };
let jsonString = "{ ";
let keys = Object.keys(obj);

for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  let value = obj[key];
  
  if (typeof value === "string") {
    jsonString += `"${key}": "${value}"`;
  } else {
    jsonString += `"${key}": ${value}`;
  }

  if (i < keys.length - 1) {
    jsonString += ", ";
  }
}
jsonString += " }";

console.log(jsonString);

//----------------------targil20
const board = [
  ["O", "O", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "X", "X"],
  ["O", "X", "O", "X"]
];

let isValid = true;
const size = board.length;

for (let i = 0; i < size; i++) {
  let rowCount = 0;
  let colCount = 0;
  
  for (let j = 0; j < size; j++) {
    if (board[i][j] === "O") rowCount++;
    if (board[j][i] === "O") colCount++;
  }

  if (rowCount > 2 || colCount > 2) {
    isValid = false;
    break;
  }
}

if (!isValid) {
  console.log("Board violates the rule: more than two 'O's found in a row or column.");
} else {
  console.log("Board is valid.");
}
