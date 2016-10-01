var string = "What should I eat for breakfast"
var string_a = "eat a dick"
var string_b = "eat an ass"
var app = angular.module('decisionPage', []);


var test2 = "What Should I Eat Today?"
app.controller('decisionController', [
'$scope',
function($scope){
  $scope.test = string;
  $scope.choice_a = string_a;
  $scope.choice_b = string_b;
}]);
