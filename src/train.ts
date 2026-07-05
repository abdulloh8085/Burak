/*  Project Standards:
  - Logging standards
  - Naming standards:
        function, method, variable => camelCase
        class => PascalCase
        folder => kebab-case
        css => snake_case
   - Error handling
 */

/* Cookies:
request join
self destroy */

/* Validation:
Frontend validation
Backend validation
DB validaation */

/*
  Traditional Frontend Development => SSR (Admin ) => EJS
  Modern Frontend Development => SPA (User) => REACT
*/

//TASK Z

function sumEvens(arr: number[]): number {
  let sum = 0;

  for (const num of arr) {
    if (num % 2 === 0) {
      sum += num;
    }
  }

  return sum;
}

console.log(sumEvens([2, 5, 6, 8, 9]));

// TASK Y

// function findIntersection(arr1: number[], arr2: number[]): number[] {
//   const result = [];

//   for (const num of arr1) {
//     if (arr2.includes(num)) {
//       result.push(num);
//     }
//   }

//   return result;
// }

// console.log(findIntersection([1, 2, 3, 1, 5, 6], [2, 4, 8, 6, 5]));


// TASK X

// function countOccurrences(obj: any, key: string): number {
//   let count = 0;

//   for (const k in obj) {
//     if (k === key) {
//       count++;
//     }

//     if (typeof obj[k] === "object" && obj[k] !== null) {
//       count += countOccurrences(obj[k], key);
//     }
//   }

//   return count;
// }

// const data = { model: "A", s: { model: "B" }, d: { model: "F" }, };

// console.log(countOccurrences(data, "model"));


// TASK W

// function divideArray(arr: number[], size: number): number[][] {
//   const result: number[][] = [];

//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }

//   return result;
// }
// console.log(divideArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));

//TASK V

// function countLetters(word: string): Record<string, number> {
//   const result: Record<string, number> = {};

//   for (const letter of word) {
//     if (letter in result) {
//       result[letter]++;
//     } else {
//       result[letter] = 1;
//     }
//   }
//   console.log(result);
//   return result;
// }

// countLetters("updateChosenUser")

// // TASK T
// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   const added = arr1.concat(arr2);
//   return added.sort((a, b) => a - b);
// }

// const result = mergeSortedArrays([3, 56, 7], [9, 8, 1])
// console.log(result);

// TASK S
// function missingNumber(arr: number[]): number {
//   const n = arr.length;
//   for (let i = 0; i <= n; i++) {
//     if (!arr.includes(i)) {
//       return i;
//     }
//   }
//   return -1;
// }

// const arr1 = [3, 0, 1, 4, 2, 6, 7];

// console.log(missingNumber(arr1));

// TASK R
// function calculate(expr: string): number {
//   const [a, operator, b] = expr.split(" ");
//   if (operator === "+") return Number(a) + Number(b);
//   if (operator === "-") return Number(a) - Number(b);
//   if (operator === "*") return Number(a) * Number(b);
//   if (operator === "/") return Number(a) / Number(b);
//   throw new Error("Invalid operator");
// }

// console.log(calculate("1 + 3"));
// console.log(calculate("5 * 2"));
// console.log(calculate("5 - 2"));



// TASK Q
// function hasProperty(obj: Record<string, any>, objKey: string): boolean {
//   for (const key in obj) {
//     if (key === objKey) {
//       console.log(`object has -> ${objKey} <- property`);
//       return true;
//     }
//   }
//   console.log(`object does not have -> ${objKey} <- property`);
//   return false;
// }

// const car = {
//   name: "BMW",
//   year: 2004,
// };

// console.log(hasProperty(car, "name"));
// console.log(hasProperty(car, "origin"));
// console.log(hasProperty(car, "year"));


//TASK P
// function objectToArray(obj: Record<string, any>): [string, any][] {
//   const result: [string, any][] = [];
//   for (const key in obj) {
//     result.push([key, obj[key]]);
//   }
//   return result;
// }

// console.log(objectToArray({ name: "Alex", age: 22, c: 30 }));




// task O
// function calculateSumOfNumbers(arr: any[]): number {
//   let total = 0;

//   for (const item of arr) {
//     if (typeof item === "number") {
//       total += item;
//     }
//   }

//   return total;
// }

// console.log(calculateSumOfNumbers([1, "10", { son: 10 }, true, 60, 29]));











//Task N
// function findPalindrom(str: String): boolean {
//     const str1: string = str.toLowerCase().split('').reverse().join('');
//     return str == str1;
// }
// const result1: boolean = findPalindrom("typescript")
// const result2: boolean = findPalindrom("daaad")
// console.log(result1)
// console.log(result2)




//task M
// function numberSquare(n: number[]) {
//     const result = n.map((num) => ({
//         number: num,
//         square: num ** 2,
//     }));
//     return result;
// }

// const numbers = [1, 2, 3, 4, 5, 6];

// console.log(numberSquare(numbers));