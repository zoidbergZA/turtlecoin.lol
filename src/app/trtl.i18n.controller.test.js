describe('i18nController', function() {

    let ctrl, $scope, $q, i18nStrings;
    let mockLanguages = [];

    beforeEach(module('trtlApp.i18n'));

    beforeEach(function () {
        inject(function ($injector, _$rootScope_, $controller) {
            $scope = _$rootScope_.$new();
            $q = $injector.get('$q');
            i18nStrings = $injector.get('i18nStrings');
            ctrl = $controller('i18nController');
        });
    });

    it('should exist', function () {

        expect(ctrl).toBeDefined();
    });

    describe('activate', function () {

        it('should exist', function () {
            expect(ctrl.activate).toBeDefined();
        });

        it('should get the list of available languages', function () {
            ctrl.activate();
            expect(ctrl.languages.length).toEqual(Object.keys(i18nStrings.languages).length);
        });
    });

    describe('loadLanguage', function () {

        it('should exist', function () {
            expect(ctrl.loadLanguage).toBeDefined();
        });

        it('should set the selected language', function () {
            ctrl.loadLanguage('en');
            expect(ctrl.strings.mockString).toEqual(i18nStrings.languages.en.mockString);
        });

        it('should ignore missing languages', function () {
            ctrl.loadLanguage('not-a-language');
            expect(ctrl.strings.mockString).not.toBeDefined();
        });

        it('should use previous language on new language failure', function () {
            ctrl.loadLanguage('en');
            ctrl.loadLanguage('not-a-language');
            expect(ctrl.strings.mockString).toEqual(i18nStrings.languages.en.mockString);
        });
    });
});
