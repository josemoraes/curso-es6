const usuario = {
  nome : 'Jose Carlos',
  idade : 25,
  endereco : {
    cidade : 'Londrina',
    estado : 'PR'
  }
}

console.log(usuario)

const {nome, idade, endereco:{cidade}} = usuario

console.log(nome)
console.log(idade)
console.log(cidade)

const mostraInfo = ({nome, idade}) => (console.log(nome, idade))

mostraInfo(usuario)