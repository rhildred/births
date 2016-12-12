var app = angular.module('drunk', ['nvd3']);

app.controller('drunk_controller', function($scope, $http) {
    $scope.options = {
        chart: {
            type: 'pieChart',
            height: 500,
            x: function(d){
                return d.province;
            },
            y: function(d){
                return d.transfer;
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
    $scope.data = oDrunkData;
    
});