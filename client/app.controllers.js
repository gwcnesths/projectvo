/**
 * Weijian Zeng
 */

var homeCtrl = function($scope, $mdDialog, $http, $stateParams, API ){
    var vm;
    vm = this;
    vm.title = 'Volunteering Opportunities';
    
    $scope.showDialog = function(ev) {
        $mdDialog.show({
            controller: 'DialogController',
            controllerAs: 'dctrl',
            templateUrl: 'dialog.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
            $scope.status = 'You cancelled the dialog.';
        });
    };
}

angular.module('app.controllers', [
    'app.services'
])
    .controller('homeCtrl', homeCtrl);