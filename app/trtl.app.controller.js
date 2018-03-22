(function () {
    'use strict';

    angular.module('trtlApp')
    .controller('appController', AppController);

    AppController.$inject = [

    ];

    /**
    *
    */
    function AppController () {

        let ctrl = {

        };

        ctrl.$onInit = function () {
            console.log('turtlecoin ready!');
        };

        return ctrl;
    };
})();
