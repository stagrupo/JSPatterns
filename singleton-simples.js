// Implementando um singleton simples.
var clienteSingleton = {
  nome: "Joao",
  email: "joao@mail.com",
  init: function(){
  	// Inicializador
    var _self = this; 
    _self.getMessage(_self);
  },
  getMessage: function() {
    console.log('Nome: '+ _self.nome +' Email: '+ _self.email);
  }
};

clienteSingleton.init();