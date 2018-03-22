(function () {
    'use strict';

    angular.module('trtlApp.i18n')
    .controller('i18nController', I18nController);

    I18nController.$inject = [
        '$http'
    ];

    /**
    * @name i18nController
    * @description Internationalization controller.
    * @param {Service} $http AngularJS http service.
    */
    function I18nController ($http) {

        const resourcePath = '../i18n/';
        const defaultLocale = 'en';

        let ctrl = {
            navButtonHome: 'home'
        };

        ctrl.$onInit = function () {

            // Check local storage for language setting

            // Check browser language
            let lang = navigator.languages ?
                navigator.languages[0] : (navigator.language || navigator.userLanguage)
            console.log('Browser language is ' + lang);
            // Use default language
            ctrl.loadLanguage(defaultLocale);
        };

        /**
        * @name loadLanguage
        * @description Loads the language file for the specified locale.
        * @param {String} locale Locale code: en for english, es for spanish, etc.
        * @returns {Promise}
        */
        ctrl.loadLanguage = function (locale) {

            let filePath = resourcePath + (locale || defaultLocale) + '.json';
            return $http.get(filePath)
            .then(function (response) {

                if (response.data) {

                    ctrl.strings = response.data;
                }
            });
        };

        return ctrl;
    };
})();
