/// <reference path="../../e2e-tests/typings/angularjs/angular.d.ts" />
'use strict';
angular.module('ValidateNumber', []);
var ValidateNumber;
(function (ValidateNumber) {
    var ValidateNumberDirective = (function () {
        function ValidateNumberDirective() {
            this.restrict = 'A';
        }
        ValidateNumberDirective.instance = function () {
            return new ValidateNumberDirective;
        };
        ValidateNumberDirective.prototype.link = function (scope, elements, attrs) {
            elements.bind('blur', function () {
                if (!Number(scope.zipcode)) {
                    angular.element(elements[0]).css('border-color', 'red');
                }
                else {
                    angular.element(elements[0]).css('border-color', 'initial');
                }
            });
        };
        return ValidateNumberDirective;
    }());
    angular.module('ValidateNumber').directive('validateNumber', ValidateNumberDirective.instance);
})(ValidateNumber || (ValidateNumber = {}));
