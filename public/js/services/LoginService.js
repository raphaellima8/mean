angular.module('api').factory('Login',
    function ($resource) {
        return $resource('/')
    }
)
