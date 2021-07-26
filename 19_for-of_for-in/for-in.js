// 객체에 접근할 때 주로 사용된다.
const doggy = {
  name: "멍멍이",
  sound: "멍멍",
  age: 2
};
for (let key in doggy) {
  console.log(`${key}:${doggy[key]}`);
}
