'use strict';
angular.module('AddressSection', []);
var AddressSection;
(function (AddressSection) {
    var app = angular.module('AddressSection');
    var AddressSectionDirective = (function () {
        function AddressSectionDirective() {
            this.restrict = "E";
            this.replace = true;
            this.template = "<div>" +
                " <div>Address 1 : <input type=\"text\" ng-model=\"address1\"></div><br/>" +
                " <div>Address 2 : <input type=\"text\" ng-model=\"address2\"></div><br/>" +
                "</div>";
            this.controller = 'AddressSectionCtrl';
            this.controllerAs = 'Ctrl';
            this.scope = {};
        }
        return AddressSectionDirective;
    }());
    AddressSection.AddressSectionDirective = AddressSectionDirective;
    app.directive("addressSection", [function () { return new AddressSection.AddressSectionDirective(); }]);
    var AddressSectionCtrl = (function () {
        function AddressSectionCtrl($scope, $http) {
            this.$scope = $scope;
            this.$http = $http;
        }
        return AddressSectionCtrl;
    }());
    AddressSectionCtrl.$inject = ["$scope", "$http"];
    AddressSection.AddressSectionCtrl = AddressSectionCtrl;
    app.controller('AddressSectionCtrl', AddressSection.AddressSectionCtrl);
})(AddressSection || (AddressSection = {}));
