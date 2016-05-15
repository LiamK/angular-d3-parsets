(function () {
  'use strict';

  angular.module('myApp.controllers')
    .controller('ParsetsCtrl', ['$scope', function ($scope) {
      $scope.election = dataJSON.data;
      $scope.electorate = dataJSON.percentOfElectorate;      
    }]);

}());
