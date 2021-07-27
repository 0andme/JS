const numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
  console.log(number);
}
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
const user = {
  name: "홍길동",
  age: 10
};
for (let value of user) {
  console.log(value);
}
for (let c of "hello") {
  console.log(c);
}
