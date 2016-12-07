var app = angular.module('plunker', ['nvd3']);

app.controller('MainCtrl', function($scope, $http) {
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
    var aKeys = Object.keys(oData.gtf);
    $scope.data = new Array();
    for(var n = 0; n < aKeys.length; n++){
        if(oData.gtf[aKeys[n]].hasOwnProperty("total")){
            $scope.data.push({"province":aKeys[n], "transfer":oData.gtf[aKeys[n]].total});
        }
    }
    
});