(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\smija8k\Documents\Projects\git\GitHub\bicarbon8.github.io\e-d-controls\src\main.ts */"zUnb");


/***/ }),

/***/ "6Fu/":
/*!*****************************************************!*\
  !*** ./src/app/e-d-controls/e-d-controls.module.ts ***!
  \*****************************************************/
/*! exports provided: EDControlsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDControlsModule", function() { return EDControlsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "vVj5");
/* harmony import */ var _tabs_map_tab_map_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/map-tab/map-tab.component */ "6uYf");
/* harmony import */ var _tabs_ship_tab_ship_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/ship-tab/ship-tab.component */ "ngc3");
/* harmony import */ var _tabs_srv_tab_srv_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/srv-tab/srv-tab.component */ "Ffev");
/* harmony import */ var _tabs_tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs/tab-card/tab-card.component */ "EXeD");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs/tabs.component */ "xItX");
/* harmony import */ var _e_d_controls_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./e-d-controls.component */ "vOet");
/* harmony import */ var _e_d_controls_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./e-d-controls-routing.module */ "k+gZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class EDControlsModule {
}
EDControlsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: EDControlsModule });
EDControlsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function EDControlsModule_Factory(t) { return new (t || EDControlsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _e_d_controls_routing_module__WEBPACK_IMPORTED_MODULE_8__["EDControlsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](EDControlsModule, { declarations: [_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__["TabsComponent"],
        _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_1__["FileUploadComponent"],
        _tabs_ship_tab_ship_tab_component__WEBPACK_IMPORTED_MODULE_3__["ShipTabComponent"],
        _tabs_srv_tab_srv_tab_component__WEBPACK_IMPORTED_MODULE_4__["SrvTabComponent"],
        _tabs_tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_5__["TabCardComponent"],
        _tabs_map_tab_map_tab_component__WEBPACK_IMPORTED_MODULE_2__["MapTabComponent"],
        _e_d_controls_component__WEBPACK_IMPORTED_MODULE_7__["EDControlsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _e_d_controls_routing_module__WEBPACK_IMPORTED_MODULE_8__["EDControlsRoutingModule"]], exports: [_e_d_controls_component__WEBPACK_IMPORTED_MODULE_7__["EDControlsComponent"]] }); })();


/***/ }),

/***/ "6uYf":
/*!****************************************************************!*\
  !*** ./src/app/e-d-controls/tabs/map-tab/map-tab.component.ts ***!
  \****************************************************************/
/*! exports provided: MapTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTabComponent", function() { return MapTabComponent; });
/* harmony import */ var _base_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-tab */ "MAge");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab-card/tab-card.component */ "EXeD");



class MapTabComponent extends _base_tab__WEBPACK_IMPORTED_MODULE_0__["BaseTab"] {
    getMasonrySelector() {
        return '.map-grid';
    }
    getMapControlsData() {
        return this.getCardData('Map Controls', new Map([
            ['Galaxy Map (Ship)', 'root.galaxymapopen'],
            ['Galaxy Map (SRV)', 'root.galaxymapopen_buggy'],
            ['Hightlight Current System', 'root.galaxymaphome'],
            ['System Map (Ship)', 'root.systemmapopen'],
            ['System Map (SRV)', 'root.systemmapopen_buggy']
        ]));
    }
    getCameraControlsData() {
        return this.getCardData('Camera Controls', new Map([
            ['Camera Pitch', 'root.campitchaxis'],
            ['Camera Pitch Up', 'root.campitchup'],
            ['Camera Pitch Down', 'root.campitchdown'],
            ['Camera Yaw', 'root.camyawaxis'],
            ['Camera Yaw Left', 'root.camyawleft'],
            ['Camera Yaw Right', 'root.camyawright'],
            ['Camera Translate Y-Axis', 'root.camtranslateyaxis'],
            ['Camera Translate Forward', 'root.camtranslateforward'],
            ['Camera Translate Backward', 'root.camtranslatebackward'],
            ['Camera Translate X-Axis', 'root.camtranslatexaxis'],
            ['Camera Translate Left', 'root.camtranslateleft'],
            ['Camera Translate Right', 'root.camtranslateright'],
            ['Camera Translate Z-Axis', 'root.camtranslatezaxis'],
            ['Camera Translate Up', 'root.camtranslateup'],
            ['Camera Translate Down', 'root.camtranslatedown'],
            ['Camera Zoom', 'root.camzoomaxis'],
            ['Camera Zoom In', 'root.camzoomin'],
            ['Camera Zoom Out', 'root.camzoomout'],
            ['Camera Translate Z-Hold', 'root.camtranslatezhold']
        ]));
    }
    getUiControlsData() {
        return this.getCardData('UI Controls', new Map([
            ['UI Up', 'root.ui_up'],
            ['UI Down', 'root.ui_down'],
            ['UI Left', 'root.ui_left'],
            ['UI Right', 'root.ui_right'],
            ['UI Select', 'root.ui_select'],
            ['UI Back', 'root.ui_back'],
            ['UI Toggle', 'root.ui_toggle'],
            ['Next Panel', 'root.cyclenextpanel'],
            ['Previous Panel', 'root.cyclepreviouspanel'],
            ['Next Page', 'root.cyclenextpage'],
            ['Previous Page', 'root.cyclepreviouspage']
        ]));
    }
}
MapTabComponent.ɵfac = function MapTabComponent_Factory(t) { return ɵMapTabComponent_BaseFactory(t || MapTabComponent); };
MapTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MapTabComponent, selectors: [["app-map-tab"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 3, consts: [["data-masonry", "{\"itemSelector\": \"grid-item\", \"percentPosition\": true}", 1, "row", "grid", "map-grid"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "map-controls"], [3, "data"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "camera-controls"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "ui-controls"]], template: function MapTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getMapControlsData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getCameraControlsData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getUiControlsData());
    } }, directives: [_tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_2__["TabCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5jc3MifQ== */", "@import url(\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css\");\r\n@import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css\");\r\n@media print {\r\n    .grid[_ngcontent-%COMP%] {\r\n        height:auto !important;\r\n        max-width: 100%;\r\n        text-align:center;\r\n    }\r\n    .grid-item[_ngcontent-%COMP%] {\r\n        position: relative !important;\r\n        left: auto !important;\r\n        top: auto !important;\r\n        float: none !important;\r\n        display: block !important;\r\n        padding: 0;\r\n        margin: 2px;\r\n        max-width: 32%;\r\n        page-break-inside: avoid;\r\n    }\r\n    div[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtZC1jb250cm9scy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1RiwwRkFBMEY7QUFDMUY7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixXQUFXO1FBQ1gsY0FBYztRQUNkLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiZS1kLWNvbnRyb2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuMy4wL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzc1wiKTtcclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5ncmlkIHtcclxuICAgICAgICBoZWlnaHQ6YXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuICAgIC5ncmlkLWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMyJTtcclxuICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });
const ɵMapTabComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MapTabComponent);


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EXeD":
/*!******************************************************************!*\
  !*** ./src/app/e-d-controls/tabs/tab-card/tab-card.component.ts ***!
  \******************************************************************/
/*! exports provided: TabCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabCardComponent", function() { return TabCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function TabCardComponent_div_10_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const k_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("key-sprite ", k_r4, "");
} }
function TabCardComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TabCardComponent_div_10_i_4_Template, 2, 3, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", c_r2.command, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", c_r2.keys);
} }
function TabCardComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " unassigned ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", c_r5.command, ": ");
} }
class TabCardComponent {
    constructor() {
        this.showUnassigned = false;
    }
}
TabCardComponent.ɵfac = function TabCardComponent_Factory(t) { return new (t || TabCardComponent)(); };
TabCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabCardComponent, selectors: [["app-tab-card"]], inputs: { data: "data" }, decls: 13, vars: 6, consts: [[1, "card", "my-1"], [1, "card-header", "fs-6"], [1, "d-flex"], [1, "p-1", "flex-grow-1"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Show unassigned", 1, "form-check", "form-switch", "form-check-inline"], ["type", "checkbox", "id", "flexSwitchCheckDefault", 1, "form-check-input", 3, "change"], ["for", "flexSwitchCheckDefault", 1, "form-check-label", "fw-light", "d-none", "d-md-block"], ["class", "d-flex", 4, "ngFor", "ngForOf"], [1, "bg-light", "p-1", "fs-7"], [1, "border", "border-light", "p-1", "flex-fill"], [3, "class", 4, "ngFor", "ngForOf"], [1, "p-1", "fs-7"], [1, "p-1", "fw-light", "flex-fill"]], template: function TabCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TabCardComponent_Template_input_change_7_listener() { return ctx.showUnassigned = !ctx.showUnassigned; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Show unassigned");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TabCardComponent_div_10_Template, 5, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TabCardComponent_div_12_Template, 5, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card-footer ", ctx.showUnassigned ? "" : "d-none", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.unassigned);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["i.key-sprite[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 32px;\r\n    height: 32px;\r\n    zoom: 0.75;\r\n    -webkit-print-color-adjust: exact !important;\r\n    color-adjust: exact !important;\r\n}\r\ni.key-sprite.GamePad_RThumb[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -128px -64px no-repeat;\r\n}\r\ni.key-sprite.GamePad_RStickX[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -96px -64px no-repeat;\r\n}\r\ni.key-sprite.Pos_GamePad_RStickX[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -160px -64px no-repeat;\r\n}\r\ni.key-sprite.Neg_GamePad_RStickX[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -64px -64px no-repeat;\r\n}\r\ni.key-sprite.GamePad_RStickY[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -224px -64px no-repeat;\r\n}\r\ni.key-sprite.Pos_GamePad_RStickY[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -192px -64px no-repeat;\r\n}\r\ni.key-sprite.Neg_GamePad_RStickY[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -32px -64px no-repeat;\r\n}\r\ni.key-sprite.GamePad_LThumb[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -128px -32px no-repeat;\r\n}\r\ni.key-sprite.GamePad_LStickX[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -96px -32px no-repeat;\r\n}\r\ni.key-sprite.Pos_GamePad_LStickX[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -160px -32px no-repeat;\r\n}\r\ni.key-sprite.Neg_GamePad_LStickX[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -64px -32px no-repeat;\r\n}\r\ni.key-sprite.GamePad_LStickY[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -224px -32px no-repeat;\r\n}\r\ni.key-sprite.Pos_GamePad_LStickY[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -192px -32px no-repeat;\r\n}\r\ni.key-sprite.Neg_GamePad_LStickY[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -32px -32px no-repeat;\r\n}\r\ni.key-sprite.GamePad_DPadUp[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -192px -96px no-repeat;\r\n}\r\ni.key-sprite.GamePad_DPadRight[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -160px -96px no-repeat;\r\n}\r\ni.key-sprite.GamePad_DPadDown[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -32px -96px no-repeat;\r\n}\r\ni.key-sprite.GamePad_DPadLeft[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -64px -96px no-repeat;\r\n}\r\ni.key-sprite.GamePad_FaceUp[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -96px 0px no-repeat;\r\n}\r\ni.key-sprite.GamePad_FaceRight[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -32px 0px no-repeat;\r\n}\r\ni.key-sprite.GamePad_FaceDown[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -0px 0px no-repeat;\r\n}\r\ni.key-sprite.GamePad_FaceLeft[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -64px 0px no-repeat;\r\n}\r\ni.key-sprite.GamePad_LBumper[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -128px 0px no-repeat;\r\n}\r\ni.key-sprite.GamePad_RBumper[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -192px 0px no-repeat;\r\n}\r\ni.key-sprite[_ngcontent-%COMP%]:is(.Pos_GamePad_LTrigger, .Neg_GamePad_LTrigger[_ngcontent-%COMP%], .GamePad_LTrigger)[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -160px 0px no-repeat;\r\n}\r\ni.key-sprite[_ngcontent-%COMP%]:is(.Pos_GamePad_RTrigger, .Neg_GamePad_RTrigger[_ngcontent-%COMP%], .GamePad_RTrigger)[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -224px 0px no-repeat;\r\n}\r\ni.key-sprite.GamePad_Back[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -192px -128px no-repeat;\r\n}\r\ni.key-sprite.GamePad_Forward[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -192px -160px no-repeat;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsNENBQTRDO0lBQzVDLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksK0VBQStFO0FBQ25GO0FBQ0E7SUFDSSw4RUFBOEU7QUFDbEY7QUFDQTtJQUNJLCtFQUErRTtBQUNuRjtBQUNBO0lBQ0ksOEVBQThFO0FBQ2xGO0FBQ0E7SUFDSSwrRUFBK0U7QUFDbkY7QUFDQTtJQUNJLCtFQUErRTtBQUNuRjtBQUNBO0lBQ0ksOEVBQThFO0FBQ2xGO0FBQ0E7SUFDSSwrRUFBK0U7QUFDbkY7QUFDQTtJQUNJLDhFQUE4RTtBQUNsRjtBQUNBO0lBQ0ksK0VBQStFO0FBQ25GO0FBQ0E7SUFDSSw4RUFBOEU7QUFDbEY7QUFDQTtJQUNJLCtFQUErRTtBQUNuRjtBQUNBO0lBQ0ksK0VBQStFO0FBQ25GO0FBQ0E7SUFDSSw4RUFBOEU7QUFDbEY7QUFDQTtJQUNJLCtFQUErRTtBQUNuRjtBQUNBO0lBQ0ksK0VBQStFO0FBQ25GO0FBQ0E7SUFDSSw4RUFBOEU7QUFDbEY7QUFDQTtJQUNJLDhFQUE4RTtBQUNsRjtBQUNBO0lBQ0ksNEVBQTRFO0FBQ2hGO0FBQ0E7SUFDSSw0RUFBNEU7QUFDaEY7QUFDQTtJQUNJLDJFQUEyRTtBQUMvRTtBQUNBO0lBQ0ksNEVBQTRFO0FBQ2hGO0FBQ0E7SUFDSSw2RUFBNkU7QUFDakY7QUFDQTtJQUNJLDZFQUE2RTtBQUNqRjtBQUNBO0lBQ0ksNkVBQTZFO0FBQ2pGO0FBQ0E7SUFDSSw2RUFBNkU7QUFDakY7QUFDQTtJQUNJLGdGQUFnRjtBQUNwRjtBQUNBO0lBQ0ksZ0ZBQWdGO0FBQ3BGIiwiZmlsZSI6InRhYi1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpLmtleS1zcHJpdGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICB6b29tOiAwLjc1O1xyXG4gICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvci1hZGp1c3Q6IGV4YWN0ICFpbXBvcnRhbnQ7XHJcbn1cclxuaS5rZXktc3ByaXRlLkdhbWVQYWRfUlRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvR2FtZUNvbnRyb2xsZXJCdXR0b25zLnBuZycpIC0xMjhweCAtNjRweCBuby1yZXBlYXQ7XHJcbn1cclxuaS5rZXktc3ByaXRlLkdhbWVQYWRfUlN0aWNrWCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtOTZweCAtNjRweCBuby1yZXBlYXQ7XHJcbn1cclxuaS5rZXktc3ByaXRlLlBvc19HYW1lUGFkX1JTdGlja1gge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTE2MHB4IC02NHB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGUuTmVnX0dhbWVQYWRfUlN0aWNrWCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtNjRweCAtNjRweCBuby1yZXBlYXQ7XHJcbn1cclxuaS5rZXktc3ByaXRlLkdhbWVQYWRfUlN0aWNrWSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtMjI0cHggLTY0cHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5Qb3NfR2FtZVBhZF9SU3RpY2tZIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvR2FtZUNvbnRyb2xsZXJCdXR0b25zLnBuZycpIC0xOTJweCAtNjRweCBuby1yZXBlYXQ7XHJcbn1cclxuaS5rZXktc3ByaXRlLk5lZ19HYW1lUGFkX1JTdGlja1kge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTMycHggLTY0cHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5HYW1lUGFkX0xUaHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtMTI4cHggLTMycHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5HYW1lUGFkX0xTdGlja1gge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTk2cHggLTMycHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5Qb3NfR2FtZVBhZF9MU3RpY2tYIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvR2FtZUNvbnRyb2xsZXJCdXR0b25zLnBuZycpIC0xNjBweCAtMzJweCBuby1yZXBlYXQ7XHJcbn1cclxuaS5rZXktc3ByaXRlLk5lZ19HYW1lUGFkX0xTdGlja1gge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTY0cHggLTMycHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5HYW1lUGFkX0xTdGlja1kge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTIyNHB4IC0zMnB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGUuUG9zX0dhbWVQYWRfTFN0aWNrWSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtMTkycHggLTMycHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5OZWdfR2FtZVBhZF9MU3RpY2tZIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvR2FtZUNvbnRyb2xsZXJCdXR0b25zLnBuZycpIC0zMnB4IC0zMnB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGUuR2FtZVBhZF9EUGFkVXAge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTE5MnB4IC05NnB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGUuR2FtZVBhZF9EUGFkUmlnaHQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTE2MHB4IC05NnB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGUuR2FtZVBhZF9EUGFkRG93biB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtMzJweCAtOTZweCBuby1yZXBlYXQ7XHJcbn1cclxuaS5rZXktc3ByaXRlLkdhbWVQYWRfRFBhZExlZnQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTY0cHggLTk2cHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5HYW1lUGFkX0ZhY2VVcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtOTZweCAwcHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5HYW1lUGFkX0ZhY2VSaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtMzJweCAwcHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5HYW1lUGFkX0ZhY2VEb3duIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvR2FtZUNvbnRyb2xsZXJCdXR0b25zLnBuZycpIC0wcHggMHB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGUuR2FtZVBhZF9GYWNlTGVmdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtNjRweCAwcHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5HYW1lUGFkX0xCdW1wZXIge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTEyOHB4IDBweCBuby1yZXBlYXQ7XHJcbn1cclxuaS5rZXktc3ByaXRlLkdhbWVQYWRfUkJ1bXBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtMTkycHggMHB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGU6aXMoLlBvc19HYW1lUGFkX0xUcmlnZ2VyLCAuTmVnX0dhbWVQYWRfTFRyaWdnZXIsIC5HYW1lUGFkX0xUcmlnZ2VyKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtMTYwcHggMHB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGU6aXMoLlBvc19HYW1lUGFkX1JUcmlnZ2VyLCAuTmVnX0dhbWVQYWRfUlRyaWdnZXIsIC5HYW1lUGFkX1JUcmlnZ2VyKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtMjI0cHggMHB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGUuR2FtZVBhZF9CYWNrIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvR2FtZUNvbnRyb2xsZXJCdXR0b25zLnBuZycpIC0xOTJweCAtMTI4cHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5HYW1lUGFkX0ZvcndhcmQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTE5MnB4IC0xNjBweCBuby1yZXBlYXQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Ffev":
/*!****************************************************************!*\
  !*** ./src/app/e-d-controls/tabs/srv-tab/srv-tab.component.ts ***!
  \****************************************************************/
/*! exports provided: SrvTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SrvTabComponent", function() { return SrvTabComponent; });
/* harmony import */ var _base_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-tab */ "MAge");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab-card/tab-card.component */ "EXeD");



class SrvTabComponent extends _base_tab__WEBPACK_IMPORTED_MODULE_0__["BaseTab"] {
    getMasonrySelector() {
        return '.srv-grid';
    }
    getHeadingData() {
        return this.getCardData('Heading', new Map([
            ['Steering', 'root.steeringaxis'],
            ['Steer Left', 'root.steerleftbutton'],
            ['Steer Right', 'root.steerrightbutton'],
            ['Roll', 'root.buggyrollaxisraw'],
            ['Roll Left', 'root.buggyrollleftbutton'],
            ['Roll Right', 'root.buggyrollrightbutton'],
            ['Pitch', 'root.buggypitchaxis'],
            ['Pitch Up', 'root.buggypitchupbutton'],
            ['Pitch Down', 'root.buggypitchdownbutton']
        ]));
    }
    getMovementData() {
        return this.getCardData('Movement', new Map([
            ['Vertical Thrusters', 'root.verticalthrustersbutton'],
            ['Throttle', 'root.drivespeedaxis'],
            ['Max Throttle Forward', 'root.increasespeedbuttonmax'],
            ['Max Throttle Backward', 'root.decreasespeedbuttonmax'],
            ['Increase Speed', 'root.increasespeedbuttonpartial'],
            ['Decrease Speed', 'root.decreasespeedbuttonpartial'],
            ['Toggle Drive Assist', 'root.toggledriveassist'],
            ['Toggle Handbrake', 'root.autobreakbuggybutton']
        ]));
    }
    getDrivingMiscData() {
        return this.getCardData('Driving / Misc.', new Map([
            ['Toggle Lights', 'root.headlightsbuggybutton'],
            ['PIPs to Engines', 'root.increaseenginespower_buggy'],
            ['PIPs to Weapons', 'root.increaseweaponspower_buggy'],
            ['PIPs to Systems', 'root.increasesystemspower_buggy'],
            ['Reset PIPs', 'root.resetpowerdistribution_buggy'],
            ['Toggle Cargo Scoop', 'root.togglecargoscoop_buggy'],
            ['Eject All Cargo', 'root.ejectallcargo_buggy'],
            ['Recall / Dismiss Ship', 'root.recalldismissship']
        ]));
    }
    getTargetingData() {
        return this.getCardData('Targeting', new Map([
            ['targetAheadKey', 'root.selecttarget_buggy']
        ]));
    }
    getWeaponsData() {
        return this.getCardData('Weapons', new Map([
            ['Primary Fire', 'root.buggyprimaryfirebutton'],
            ['Secondary Fire', 'root.buggysecondaryfirebutton'],
            ['Toggle Turret', 'root.togglebuggyturretbutton'],
            ['Next Fire Group', 'root.buggycyclefiregroupnext'],
            ['Previous Fire Group', 'root.buggycyclefiregroupprevious'],
            ['Turret Yaw', 'root.buggyturretyawaxisraw'],
            ['Turret Yaw Left', 'root.buggyturretyawleftbutton'],
            ['Turret Yaw Right', 'root.buggyturretyawrightbutton'],
            ['Turret Pitch', 'root.buggyturretpitchaxisraw'],
            ['Turret Pitch Up', 'root.buggyturretpitchupbutton'],
            ['Turret Pitch Down', 'root.buggyturretpitchdownbutton'],
            ['Toggle HUD Mode', 'root.playerhudmodetoggle_buggy']
        ]));
    }
    getHeadlookData() {
        return this.getCardData('Headlook', new Map([
            ['Toggle Headlook', 'root.headlooktoggle_buggy'],
            ['Reset View', 'root.headlookreset'],
            ['Up / Down', 'root.headlookpitchaxisraw'],
            ['Look Up', 'root.headlookpitchup'],
            ['Look Down', 'root.headlookpitchdown'],
            ['Left / Right', 'root.headlookyawaxis'],
            ['Look Left', 'root.headlookyawleft'],
            ['Look Right', 'root.headlookyawright']
        ]));
    }
    getMenuData() {
        return this.getCardData('UI / Menus', new Map([
            ['UI Focus', 'root.uifocus_buggy'],
            ['Left Panel', 'root.focusleftpanel_buggy'],
            ['Comms Panel', 'root.focuscommspanel_buggy'],
            ['Quck Comms Panel', 'root.quickcommspanel_buggy'],
            ['Right Panel', 'root.focusrightpanel_buggy'],
            ['Role Panel', 'root.focusradarpanel_buggy'],
            ['UI Up', 'root.ui_up'],
            ['UI Down', 'root.ui_down'],
            ['UI Left', 'root.ui_left'],
            ['UI Right', 'root.ui_right'],
            ['UI Select', 'root.ui_select'],
            ['UI Back', 'root.ui_back'],
            ['UI Toggle', 'root.ui_toggle'],
            ['Next Panel', 'root.cyclenextpanel'],
            ['Previous Panel', 'root.cyclepreviouspanel'],
            ['Next Page', 'root.cyclenextpage'],
            ['Previous Page', 'root.cyclepreviouspage']
        ]));
    }
}
SrvTabComponent.ɵfac = function SrvTabComponent_Factory(t) { return ɵSrvTabComponent_BaseFactory(t || SrvTabComponent); };
SrvTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SrvTabComponent, selectors: [["app-srv-tab"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 7, consts: [["data-masonry", "{\"itemSelector\": \"grid-item\", \"percentPosition\": true}", 1, "row", "grid", "srv-grid"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "heading"], [3, "data"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "movement"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "driving-misc"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "targeting"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "weapons"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "headlook"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "menu"]], template: function SrvTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getHeadingData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getMovementData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getDrivingMiscData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getTargetingData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getWeaponsData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getHeadlookData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getMenuData());
    } }, directives: [_tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_2__["TabCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5jc3MifQ== */", "@import url(\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css\");\r\n@import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css\");\r\n@media print {\r\n    .grid[_ngcontent-%COMP%] {\r\n        height:auto !important;\r\n        max-width: 100%;\r\n        text-align:center;\r\n    }\r\n    .grid-item[_ngcontent-%COMP%] {\r\n        position: relative !important;\r\n        left: auto !important;\r\n        top: auto !important;\r\n        float: none !important;\r\n        display: block !important;\r\n        padding: 0;\r\n        margin: 2px;\r\n        max-width: 32%;\r\n        page-break-inside: avoid;\r\n    }\r\n    div[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtZC1jb250cm9scy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1RiwwRkFBMEY7QUFDMUY7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixXQUFXO1FBQ1gsY0FBYztRQUNkLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiZS1kLWNvbnRyb2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuMy4wL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzc1wiKTtcclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5ncmlkIHtcclxuICAgICAgICBoZWlnaHQ6YXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuICAgIC5ncmlkLWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMyJTtcclxuICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });
const ɵSrvTabComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](SrvTabComponent);


/***/ }),

/***/ "MAge":
/*!***********************************************!*\
  !*** ./src/app/e-d-controls/tabs/base-tab.ts ***!
  \***********************************************/
/*! exports provided: BaseTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseTab", function() { return BaseTab; });
/* harmony import */ var _helpers_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/find */ "Y867");
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! masonry-layout */ "hNNL");
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(masonry_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bindings_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bindings-data.service */ "Sfny");




class BaseTab {
    constructor(dataSvc, zone) {
        this.dataSvc = dataSvc;
        this.zone = zone;
    }
    updateBindings(message) {
        if (message) {
            console.info('received message...');
            this.bindingsStr = message;
            try {
                this.bindings = JSON.parse(message);
                console.info('successfully parsed message');
            }
            catch (e) {
                console.error(`invalid message received: ${message}`);
            }
        }
    }
    getKeysFor(key) {
        if (this.bindings) {
            let ctrl = _helpers_find__WEBPACK_IMPORTED_MODULE_0__["Find"].gamePadInput(this.bindings, key);
            if (ctrl) {
                return ctrl.keys.reverse();
            }
        }
        return [];
    }
    getCardData(name, keyValPairs) {
        let keys;
        let controls = [];
        let unassigned = [];
        keyValPairs.forEach((locator, command) => {
            keys = this.getKeysFor(locator);
            if ((keys === null || keys === void 0 ? void 0 : keys.length) > 0) {
                controls.push({ command: command, keys: keys });
            }
            else {
                unassigned.push({ command: command });
            }
            keys = null;
        });
        return { name: name, controls: controls, unassigned: unassigned };
    }
    ngOnInit() {
        this.subscription = this.dataSvc.currentMessage.subscribe(message => this.updateBindings(message));
        try {
            this.msnry = new masonry_layout__WEBPACK_IMPORTED_MODULE_1__(this.getMasonrySelector());
        }
        catch (e) { /* ignore */ }
    }
    ngAfterViewChecked() {
        this.refreshLayout();
    }
    refreshLayout() {
        this.zone.runOutsideAngular(() => {
            setTimeout(() => {
                var _a;
                (_a = this.msnry) === null || _a === void 0 ? void 0 : _a.layout();
            }, 200);
        });
    }
    disableMasonry() {
        var _a;
        console.info('masonry layout disabled while printing');
        (_a = this.msnry) === null || _a === void 0 ? void 0 : _a.destroy();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
BaseTab.ɵfac = function BaseTab_Factory(t) { return new (t || BaseTab)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_bindings_data_service__WEBPACK_IMPORTED_MODULE_3__["BindingsDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"])); };
BaseTab.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BaseTab, selectors: [["ng-component"]], hostBindings: function BaseTab_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.control.p", function BaseTab_keydown_control_p_HostBindingHandler() { return ctx.disableMasonry(); });
    } }, decls: 0, vars: 0, template: function BaseTab_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ "Sfny":
/*!*******************************************************!*\
  !*** ./src/app/e-d-controls/bindings-data.service.ts ***!
  \*******************************************************/
/*! exports provided: BindingsDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingsDataService", function() { return BindingsDataService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BindingsDataService {
    constructor() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.currentMessage = this.messageSource.asObservable();
    }
    updateDocument(bindings) {
        this.messageSource.next(bindings);
    }
}
BindingsDataService.ɵfac = function BindingsDataService_Factory(t) { return new (t || BindingsDataService)(); };
BindingsDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BindingsDataService, factory: BindingsDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'e-d-controls';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Y867":
/*!**********************************************!*\
  !*** ./src/app/e-d-controls/helpers/find.ts ***!
  \**********************************************/
/*! exports provided: Find */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Find", function() { return Find; });
var Find;
(function (Find) {
    function inObject(obj, keys) {
        let result = null;
        let keysArray = (keys === null || keys === void 0 ? void 0 : keys.split('.')) || [];
        let currentKey = keysArray.shift();
        if ((currentKey === null || currentKey === void 0 ? void 0 : currentKey.length) > 0) {
            switch (typeof obj) {
                case "object":
                    result = inObject(obj[currentKey], keysArray.join('.'));
                    break;
                default:
                    result = null;
                    break;
            }
        }
        else {
            result = obj;
        }
        return result;
    }
    Find.inObject = inObject;
    function gamePadInput(obj, keys) {
        let input = null;
        try {
            let container = inObject(obj, keys);
            let actual = null;
            if (container['binding']) {
                let binding = container['binding'];
                if (binding["@key"] && binding["@key"].match(/.*(gamepad).*/ig)) {
                    actual = binding;
                }
            }
            else if (container['primary']) {
                let primary = container['primary'];
                if (primary["@key"] && primary["@key"].match(/.*(gamepad).*/ig)) {
                    actual = primary;
                }
                if (!actual) {
                    let secondary = container['secondary'];
                    if (secondary["@key"] && secondary["@key"].match(/.*(gamepad).*/ig)) {
                        actual = secondary;
                    }
                }
            }
            if (actual) {
                input = {
                    keys: [actual["@key"]],
                };
                if (actual['modifier']) {
                    // console.info('found modifier(s)');
                    if (Array.isArray(actual['modifier'])) {
                        // console.info('modifier is an array...');
                        let modifiers = actual['modifier'];
                        for (var i = 0; i < modifiers.length; i++) {
                            input.keys.push(modifiers[i]["@key"]);
                        }
                    }
                    else {
                        // console.info('modifier is a single value');
                        input.keys.push(actual['modifier']["@key"]);
                    }
                }
            }
        }
        catch (e) {
            console.error(`ERROR with keys '${keys}' due to: ${e}`);
        }
        return input;
    }
    Find.gamePadInput = gamePadInput;
})(Find || (Find = {}));


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _e_d_controls_e_d_controls_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./e-d-controls/e-d-controls.module */ "6Fu/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _e_d_controls_e_d_controls_module__WEBPACK_IMPORTED_MODULE_3__["EDControlsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _e_d_controls_e_d_controls_module__WEBPACK_IMPORTED_MODULE_3__["EDControlsModule"]] }); })();


/***/ }),

/***/ "k+gZ":
/*!*************************************************************!*\
  !*** ./src/app/e-d-controls/e-d-controls-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EDControlsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDControlsRoutingModule", function() { return EDControlsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _e_d_controls_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./e-d-controls.component */ "vOet");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _e_d_controls_component__WEBPACK_IMPORTED_MODULE_1__["EDControlsComponent"] },
    { path: 'e-d-controls', component: _e_d_controls_component__WEBPACK_IMPORTED_MODULE_1__["EDControlsComponent"] }
];
class EDControlsRoutingModule {
}
EDControlsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EDControlsRoutingModule });
EDControlsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function EDControlsRoutingModule_Factory(t) { return new (t || EDControlsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EDControlsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ngc3":
/*!******************************************************************!*\
  !*** ./src/app/e-d-controls/tabs/ship-tab/ship-tab.component.ts ***!
  \******************************************************************/
/*! exports provided: ShipTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipTabComponent", function() { return ShipTabComponent; });
/* harmony import */ var _base_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-tab */ "MAge");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab-card/tab-card.component */ "EXeD");



class ShipTabComponent extends _base_tab__WEBPACK_IMPORTED_MODULE_0__["BaseTab"] {
    getMasonrySelector() {
        return '.ship-grid';
    }
    getHeadingData() {
        return this.getCardData('Heading', new Map([
            ['Yaw', 'root.yawaxisraw'],
            ['Yaw Left', 'root.yawleftbutton'],
            ['Yaw Right', 'root.yawrightbutton'],
            ['Roll', 'root.rollaxisraw'],
            ['Roll Left', 'root.rollleftbutton'],
            ['Roll Right', 'root.rollrightbutton'],
            ['Pitch', 'root.pitchaxisraw'],
            ['Pitch Up', 'root.pitchupbutton'],
            ['Pitch Down', 'root.pitchdownbutton']
        ]));
    }
    getMovementData() {
        return this.getCardData('Movement', new Map([
            ['Lateral Thrust', 'root.lateralthrustraw'],
            ['Thrust Left', 'root.leftthrustbutton'],
            ['Thrust Right', 'root.rightthrustbutton'],
            ['Vertical Thrust', 'root.verticalthrustraw'],
            ['Thrust Up', 'root.upthrustbutton'],
            ['Thrust Down', 'root.downthrustbutton'],
            ['Ahead Thrust', 'root.aheadthrust'],
            ['Thrust Forwards', 'root.forwardthrustbutton'],
            ['Thrust Backwards', 'root.backwardthrustbutton']
        ]));
    }
    getThrustData() {
        return this.getCardData('Thrust', new Map([
            ['Throttle', 'root.throttleaxis'],
            ['Throttle Forwards', 'root.forwardkey'],
            ['Throttle Backwards', 'root.backwardkey'],
            ['Set Throttle -100%', 'root.setspeedminus100'],
            ['Set Throttle -75%', 'root.setspeedminus75'],
            ['Set Throttle -50%', 'root.setspeedminus50'],
            ['Set Throttle -25%', 'root.setspeedminus25'],
            ['Set Throttle 0%', 'root.setspeedzero'],
            ['Set Throttle 25%', 'root.setspeed25'],
            ['Set Throttle 50%', 'root.setspeed50'],
            ['Set Throttle 75%', 'root.setspeed75'],
            ['Set Throttle 100%', 'root.setspeed100'],
            ['Toggle Flight Assist', 'root.toggleflightassist'],
            ['Boost', 'root.useboostjuice']
        ]));
    }
    getFlightMiscData() {
        return this.getCardData('Flight / Misc.', new Map([
            ['Toggle Silent Running', 'root.togglebuttonupinput'],
            ['Toggle Lights', 'root.shipspotlighttoggle'],
            ['Radar Zoom', 'root.radarrangeaxis'],
            ['Radar Zoom Out', 'root.radarincreaserange'],
            ['Radar Zoom In', 'root.radardecreaserange'],
            ['PIPs to Engines', 'root.increaseenginespower'],
            ['PIPs to Weapons', 'root.increaseweaponspower'],
            ['PIPs to Systems', 'root.increasesystemspower'],
            ['Reset PIPs', 'root.resetpowerdistribution'],
            ['Toggle Cargo Scoop', 'root.togglecargoscoop'],
            ['Eject All Cargo', 'root.ejectallcargo'],
            ['Toggle Landing Gear', 'root.landinggeartoggle'],
            ['Toggle Night Vision', 'root.nightvisiontoggle']
        ]));
    }
    getFrameShiftData() {
        return this.getCardData('Frame Shift Drive', new Map([
            ['Toggle FSD', 'root.hypersupercombination'],
            ['Supercruise', 'root.supercruise'],
            ['Hyperspace Jump', 'root.hyperspace'],
            ['Toggle Orbit Lines', 'root.orbitlinestoggle'],
            ['Enter FSS', 'root.explorationfssenter']
        ]));
    }
    getTargetingData() {
        return this.getCardData('Targeting', new Map([
            ['Select Target Ahead', 'root.selecttarget'],
            ['Next Target', 'root.cyclenexttarget'],
            ['Previous Target', 'root.cycleprevioustarget'],
            ['Select Highest Threat', 'root.selecthighestthreat'],
            ['Next Hostile Target', 'root.cyclenexthostiletarget'],
            ['Previous Hostile Target', 'root.cycleprevioushostiletarget'],
            ['Target Wingman 0', 'root.targetwingman0'],
            ['Target Wingman 1', 'root.targetwingman1'],
            ['Target Wingman 2', 'root.targetwingman2'],
            ['Select Wingman\'s Target', 'root.selecttargetstarget'],
            ['Toggle Nav Lock', 'root.wingnavlock'],
            ['Target Next Subsystem', 'root.cyclenextsubsystem'],
            ['Target Previous Subsystem', 'root.cycleprevioussubsystem'],
            ['Target Next System in Route', 'root.targetnextroutesystem']
        ]));
    }
    getWeaponsData() {
        return this.getCardData('Weapons', new Map([
            ['Primary Fire', 'root.primaryfire'],
            ['Secondary Fire', 'root.secondaryfire'],
            ['Next Fire Group', 'root.cyclefiregroupnext'],
            ['Previous Fire Group', 'root.cyclefiregroupprevious'],
            ['Toggle Hardpoints', 'root.deployhardpointtoggle'],
            ['Toggle HUD Mode', 'root.playerhudmodetoggle']
        ]));
    }
    getUtilitiesData() {
        return this.getCardData('Utilities', new Map([
            ['Deploy Heatsink', 'root.deployheatsink'],
            ['Use Shield Cell', 'root.useshieldcell'],
            ['Use Chaff', 'root.firechafflauncher'],
            ['Charge ECM', 'root.chargeecm']
        ]));
    }
    getHeadlookData() {
        return this.getCardData('Headlook', new Map([
            ['Toggle Headlook', 'root.headlooktoggle'],
            ['Reset View', 'root.headlookreset'],
            ['Up / Down', 'root.headlookpitchaxisraw'],
            ['Look Up', 'root.headlookpitchup'],
            ['Look Down', 'root.headlookpitchdown'],
            ['Left / Right', 'root.headlookyawaxis'],
            ['Look Left', 'root.headlookyawleft'],
            ['Look Right', 'root.headlookyawright']
        ]));
    }
    getMenuData() {
        return this.getCardData('UI / Menus', new Map([
            ['UI Focus', 'root.uifocus'],
            ['Left Panel', 'root.focusleftpanel'],
            ['Comms Panel', 'root.focuscommspanel'],
            ['Quck Comms Panel', 'root.quickcommspanel'],
            ['Right Panel', 'root.focusrightpanel'],
            ['Role Panel', 'root.focusradarpanel'],
            ['UI Up', 'root.ui_up'],
            ['UI Down', 'root.ui_down'],
            ['UI Left', 'root.ui_left'],
            ['UI Right', 'root.ui_right'],
            ['UI Select', 'root.ui_select'],
            ['UI Back', 'root.ui_back'],
            ['UI Toggle', 'root.ui_toggle'],
            ['Next Panel', 'root.cyclenextpanel'],
            ['Previous Panel', 'root.cyclepreviouspanel'],
            ['Next Page', 'root.cyclenextpage'],
            ['Previous Page', 'root.cyclepreviouspage']
        ]));
    }
}
ShipTabComponent.ɵfac = function ShipTabComponent_Factory(t) { return ɵShipTabComponent_BaseFactory(t || ShipTabComponent); };
ShipTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShipTabComponent, selectors: [["app-ship-tab"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 10, consts: [["data-masonry", "{\"itemSelector\": \"grid-item\", \"percentPosition\": true}", 1, "row", "grid", "ship-grid"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "heading"], [3, "data"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "movement"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "thrust"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "flight-misc"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "frame-shift"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "targeting"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "weapons"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "utilities"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "headlook"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "menu"]], template: function ShipTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "app-tab-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getHeadingData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getMovementData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getThrustData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getFlightMiscData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getFrameShiftData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getTargetingData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getWeaponsData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getUtilitiesData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getHeadlookData());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.getMenuData());
    } }, directives: [_tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_2__["TabCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5jc3MifQ== */", "@import url(\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css\");\r\n@import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css\");\r\n@media print {\r\n    .grid[_ngcontent-%COMP%] {\r\n        height:auto !important;\r\n        max-width: 100%;\r\n        text-align:center;\r\n    }\r\n    .grid-item[_ngcontent-%COMP%] {\r\n        position: relative !important;\r\n        left: auto !important;\r\n        top: auto !important;\r\n        float: none !important;\r\n        display: block !important;\r\n        padding: 0;\r\n        margin: 2px;\r\n        max-width: 32%;\r\n        page-break-inside: avoid;\r\n    }\r\n    div[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtZC1jb250cm9scy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1RiwwRkFBMEY7QUFDMUY7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixXQUFXO1FBQ1gsY0FBYztRQUNkLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiZS1kLWNvbnRyb2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuMy4wL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzc1wiKTtcclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5ncmlkIHtcclxuICAgICAgICBoZWlnaHQ6YXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuICAgIC5ncmlkLWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMyJTtcclxuICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });
const ɵShipTabComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ShipTabComponent);


/***/ }),

/***/ "vOet":
/*!********************************************************!*\
  !*** ./src/app/e-d-controls/e-d-controls.component.ts ***!
  \********************************************************/
/*! exports provided: EDControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDControlsComponent", function() { return EDControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "vVj5");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/tabs.component */ "xItX");



class EDControlsComponent {
    constructor() { }
}
EDControlsComponent.ɵfac = function EDControlsComponent_Factory(t) { return new (t || EDControlsComponent)(); };
EDControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EDControlsComponent, selectors: [["app-e-d-controls"]], decls: 5, vars: 0, consts: [[1, "container-fluid"], [1, "row-fluid"]], template: function EDControlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-file-upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_1__["FileUploadComponent"], _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"]], styles: ["@import url(\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css\");\r\n@import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css\");\r\n@media print {\r\n    .grid[_ngcontent-%COMP%] {\r\n        height:auto !important;\r\n        max-width: 100%;\r\n        text-align:center;\r\n    }\r\n    .grid-item[_ngcontent-%COMP%] {\r\n        position: relative !important;\r\n        left: auto !important;\r\n        top: auto !important;\r\n        float: none !important;\r\n        display: block !important;\r\n        padding: 0;\r\n        margin: 2px;\r\n        max-width: 32%;\r\n        page-break-inside: avoid;\r\n    }\r\n    div[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtZC1jb250cm9scy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1RiwwRkFBMEY7QUFDMUY7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixXQUFXO1FBQ1gsY0FBYztRQUNkLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiZS1kLWNvbnRyb2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuMy4wL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzc1wiKTtcclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5ncmlkIHtcclxuICAgICAgICBoZWlnaHQ6YXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuICAgIC5ncmlkLWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMyJTtcclxuICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "vVj5":
/*!*******************************************************************!*\
  !*** ./src/app/e-d-controls/file-upload/file-upload.component.ts ***!
  \*******************************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _helpers_xml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/xml */ "zBqH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bindings_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bindings-data.service */ "Sfny");




class FileUploadComponent {
    constructor(bindings) {
        this.bindings = bindings;
        this.requiredFileType = '.binds';
        this._xmlParser = new DOMParser();
    }
    ngOnInit() {
        this.subscription = this.bindings.currentMessage.subscribe(message => this.message = message);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    parseBindingsFile(event) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (event) {
                console.log(JSON.stringify(event));
                let files = (_a = event.target) === null || _a === void 0 ? void 0 : _a.files;
                if (files && files.length > 0) {
                    let file = files[0];
                    if (file) {
                        this.fileName = file.name;
                        let text = yield file.text();
                        let bindingsDoc = this._xmlParser.parseFromString(text, 'text/xml');
                        let bindingsObj = _helpers_xml__WEBPACK_IMPORTED_MODULE_1__["XML"].toObject(bindingsDoc);
                        console.info('successfully parsed');
                        this.bindings.updateDocument(JSON.stringify(bindingsObj));
                    }
                }
            }
        });
    }
}
FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) { return new (t || FileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_bindings_data_service__WEBPACK_IMPORTED_MODULE_3__["BindingsDataService"])); };
FileUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FileUploadComponent, selectors: [["app-file-upload"]], decls: 9, vars: 2, consts: [[1, "container-fluid", "my-1"], [1, "row"], ["type", "file", 1, "file-input", "visually-hidden", 3, "accept", "change"], ["fileUpload", ""], [1, "file-upload", "col"], ["color", "primary", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-controller"], [1, "fw-light"]], template: function FileUploadComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function FileUploadComponent_Template_input_change_2_listener($event) { return ctx.parseBindingsFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FileUploadComponent_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("accept", ctx.requiredFileType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.fileName ? ctx.fileName : "Select Bindings File", "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxlLXVwbG9hZC5jb21wb25lbnQuY3NzIn0= */", "@import url(\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css\");\r\n@import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css\");\r\n@media print {\r\n    .grid[_ngcontent-%COMP%] {\r\n        height:auto !important;\r\n        max-width: 100%;\r\n        text-align:center;\r\n    }\r\n    .grid-item[_ngcontent-%COMP%] {\r\n        position: relative !important;\r\n        left: auto !important;\r\n        top: auto !important;\r\n        float: none !important;\r\n        display: block !important;\r\n        padding: 0;\r\n        margin: 2px;\r\n        max-width: 32%;\r\n        page-break-inside: avoid;\r\n    }\r\n    div[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtZC1jb250cm9scy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1RiwwRkFBMEY7QUFDMUY7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixXQUFXO1FBQ1gsY0FBYztRQUNkLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiZS1kLWNvbnRyb2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuMy4wL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzc1wiKTtcclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5ncmlkIHtcclxuICAgICAgICBoZWlnaHQ6YXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuICAgIC5ncmlkLWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMyJTtcclxuICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    { path: '**', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./e-d-controls/e-d-controls.module */ "6Fu/")).then((m) => m.EDControlsModule) }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xItX":
/*!*****************************************************!*\
  !*** ./src/app/e-d-controls/tabs/tabs.component.ts ***!
  \*****************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ship_tab_ship_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship-tab/ship-tab.component */ "ngc3");
/* harmony import */ var _srv_tab_srv_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./srv-tab/srv-tab.component */ "Ffev");
/* harmony import */ var _map_tab_map_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-tab/map-tab.component */ "6uYf");




class TabsComponent {
    refreshLayout() {
        /* triggers UI update check */
    }
}
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(); };
TabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsComponent, selectors: [["app-tabs"]], decls: 23, vars: 0, consts: [[1, "container-fluid", "mb-1"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["id", "ship-tab", "data-bs-toggle", "tab", "data-bs-target", "#ship", "type", "button", "role", "tab", "aria-controls", "ship", "aria-selected", "true", 1, "nav-link", "active", 3, "click"], ["id", "srv-tab", "data-bs-toggle", "tab", "data-bs-target", "#srv", "type", "button", "role", "tab", "aria-controls", "srv", "aria-selected", "false", 1, "nav-link", 3, "click"], ["id", "map-tab", "data-bs-toggle", "tab", "data-bs-target", "#map", "type", "button", "role", "tab", "aria-controls", "map", "aria-selected", "false", 1, "nav-link", 3, "click"], ["id", "camera-tab", "data-bs-toggle", "tab", "data-bs-target", "#camera", "type", "button", "role", "tab", "aria-controls", "camera", "aria-selected", "false", 1, "nav-link", 3, "click"], ["id", "myTabContent", 1, "tab-content"], ["id", "ship", "role", "tabpanel", "aria-labelledby", "ship-tab", 1, "tab-pane", "fade", "show", "active"], ["id", "srv", "role", "tabpanel", "aria-labelledby", "srv-tab", 1, "tab-pane", "fade"], ["id", "map", "role", "tabpanel", "aria-labelledby", "map-tab", 1, "tab-pane", "fade"], ["id", "camera", "role", "tabpanel", "aria-labelledby", "camera-tab", 1, "tab-pane", "fade"]], template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_Template_button_click_3_listener() { return ctx.refreshLayout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ship");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_Template_button_click_6_listener() { return ctx.refreshLayout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "SRV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_Template_button_click_9_listener() { return ctx.refreshLayout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_Template_button_click_12_listener() { return ctx.refreshLayout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Camera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-ship-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-srv-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-map-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ship_tab_ship_tab_component__WEBPACK_IMPORTED_MODULE_1__["ShipTabComponent"], _srv_tab_srv_tab_component__WEBPACK_IMPORTED_MODULE_2__["SrvTabComponent"], _map_tab_map_tab_component__WEBPACK_IMPORTED_MODULE_3__["MapTabComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5jc3MifQ== */", "@import url(\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css\");\r\n@import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css\");\r\n@media print {\r\n    .grid[_ngcontent-%COMP%] {\r\n        height:auto !important;\r\n        max-width: 100%;\r\n        text-align:center;\r\n    }\r\n    .grid-item[_ngcontent-%COMP%] {\r\n        position: relative !important;\r\n        left: auto !important;\r\n        top: auto !important;\r\n        float: none !important;\r\n        display: block !important;\r\n        padding: 0;\r\n        margin: 2px;\r\n        max-width: 32%;\r\n        page-break-inside: avoid;\r\n    }\r\n    div[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtZC1jb250cm9scy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1RiwwRkFBMEY7QUFDMUY7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixXQUFXO1FBQ1gsY0FBYztRQUNkLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiZS1kLWNvbnRyb2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuMy4wL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzc1wiKTtcclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5ncmlkIHtcclxuICAgICAgICBoZWlnaHQ6YXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuICAgIC5ncmlkLWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMyJTtcclxuICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "zBqH":
/*!*********************************************!*\
  !*** ./src/app/e-d-controls/helpers/xml.ts ***!
  \*********************************************/
/*! exports provided: XML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XML", function() { return XML; });
var XML;
(function (XML) {
    function parseText(sValue) {
        if (/^\s*$/.test(sValue)) {
            return null;
        }
        if (/^(?:true|false)$/i.test(sValue)) {
            return sValue.toLowerCase() === "true";
        }
        if (isFinite(sValue)) {
            return parseFloat(sValue);
        }
        if (isFinite(Date.parse(sValue))) {
            return new Date(sValue);
        }
        return sValue;
    }
    function toObject(oXMLParent) {
        var vResult = {}, nLength = 0, sCollectedTxt = "";
        let oXMLParentElement = oXMLParent;
        if ((oXMLParentElement === null || oXMLParentElement === void 0 ? void 0 : oXMLParentElement.hasAttributes) && (oXMLParentElement === null || oXMLParentElement === void 0 ? void 0 : oXMLParentElement.attributes) && (oXMLParentElement === null || oXMLParentElement === void 0 ? void 0 : oXMLParentElement.hasAttributes())) {
            vResult = {};
            for (nLength; nLength < oXMLParentElement.attributes.length; nLength++) {
                let oAttrib = oXMLParentElement.attributes.item(nLength);
                vResult["@" + oAttrib.name.toLowerCase()] = parseText(oAttrib.value.trim());
            }
        }
        if (oXMLParent.hasChildNodes()) {
            for (var oNode, sProp, vContent, nItem = 0; nItem < oXMLParent.childNodes.length; nItem++) {
                oNode = oXMLParent.childNodes.item(nItem);
                if (oNode.nodeType === 4) {
                    sCollectedTxt += oNode.nodeValue;
                } /* nodeType is "CDATASection" (4) */
                else if (oNode.nodeType === 3) {
                    sCollectedTxt += oNode.nodeValue.trim();
                } /* nodeType is "Text" (3) */
                else if (oNode.nodeType === 1 && !oNode.prefix) { /* nodeType is "Element" (1) */
                    if (nLength === 0) {
                        vResult = {};
                    }
                    sProp = oNode.nodeName.toLowerCase();
                    vContent = toObject(oNode);
                    if (vResult.hasOwnProperty(sProp)) {
                        if (vResult[sProp].constructor !== Array) {
                            vResult[sProp] = [vResult[sProp]];
                        }
                        vResult[sProp].push(vContent);
                    }
                    else {
                        vResult[sProp] = vContent;
                        nLength++;
                    }
                }
            }
        }
        if (sCollectedTxt) {
            nLength > 0 ? vResult.keyValue = parseText(sCollectedTxt) : vResult = parseText(sCollectedTxt);
        }
        return vResult;
    }
    XML.toObject = toObject;
})(XML || (XML = {}));


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map