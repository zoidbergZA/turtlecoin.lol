(function () {
    'use strict';

    angular.module('trtlApp.i18n')
    .controller('i18nController', I18nController);

    I18nController.$inject = [
        '$http',
        'i18nStrings'
    ];

    /**
    * @name i18nController
    * @description Internationalization controller.
    * @param {Service} $http AngularJS http service.
    */
    function I18nController ($http, i18nStrings) {

        const defaultLocale = 'en';
        const localStorageKey = 'trtl-locale';

        let ctrl = {
            navButtonHome: 'home',
            strings: {}
        };

        ctrl.$onInit = function () {

            ctrl.activate();
        };

        /**
        * @name activate
        * @description Initializes the controller.
        */
        ctrl.activate = function () {

            // Get the list of available languages.
            ctrl.languages = Object.keys(i18nStrings.languages);

            // Decide which language should be loaded.

            // First language priority is local storage.
            let languageToLoad = window.localStorage.getItem(localStorageKey);

            // Second priority is browser language.
            let browserLanguage = getBrowserLanguage();
            // Check if browser language is supported.
            if (i18nStrings.languages[browserLanguage]) {

                languageToLoad = languageToLoad || browserLanguage;
            }

            // Use default if languageToLoad has not been determined already.
            ctrl.loadLanguage(languageToLoad || defaultLocale);

            if (ctrl.strings.turtleDescriptionFullLine) {
                console.log('%c%s', 'color: green; font-weight: bold; font-size: 16px;', ctrl.strings.turtleDescriptionFullLine);
            }
        };

        /**
        * @name loadLanguage
        * @description Loads the language file for the specified locale.
        * @param {String} locale Locale code: en for english, es for spanish, etc.
        */
        ctrl.loadLanguage = function (locale) {

            if (i18nStrings.languages[locale]) {

                ctrl.strings = i18nStrings.languages[locale];
            }
        };

        return ctrl;

        /**
        * @name getBrowserLanguage
        * @description Gets the browser language from navigator.language.
        * @returns {String}
        */
        function getBrowserLanguage () {

            let browserLocale = navigator.languages ?
                navigator.languages[0] : (navigator.language || navigator.userLanguage);
            return browserLocale.substring(0,2);
        };
    };
})();
