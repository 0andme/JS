const dog = {
  name: "멍멍이",
  sound: "멍멍!",
  say: function () {
    console.log(this.sound);
  }
};

dog.say();
