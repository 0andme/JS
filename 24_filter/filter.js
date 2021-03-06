const todos = [
  {
    id: 1,
    text: "자바스크립트 입문",
    done: true
  },
  { id: 2, text: "함수 배우기", done: true },
  { id: 3, text: "객체와 배열 배우기", done: true },
  { id: 4, text: "배열 내장 함수 배우기", done: false }
];

const A = todos.filter((todo) => todo.done === false);
console.log(A);
const B = todos.filter((todo) => todo.done === true);
console.log(B);
