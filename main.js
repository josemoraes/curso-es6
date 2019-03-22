// REST => Resto

const usuario = {
  nome : 'Jose Carlos',
  idade : 25,
  empresa: 'Mson'
}

const {nome, ...resto} = usuario

console.log(nome)
console.log(resto)

function soma(...params){
  return params.reduce((total, next)=> total + next)
}

console.log(soma(1,2,3,4,5,6))


// SPREAD => Propagar

const arr1 = [1,2,3]
const arr2 = [4,5,6]

const arr3 = [...arr1, ...arr2]

console.log(arr3)

const usuario2 = {...usuario, nome:'Carlinhos'}

console.log(usuario2)