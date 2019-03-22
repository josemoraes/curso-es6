const nome  = 'José'
const idade = 25

const usuario = {
  nome,
  idade,
  empresa:'Mson'
}

console.log(usuario)

/* No ES6+ quando a propriedade de um objeto possui o mesmo nome que uma variável a ser configurada, não é necessário a repetir o nome da variável. Vale lembrar que ambos devem estar no mesmo escopo. */