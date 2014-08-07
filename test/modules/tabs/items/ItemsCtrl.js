'use strict';
xdescribe('ItemsCtrl', function(){
    var scope;//we'll use this scope in our tests
    var controller;
    //mock Application to allow us to inject our own dependencies
    beforeEach(angular.mock.module('app'));
    //mock the controller for the same reason and include $rootScope and $controller
    beforeEach(angular.mock.inject(function($controller, $rootScope){
        //create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        $controller('ItemsCtrl as vm', {$scope: scope});

    }));
    // tests start here
    it('Should have an initialize function', function(){

        expect(scope.vm.initialize).toBeDefined();

    });
    it('Should have current geo location', function(){

        expect(scope.vm.locate).not.toBeUndefined();

    });

});
