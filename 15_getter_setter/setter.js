const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    this._a = value;
    this.calculate();
  },
  set b(value) {
    this._b = value;
    this.calculate();
  }
};

console.log(numbers.sum);

numbers.a = 5;
console.log(numbers.sum);

numbers.b = 7;
console.log(numbers.sum);

numbers.a = 9;
console.log(numbers.sum);
