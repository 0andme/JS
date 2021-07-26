const superHeroes = ["캡틴", "토르", "블랙위도우"];

for (let i = 0; i < superHeroes.length; i++) {
  console.log(superHeroes[i]);
}

function print(hero) {
  console.log(hero);
}

/*함수호출*/
superHeroes.forEach(print);
/*함수 바로 작성*/
superHeroes.forEach(function (hero) {
  console.log(hero);
});
/*화살표 함수로 작성*/
superHeroes.forEach((hero) => {
  console.log(hero);
});
