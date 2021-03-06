'use strict';

angular.module('ddsApp').controller('FoyerRecapLogementCtrl', function($scope, $rootScope, $http, $location, $anchorScroll, $timeout, logementTypes, locationTypes, loyerLabels) {
    $scope.logementTypeLabel = function() {
        var result = _.find(logementTypes, { id: $scope.situation.logement.type }).label;
        if ('locataire' === $scope.situation.logement.type && $scope.situation.logement.colocation) {
            result += ' en colocation';
        }

        return result;
    };

    $scope.locationTypeLabel = function() {
        return _.find(locationTypes, { id: $scope.situation.logement.locationType }).label;
    };

    $scope.loyerLabels = loyerLabels;

    $rootScope.$on('logementCaptured', function() {
        $timeout(function() {
            $location.hash('recap-logement');
            $anchorScroll();
        });
    });
});
