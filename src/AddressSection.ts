'use strict';

angular.module('AddressSection',[])

module AddressSection
{
    var app = angular.module('AddressSection');
    
    export class AddressSectionDirective implements ng.IDirective
    {
        public restrict: string = "E";
        public replace: boolean = true;
        public template: string = "<div>" +
            " <div>Address 1 : <input type=\"text\" ng-model=\"address1\"></div><br/>" +
            " <div>Address 2 : <input type=\"text\" ng-model=\"address2\"></div><br/>" +
            "</div>";
        public controller: string = 'AddressSectionCtrl';
        public controllerAs: string = 'Ctrl';
        public scope = {};
    }

    app.directive("addressSection", [() => new AddressSection.AddressSectionDirective()]);

    export interface IAddressSectionScope  extends ng.IScope
    {
        address1: string;
        address2: string;
        Ctrl: AddressSectionCtrl;
    }
    export class AddressSectionCtrl
    {
        static $inject = ["$scope", "$http"];
        constructor(protected $scope: AddressSection.IAddressSectionScope,
            protected $http: ng.IHttpService)
        {
        }
    }
    app.controller('AddressSectionCtrl',  AddressSection.AddressSectionCtrl);
}