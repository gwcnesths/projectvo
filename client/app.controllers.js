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

    vm.data = [];
    
    vm.data.push( { title: 'Volunteering Op 1',
                 link: 'htttp:www.site1.com'
            });
    
    vm.data.push( { title: 'Volunteering Op 2',
                 link: 'htttp:www.site2.com'
            });
    
    console.log(vm.data)
    console.log('controller');
    
}

angular.module('app.controllers', [
    'app.services'
])
    .controller('homeCtrl', homeCtrl);