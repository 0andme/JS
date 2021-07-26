const dog = {
  name: "멍멍이",
  sound: "멍멍!",
  say: function say() {
    console.log(this.sound);
  }
};

dog.say();
