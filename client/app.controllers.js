/**
 * Weijian Zeng
 */




var homeCtrl = function($scope, $http, $stateParams, API ){
    var vm;
    vm = this;
    vm.title = 'Volunteering Opportunities';
    
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