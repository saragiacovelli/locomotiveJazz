angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('HomeCtrl', function($scope, $state, $filter, EventiServizio ) {
  $scope.vaiDettaglioEvento = function(evento){
    console.log("Ho ricevuto il click su: ", evento);
    $state.go("app.evento",{eventoId: evento.id})
  };

  $scope.eventi = EventiServizio.getEventi();

  $scope.prossimoEvento = $scope.eventi[0];
})

.controller('DettaglioEventoCtrl', function($scope, $stateParams, EventiServizio) {
    var idEvento = $stateParams.eventoId;

    console.log("Parametro dell'evento:", idEvento);

    $scope.evento = EventiServizio.getEvento(idEvento);
    $scope.acquistaPrevendita = function(){
      console.log("Vado all'acuqisto della prevendita: ", $scope.evento.link);
    };
    console.log("Ritorna l'evento", $scope.evento);
});
