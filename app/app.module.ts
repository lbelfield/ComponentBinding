// tslint:disable-next-line no-reference (referencing the webpack runtime without export)
/// <reference path="../node_modules/awesome-typescript-loader/dist/runtime.d.ts" />

import ChildComponent from "./child.component";
import ParentComponent from "./parent.component"; 

angular.module("myapp", [
    "ngRoute"
]).config(configure);
configure.$inject = ["$routeProvider"];

angular.module("myapp")
    .component("parentComponent", new ParentComponent())
    .component("childComponent", new ChildComponent());

function configure($routeProvider) {
        $routeProvider.
            when("/home", {
                template: "<parent-component></parent-component>"
            }).
            otherwise({
                redirectTo: "/home"
            });
}

angular.element(document).ready(() => {
    angular.bootstrap(document.querySelector("#applicationHost"), ["myapp"]);
});
