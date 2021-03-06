'use strict';

angular.module('ddsApp').directive('dateNaissanceMaxAge', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function(viewValue) {
                var date = moment(viewValue, 'DD/MM/YYYY', true);
                if (date.isValid()) {
                    var maxAge = scope.$eval(attrs.dateNaissanceMaxAge);
                    if (angular.isDefined(maxAge)) {
                        var years = moment().diff(date, 'years');
                        if (years > maxAge) {
                            ctrl.$setValidity('dateNaissanceMaxAge', false);

                            return viewValue;
                        }
                    }
                }

                ctrl.$setValidity('dateNaissanceMaxAge', true);

                return viewValue;
            });
        }
    };
});

angular.module('ddsApp').directive('dateNaissanceMinAge', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function(viewValue) {
                var date = moment(viewValue, 'DD/MM/YYYY', true);
                if (date.isValid()) {
                    var minAge = scope.$eval(attrs.dateNaissanceMinAge);
                    if (angular.isDefined(minAge)) {
                        var years = moment().diff(date, 'years');
                        if (years < minAge) {
                            ctrl.$setValidity('dateNaissanceMinAge', false);

                            return viewValue;
                        }
                    }
                }

                ctrl.$setValidity('dateNaissanceMinAge', true);

                return viewValue;
            });
        }
    };
});
