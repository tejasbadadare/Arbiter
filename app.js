var string = "abc" + "def"
var app = angular.module('decisionPage', []);


var test2 = "What Should I Eat Today?"
app.controller('decisionController', [
'$scope',
function($scope){
  $scope.test = string;
}]);
