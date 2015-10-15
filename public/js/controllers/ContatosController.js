angular.module('contatooh' ).controller('ContatosController' ,
function($scope, Contato) {

  $scope.contatos = [];
  $scope.filtro = '';
  $scope.mensagem = {texto: '' };

  $scope.removeContato = function(contato) {
    Contato.delete({id: contato._id},
      buscaContatos,
      function(erro) {
        console.log(erro);
        $scope.mensagem = {
          texto: 'Não foi possível remover o contato'
        };
      }
    );
  };

  function buscaContatos() {
    Contato.query(
      function(contatos) {
        $scope.contatos = contatos;
        $scope.mensagem = {};
      },
      function(erro) {
        console.log(erro);
        $scope.mensagem = {
          texto: 'Não foi possível obter a lista'
        };
      }
    );
  }

  buscaContatos();
});
