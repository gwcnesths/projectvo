/**
 * Weijian Zeng
 */

var homeCtrl = function($scope, $http, $stateParams, API ){
    var vm;
    vm = this;
    vm.title = 'Volunteering Opportunities';
    
    console.log('controller');
    
}

angular.module('app.controllers', [
    'app.services'
])
    .controller('homeCtrl', homeCtrl);