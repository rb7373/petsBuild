(function() {
    'use strict';

    angular.module('app.core', [
        /*
         * Angular modules
         */
        //'ui.router',
        'ngMaterial',
        /*
         * Our reusable cross app code modules
         */
        'app.layout',
        'app.widgets',

        /*
         * 3rd Party modules
         */
        'lumx'

    ]);
})();
