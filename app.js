var app = angular.module('decisionPage', []);

var test2 = "What Should I Eat Today?"
console.error('In angular?');

app.controller('decisionController', function($scope, $http) {
    $http({
        method: "GET",
        url: "/api/getNewest"
    }).then(function successCB(resp) {

        $scope.decision = resp.data.decision_name;
        $scope.choice_a = resp.data.choice_a;
        console.log($scope.choice_a);

        $scope.numVotesA = resp.data.score_a;
        $scope.numVotesB = resp.data.score_b;

        $scope.choice_b = resp.data.choice_b;
        $scope.decision_id = resp.data.decision_id;
        console.log($scope.choice_b);
    }),
    function errorCB(err) {
        console.log("Error: "  + err);
    }
});
