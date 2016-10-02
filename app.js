var app = angular.module('decisionPage', []);

var test2 = "What Should I Eat Today?"
console.error('In angular?');

app.controller('decisionController', function($scope, $http) {
    $http({
        method: "GET",
        url: "/api/getNewest"
    }).then(function successCB(resp) {

        console.error("Returned from GET request");

        console.error('In angular: ' + resp);

        for (var key in resp.data) {
            console.log('key: ' + key);
        }

        $scope.decision = resp.data.decision_name;
        $scope.choice_a = resp.data.choice_a;
        console.log($scope.choice_a);

        $scope.choice_b = resp.data.choice_b;
        console.log($scope.choice_b);
    }),
    function errorCB(err) {
        console.log("Error: "  + err);
    }
});
