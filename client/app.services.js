/**
 * Weijian Zeng
 */
angular.module('app.services', [
    // list any dependencies below
    'ngResource'
])
// angular.module('app')
    .factory('API', ['$resource', function ($resource) {
        console.log('resources');
        var Volunteer = $resource('/api/volunteer/:id');
        return {
            Volunteer: Volunteer
        };
    }]);
