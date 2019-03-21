"use strict";

var usuario = {
  nome: 'Jose Carlos',
  idade: 25,
  endereco: {
    cidade: 'Londrina',
    estado: 'PR'
  }
};
console.log(usuario);
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

var mostraInfo = function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return console.log(nome, idade);
};

mostraInfo(usuario);
