webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// tslint:disable-next-line no-reference (referencing the webpack runtime without export)
	/// <reference path="../node_modules/awesome-typescript-loader/dist/runtime.d.ts" />
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, child_component_1, parent_component_1) {
	    "use strict";
	    angular.module("myapp", [
	        "ngRoute"
	    ]).config(configure);
	    configure.$inject = ["$routeProvider"];
	    angular.module("myapp")
	        .component("parentComponent", new parent_component_1.default())
	        .component("childComponent", new child_component_1.default());
	    function configure($routeProvider) {
	        $routeProvider.
	            when("/home", {
	            template: "<parent-component></parent-component>"
	        }).
	            otherwise({
	            redirectTo: "/home"
	        });
	    }
	    angular.element(document).ready(function () {
	        angular.bootstrap(document.querySelector("#applicationHost"), ["myapp"]);
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    var ChildController = (function () {
	        function ChildController() {
	        }
	        ChildController.prototype.$onChanges = function (changes) {
	            console.log(changes);
	            // console.log(changes.visible.currentValue);
	            // this.savingIndicator = changes.visible.currentValue;
	            console.log(changes.savingIndicator.currentValue);
	            this.savingIndicator = changes.savingIndicator.currentValue;
	        };
	        return ChildController;
	    }());
	    var ChildComponent = (function () {
	        function ChildComponent() {
	            this.controller = ChildController;
	            this.template = __webpack_require__(2);
	            this.bindings = {
	                // visible: "<"
	                savingIndicator: "<"
	            };
	        }
	        return ChildComponent;
	    }());
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ChildComponent;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "<div ng-show=\"$ctrl.visible\">Child component</div>\r\n<div>{{$ctrl.savingIndicator}}</div>";

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    var ParentController = (function () {
	        function ParentController() {
	            this.childVisible = true;
	            this.childSavingIndicator = "start";
	        }
	        ParentController.prototype.showChild = function () {
	            this.childVisible = true;
	            this.childSavingIndicator = "hello";
	        };
	        ParentController.prototype.hideChild = function () {
	            this.childVisible = false;
	            this.childSavingIndicator = "world";
	        };
	        return ParentController;
	    }());
	    var ParentComponent = (function () {
	        function ParentComponent() {
	            this.controller = ParentController;
	            this.template = __webpack_require__(4);
	        }
	        return ParentComponent;
	    }());
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ParentComponent;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<div>Parent component</div>\r\n<div>\r\n    <button ng-click=\"$ctrl.showChild()\">Show</button>\r\n    <button ng-click=\"$ctrl.hideChild()\">Hide</button>\r\n</div>\r\n\r\n<!--uncomment childSavingIndicator to see string example -->\r\n<child-component saving-indicator=\"$ctrl.childSavingIndicator\"></child-component>\r\n\r\n<!--uncomment childVisible to see string example -->\r\n<!-- uncomment visible in child.component.ts too -->\r\n<!--<child-component visible=\"$ctrl.childVisible\"></child-component>-->\r\n\r\n";

/***/ }
]);
//# sourceMappingURL=app-bundle.js.map