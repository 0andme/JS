const array = [1, 2, 3, 4, 5, 6, 7, 8];

// 1번
// const squared = [];
// for (let i = 0; i < array.length; i++) {
//   squared.push(array[i] * array[i]);
// }

//2번
// const square = (n) => n * n;
// const squared = array.map(square);

//3번
const squared = array.map((n) => n * n);
console.log(squared);
