// Implementando um singleton com atributos privados.
var clienteSingleton = function() {
  // Área privada de atributos e funções.
  var atributoPrivado = 'Variavel privada';
  function mostrarVariavel() {
    console.log(atributoPrivado);
  }
  // Área pública de atributos e funções.
  // Esta área pode ser acessada pela área privada.
  return {
    funcaoPublica: function() {
      mostrarVariavel();
    },
    atributoPublico: 'Variável Pública'
  };
};
// Executando o Singleton.
var cliente = clienteSingleton();
// imprimindo 'Variavel privada'
cliente.funcaoPublica();
// imprimindo 'Variável Pública'
console.log(cliente.atributoPublico);