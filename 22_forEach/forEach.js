const users = ["철이", "미애", "길동"];

/*1. for 문 이용

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}
/*

/*2. function과 for 문을 이용
function print(user) {
  console.log(user);
}
for (let i = 0; i < users.length; i++) {
  print(users[i]);
}*/
/* 화살표 함수와 for 문을 이용
const print = (user) => console.log(user);
for (let i = 0; i < users.length; i++) {
  print(users[i]);
}
*/
/*forEach 1. 파라미터에 함수명
function print(userName) {
  console.log(userName);
}
users.forEach(print);
*/

// /*함수 바로 작성*/
users.forEach(function (userName) {
  console.log(userName);
});

/*화살표 함수로 작성*/
users.forEach((userName) => {
  console.log(userName);
});
