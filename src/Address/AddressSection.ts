/// <reference path="../../e2e-tests/typings/angularjs/angular.d.ts" />

'use strict';

angular.module('AddressSection',[])

module AddressSection
{
    var app = angular.module('AddressSection');
    
    export class AddressSectionDirective implements ng.IDirective
    {
        public restrict: string = "E";
        public replace: boolean = true;
        public template: string = "<div><h3>This Application has 2 validation modules :: </h3>"+
            "<h3>1. ValidateNumber :: This module is present in this project (POC-ADDRESS)</h3>"+
            "<h3>2. ValidateString :: This module is referenced from POC-USER git project. </h3>"+
            "<div class='wrapper'>"+
            "<form>"+
                "<div class='lbl'>Address 1 : <span>(has NO validation)</span></div>"+
                "<div><input type='text' ng-model='address1'></div>"+
                "<div class='lbl'>Address 2 : <span>(has NO validation)</span></div>"+
                "<div><input type='text' ng-model='address2'></div>"+
                "<div class='lbl'>City : <span>(has string-character validation from <b>poc-user</b> git project)</span></div>"+
                "<div><input type='text' ng-model='city' validate-string></div>"+
                "<div class='lbl'>ZipCode : <span>(has number validation)</span></div>"+
                "<div><input type='text' ng-model='zipcode' validate-number></div>"+
            "</form>"+
            "</div></div>";
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