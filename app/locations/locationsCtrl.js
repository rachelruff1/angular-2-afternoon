angular.module('devmtnTravel').controller('locationsCtrl', function( $scope, mainSrvc ) {
 mainSrvc.getTravelInfo().then(resp=>{
     console.log(resp);
     $scope.locations = resp.data;
 })
});