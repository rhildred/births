var app = angular.module('births', ['nvd3']);

app.controller('births_controller', function($scope, $http) {
    $scope.options = {
        chart: {
            type: 'pieChart',
            height: 800,
            x: function(d){
                return d.province;
            },
            y: function(d){
                return d.children;
            },
            showLabels: true,
            duration: 500,
            labelThreshold: 0.01,
            labelSunbeamLayout: true,
            legend: {
                margin: {
                    top: 5,
                    right: 35,
                    bottom: 5,
                    left: 0
                }
            }
        }
    };
    $scope.data = oBirths;
    
});