/// <reference path="../../e2e-tests/typings/angularjs/angular.d.ts" />

'use strict';

angular.module('ValidateNumber',[])

module ValidateNumber
{
    interface IValidateNumberScope  extends ng.IScope
    {
    }
    
    class ValidateNumberDirective implements ng.IDirective
    {
    	static instance() : ng.IDirective {
            return new ValidateNumberDirective;
        }

        restrict = 'A';

        link(scope : IValidateNumberScope, elements : ng.IAugmentedJQuery, attrs : ng.IAttributes) {

                elements.bind('blur', function() {
                    if((angular.element(elements[0]).val() != "") && (!Number(angular.element(elements[0]).val()))){
                            angular.element(elements[0]).css('border-color','red');
                        }else{
                            angular.element(elements[0]).css('border-color', 'initial')
                        }
                });

        }
    }

    angular.module('ValidateNumber').directive('validateNumber', ValidateNumberDirective.instance);
}