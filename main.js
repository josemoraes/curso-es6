function soma(a = 3, b = 4){
  return a + b;
}

const somaArrow  = (a = 3, b = 4) => a + b

console.log(soma());
console.log(soma(1));
console.log(somaArrow());
console.log(somaArrow(1));
