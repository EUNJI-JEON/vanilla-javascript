const calculator={
  plus: function(a,b){
    return a+b;
  },

  minus: function(a,b){
    return a-b;
  },

  multiply: function(a,b){
    return a*b;
  },

  division: function(a,b){
    return a/b;
  },

  powerOf: function(a,b){
    return a**b;
  }
}

const plus = calculator.plus(a,b);
const minus = calculator.minus(a,b);
const multiply = calculator.multiply(a,b);
const devision = calculator.division(a,b);
const powerOf = calculator.powerOf(a,b);

console.log(plus);
console.log(minus);
console.log(divide);
console.log(multiply);
console.log(powerOf);
