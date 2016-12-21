/// <reference path="../../e2e-tests/typings/angularjs/angular.d.ts" />
'use strict';
angular.module('AddressSection', []);
var AddressSection;
(function (AddressSection) {
    var app = angular.module('AddressSection');
    var AddressSectionDirective = (function () {
        function AddressSectionDirective() {
            this.restrict = "E";
            this.replace = true;
            this.template = "<div><h3>This Application has 2 validation modules :: </h3>" +
                "<h3>1. ValidateNumber :: This module is present in this project (POC-ADDRESS)</h3>" +
                "<h3>2. ValidateString :: This module is referenced from POC-USER git project. </h3>" +
                "<div class='wrapper'>" +
                "<form>" +
                "<div class='lbl'>Address 1 : <span>(has NO validation)</span></div>" +
                "<div><input type='text' ng-model='address1'></div>" +
                "<div class='lbl'>Address 2 : <span>(has NO validation)</span></div>" +
                "<div><input type='text' ng-model='address2'></div>" +
                "<div class='lbl'>City : <span>(has string-character validation from <b>poc-user</b> git project)</span></div>" +
                "<div><input type='text' ng-model='city' validate-string></div>" +
                "<div class='lbl'>ZipCode : <span>(has number validation)</span></div>" +
                "<div><input type='text' ng-model='zipcode' validate-number></div>" +
                "</form>" +
                "</div></div>";
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
