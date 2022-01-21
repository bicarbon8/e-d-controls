(self["webpackChunkEDControls"] = self["webpackChunkEDControls"] || []).push([["src_bootstrap_ts"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 3464);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



const routes = [
    { path: '', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./e-d-controls/e-d-controls.module */ 8990)).then((m) => m.EDControlsModule) }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3464);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);


class AppComponent {
    constructor() {
        this.title = 'e-d-controls';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _e_d_controls_e_d_controls_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./e-d-controls/e-d-controls.module */ 8990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 8802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _e_d_controls_e_d_controls_module__WEBPACK_IMPORTED_MODULE_2__.EDControlsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _e_d_controls_e_d_controls_module__WEBPACK_IMPORTED_MODULE_2__.EDControlsModule] }); })();


/***/ }),

/***/ 3971:
/*!*******************************************************!*\
  !*** ./src/app/e-d-controls/bindings-data.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindingsDataService": () => (/* binding */ BindingsDataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);


class BindingsDataService {
    constructor() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.currentMessage = this.messageSource.asObservable();
    }
    updateDocument(bindings) {
        this.messageSource.next(bindings);
    }
}
BindingsDataService.ɵfac = function BindingsDataService_Factory(t) { return new (t || BindingsDataService)(); };
BindingsDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BindingsDataService, factory: BindingsDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2392:
/*!*************************************************************!*\
  !*** ./src/app/e-d-controls/e-d-controls-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EDControlsRoutingModule": () => (/* binding */ EDControlsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 3464);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _e_d_controls_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./e-d-controls.component */ 3024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




const routes = [
    { path: '', component: _e_d_controls_component__WEBPACK_IMPORTED_MODULE_1__.EDControlsComponent }
];
class EDControlsRoutingModule {
}
EDControlsRoutingModule.ɵfac = function EDControlsRoutingModule_Factory(t) { return new (t || EDControlsRoutingModule)(); };
EDControlsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EDControlsRoutingModule });
EDControlsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EDControlsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule] }); })();


/***/ }),

/***/ 3024:
/*!********************************************************!*\
  !*** ./src/app/e-d-controls/e-d-controls.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EDControlsComponent": () => (/* binding */ EDControlsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-upload/file-upload.component */ 3902);
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/tabs.component */ 8020);



class EDControlsComponent {
    constructor() { }
}
EDControlsComponent.ɵfac = function EDControlsComponent_Factory(t) { return new (t || EDControlsComponent)(); };
EDControlsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EDControlsComponent, selectors: [["app-e-d-controls"]], decls: 5, vars: 0, consts: [[1, "container-fluid"], [1, "row-fluid"]], template: function EDControlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-file-upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_1__.FileUploadComponent, _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__.TabsComponent], styles: ["@import url(\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css\");\r\n@import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css\");\r\n@media print {\r\n    .grid[_ngcontent-%COMP%] {\r\n        height:auto !important;\r\n        max-width: 100%;\r\n        text-align:center;\r\n    }\r\n    .grid-item[_ngcontent-%COMP%] {\r\n        position: relative !important;\r\n        left: auto !important;\r\n        top: auto !important;\r\n        float: none !important;\r\n        display: block !important;\r\n        padding: 0;\r\n        margin: 2px;\r\n        max-width: 32%;\r\n        page-break-inside: avoid;\r\n    }\r\n    div[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtZC1jb250cm9scy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1RiwwRkFBMEY7QUFDMUY7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixXQUFXO1FBQ1gsY0FBYztRQUNkLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiZS1kLWNvbnRyb2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuMy4wL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzc1wiKTtcclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5ncmlkIHtcclxuICAgICAgICBoZWlnaHQ6YXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuICAgIC5ncmlkLWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMyJTtcclxuICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 8990:
/*!*****************************************************!*\
  !*** ./src/app/e-d-controls/e-d-controls.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EDControlsModule": () => (/* binding */ EDControlsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 1643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-upload/file-upload.component */ 3902);
/* harmony import */ var _tabs_map_tab_map_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/map-tab/map-tab.component */ 6387);
/* harmony import */ var _tabs_ship_tab_ship_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/ship-tab/ship-tab.component */ 8730);
/* harmony import */ var _tabs_srv_tab_srv_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/srv-tab/srv-tab.component */ 6970);
/* harmony import */ var _tabs_tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs/tab-card/tab-card.component */ 7189);
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs/tabs.component */ 8020);
/* harmony import */ var _e_d_controls_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./e-d-controls.component */ 3024);
/* harmony import */ var _e_d_controls_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./e-d-controls-routing.module */ 2392);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 8802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_9__);










class EDControlsModule {
}
EDControlsModule.ɵfac = function EDControlsModule_Factory(t) { return new (t || EDControlsModule)(); };
EDControlsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: EDControlsModule });
EDControlsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
            _e_d_controls_routing_module__WEBPACK_IMPORTED_MODULE_8__.EDControlsRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](EDControlsModule, { declarations: [_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__.TabsComponent,
        _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_1__.FileUploadComponent,
        _tabs_ship_tab_ship_tab_component__WEBPACK_IMPORTED_MODULE_3__.ShipTabComponent,
        _tabs_srv_tab_srv_tab_component__WEBPACK_IMPORTED_MODULE_4__.SrvTabComponent,
        _tabs_tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_5__.TabCardComponent,
        _tabs_map_tab_map_tab_component__WEBPACK_IMPORTED_MODULE_2__.MapTabComponent,
        _e_d_controls_component__WEBPACK_IMPORTED_MODULE_7__.EDControlsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule,
        _e_d_controls_routing_module__WEBPACK_IMPORTED_MODULE_8__.EDControlsRoutingModule], exports: [_e_d_controls_component__WEBPACK_IMPORTED_MODULE_7__.EDControlsComponent] }); })();


/***/ }),

/***/ 3902:
/*!*******************************************************************!*\
  !*** ./src/app/e-d-controls/file-upload/file-upload.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadComponent": () => (/* binding */ FileUploadComponent)
/* harmony export */ });
/* harmony import */ var _Users_smija8k_Documents_git_github_e_d_controls_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _helpers_xml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/xml */ 9485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bindings_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bindings-data.service */ 3971);




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
    var _this = this;

    return (0,_Users_smija8k_Documents_git_github_e_d_controls_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (event) {
        console.log(JSON.stringify(event));
        let files = event.target?.files;

        if (files && files.length > 0) {
          let file = files[0];

          if (file) {
            _this.fileName = file.name;
            let text = yield file.text();

            let bindingsDoc = _this._xmlParser.parseFromString(text, 'text/xml');

            let bindingsObj = _helpers_xml__WEBPACK_IMPORTED_MODULE_1__.XML.toObject(bindingsDoc);
            console.info('successfully parsed');

            _this.bindings.updateDocument(JSON.stringify(bindingsObj));
          }
        }
      }
    })();
  }

}

FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) {
  return new (t || FileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_bindings_data_service__WEBPACK_IMPORTED_MODULE_3__.BindingsDataService));
};

FileUploadComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FileUploadComponent,
  selectors: [["app-file-upload"]],
  decls: 9,
  vars: 2,
  consts: [[1, "container-fluid", "my-1"], [1, "row"], ["type", "file", 1, "file-input", "visually-hidden", 3, "accept", "change"], ["fileUpload", ""], [1, "file-upload", "col"], ["color", "primary", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-controller"], [1, "fw-light"]],
  template: function FileUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function FileUploadComponent_Template_input_change_2_listener($event) {
        return ctx.parseBindingsFile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FileUploadComponent_Template_button_click_5_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);

        return _r0.click();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("accept", ctx.requiredFileType);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.fileName ? ctx.fileName : "Select Bindings File", "");
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxlLXVwbG9hZC5jb21wb25lbnQuY3NzIn0= */", "@import url(\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css\");\r\n@import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css\");\r\n@media print {\r\n    .grid[_ngcontent-%COMP%] {\r\n        height:auto !important;\r\n        max-width: 100%;\r\n        text-align:center;\r\n    }\r\n    .grid-item[_ngcontent-%COMP%] {\r\n        position: relative !important;\r\n        left: auto !important;\r\n        top: auto !important;\r\n        float: none !important;\r\n        display: block !important;\r\n        padding: 0;\r\n        margin: 2px;\r\n        max-width: 32%;\r\n        page-break-inside: avoid;\r\n    }\r\n    div[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtZC1jb250cm9scy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1RiwwRkFBMEY7QUFDMUY7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixXQUFXO1FBQ1gsY0FBYztRQUNkLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiZS1kLWNvbnRyb2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuMy4wL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzc1wiKTtcclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5ncmlkIHtcclxuICAgICAgICBoZWlnaHQ6YXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuICAgIC5ncmlkLWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMyJTtcclxuICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn0iXX0= */"]
});

/***/ }),

/***/ 2264:
/*!**********************************************!*\
  !*** ./src/app/e-d-controls/helpers/find.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Find": () => (/* binding */ Find)
/* harmony export */ });
var Find;
(function (Find) {
    function inObject(obj, keys) {
        let result = null;
        let keysArray = keys?.split('.') || [];
        let currentKey = keysArray.shift();
        if (currentKey?.length > 0) {
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

/***/ 9485:
/*!*********************************************!*\
  !*** ./src/app/e-d-controls/helpers/xml.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XML": () => (/* binding */ XML)
/* harmony export */ });
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
        if (oXMLParentElement?.hasAttributes && oXMLParentElement?.attributes && oXMLParentElement?.hasAttributes()) {
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

/***/ 2872:
/*!***********************************************!*\
  !*** ./src/app/e-d-controls/tabs/base-tab.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTab": () => (/* binding */ BaseTab)
/* harmony export */ });
/* harmony import */ var _helpers_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/find */ 2264);
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! masonry-layout */ 8258);
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(masonry_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bindings_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bindings-data.service */ 3971);




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
            let ctrl = _helpers_find__WEBPACK_IMPORTED_MODULE_0__.Find.gamePadInput(this.bindings, key);
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
            if (keys?.length > 0) {
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
                this.msnry?.layout();
            }, 200);
        });
    }
    disableMasonry() {
        console.info('masonry layout disabled while printing');
        this.msnry?.destroy();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
BaseTab.ɵfac = function BaseTab_Factory(t) { return new (t || BaseTab)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_bindings_data_service__WEBPACK_IMPORTED_MODULE_3__.BindingsDataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone)); };
BaseTab.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BaseTab, selectors: [["ng-component"]], hostBindings: function BaseTab_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.control.p", function BaseTab_keydown_control_p_HostBindingHandler() { return ctx.disableMasonry(); });
    } }, decls: 0, vars: 0, template: function BaseTab_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 6387:
/*!****************************************************************!*\
  !*** ./src/app/e-d-controls/tabs/map-tab/map-tab.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapTabComponent": () => (/* binding */ MapTabComponent)
/* harmony export */ });
/* harmony import */ var _base_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-tab */ 2872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab-card/tab-card.component */ 7189);



class MapTabComponent extends _base_tab__WEBPACK_IMPORTED_MODULE_0__.BaseTab {
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
MapTabComponent.ɵfac = /*@__PURE__*/ function () { let ɵMapTabComponent_BaseFactory; return function MapTabComponent_Factory(t) { return (ɵMapTabComponent_BaseFactory || (ɵMapTabComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MapTabComponent)))(t || MapTabComponent); }; }();
MapTabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MapTabComponent, selectors: [["app-map-tab"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 3, consts: [["data-masonry", "{\"itemSelector\": \"grid-item\", \"percentPosition\": true}", 1, "row", "grid", "map-grid"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "map-controls"], [3, "data"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "camera-controls"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "ui-controls"]], template: function MapTabComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_2__.TabCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5jc3MifQ== */", "@import url(\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css\");\r\n@import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css\");\r\n@media print {\r\n    .grid[_ngcontent-%COMP%] {\r\n        height:auto !important;\r\n        max-width: 100%;\r\n        text-align:center;\r\n    }\r\n    .grid-item[_ngcontent-%COMP%] {\r\n        position: relative !important;\r\n        left: auto !important;\r\n        top: auto !important;\r\n        float: none !important;\r\n        display: block !important;\r\n        padding: 0;\r\n        margin: 2px;\r\n        max-width: 32%;\r\n        page-break-inside: avoid;\r\n    }\r\n    div[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtZC1jb250cm9scy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1RiwwRkFBMEY7QUFDMUY7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixXQUFXO1FBQ1gsY0FBYztRQUNkLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiZS1kLWNvbnRyb2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuMy4wL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzc1wiKTtcclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5ncmlkIHtcclxuICAgICAgICBoZWlnaHQ6YXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuICAgIC5ncmlkLWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMyJTtcclxuICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 8730:
/*!******************************************************************!*\
  !*** ./src/app/e-d-controls/tabs/ship-tab/ship-tab.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShipTabComponent": () => (/* binding */ ShipTabComponent)
/* harmony export */ });
/* harmony import */ var _base_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-tab */ 2872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab-card/tab-card.component */ 7189);



class ShipTabComponent extends _base_tab__WEBPACK_IMPORTED_MODULE_0__.BaseTab {
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
ShipTabComponent.ɵfac = /*@__PURE__*/ function () { let ɵShipTabComponent_BaseFactory; return function ShipTabComponent_Factory(t) { return (ɵShipTabComponent_BaseFactory || (ɵShipTabComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ShipTabComponent)))(t || ShipTabComponent); }; }();
ShipTabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShipTabComponent, selectors: [["app-ship-tab"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 10, consts: [["data-masonry", "{\"itemSelector\": \"grid-item\", \"percentPosition\": true}", 1, "row", "grid", "ship-grid"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "heading"], [3, "data"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "movement"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "thrust"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "flight-misc"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "frame-shift"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "targeting"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "weapons"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "utilities"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "headlook"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "menu"]], template: function ShipTabComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_2__.TabCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5jc3MifQ== */", "@import url(\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css\");\r\n@import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css\");\r\n@media print {\r\n    .grid[_ngcontent-%COMP%] {\r\n        height:auto !important;\r\n        max-width: 100%;\r\n        text-align:center;\r\n    }\r\n    .grid-item[_ngcontent-%COMP%] {\r\n        position: relative !important;\r\n        left: auto !important;\r\n        top: auto !important;\r\n        float: none !important;\r\n        display: block !important;\r\n        padding: 0;\r\n        margin: 2px;\r\n        max-width: 32%;\r\n        page-break-inside: avoid;\r\n    }\r\n    div[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtZC1jb250cm9scy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1RiwwRkFBMEY7QUFDMUY7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixXQUFXO1FBQ1gsY0FBYztRQUNkLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiZS1kLWNvbnRyb2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuMy4wL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzc1wiKTtcclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5ncmlkIHtcclxuICAgICAgICBoZWlnaHQ6YXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuICAgIC5ncmlkLWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMyJTtcclxuICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6970:
/*!****************************************************************!*\
  !*** ./src/app/e-d-controls/tabs/srv-tab/srv-tab.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SrvTabComponent": () => (/* binding */ SrvTabComponent)
/* harmony export */ });
/* harmony import */ var _base_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-tab */ 2872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab-card/tab-card.component */ 7189);



class SrvTabComponent extends _base_tab__WEBPACK_IMPORTED_MODULE_0__.BaseTab {
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
SrvTabComponent.ɵfac = /*@__PURE__*/ function () { let ɵSrvTabComponent_BaseFactory; return function SrvTabComponent_Factory(t) { return (ɵSrvTabComponent_BaseFactory || (ɵSrvTabComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](SrvTabComponent)))(t || SrvTabComponent); }; }();
SrvTabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SrvTabComponent, selectors: [["app-srv-tab"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 7, consts: [["data-masonry", "{\"itemSelector\": \"grid-item\", \"percentPosition\": true}", 1, "row", "grid", "srv-grid"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "heading"], [3, "data"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "movement"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "driving-misc"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "targeting"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "weapons"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "headlook"], [1, "col-xs-12", "col-sm-6", "col-lg-4", "grid-item", "menu"]], template: function SrvTabComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_tab_card_tab_card_component__WEBPACK_IMPORTED_MODULE_2__.TabCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5jc3MifQ== */", "@import url(\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css\");\r\n@import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css\");\r\n@media print {\r\n    .grid[_ngcontent-%COMP%] {\r\n        height:auto !important;\r\n        max-width: 100%;\r\n        text-align:center;\r\n    }\r\n    .grid-item[_ngcontent-%COMP%] {\r\n        position: relative !important;\r\n        left: auto !important;\r\n        top: auto !important;\r\n        float: none !important;\r\n        display: block !important;\r\n        padding: 0;\r\n        margin: 2px;\r\n        max-width: 32%;\r\n        page-break-inside: avoid;\r\n    }\r\n    div[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtZC1jb250cm9scy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1RiwwRkFBMEY7QUFDMUY7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixXQUFXO1FBQ1gsY0FBYztRQUNkLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiZS1kLWNvbnRyb2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuMy4wL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzc1wiKTtcclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5ncmlkIHtcclxuICAgICAgICBoZWlnaHQ6YXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuICAgIC5ncmlkLWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMyJTtcclxuICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 7189:
/*!******************************************************************!*\
  !*** ./src/app/e-d-controls/tabs/tab-card/tab-card.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabCardComponent": () => (/* binding */ TabCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 1643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);


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
TabCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabCardComponent, selectors: [["app-tab-card"]], inputs: { data: "data" }, decls: 13, vars: 6, consts: [[1, "card", "my-1"], [1, "card-header", "fs-6"], [1, "d-flex"], [1, "p-1", "flex-grow-1"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Show unassigned", 1, "form-check", "form-switch", "form-check-inline"], ["type", "checkbox", "id", "flexSwitchCheckDefault", 1, "form-check-input", 3, "change"], ["for", "flexSwitchCheckDefault", 1, "form-check-label", "fw-light", "d-none", "d-md-block"], ["class", "d-flex", 4, "ngFor", "ngForOf"], [1, "bg-light", "p-1", "fs-7"], [1, "border", "border-light", "p-1", "flex-fill"], [3, "class", 4, "ngFor", "ngForOf"], [1, "p-1", "fs-7"], [1, "p-1", "fw-light", "flex-fill"]], template: function TabCardComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["i.key-sprite[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 32px;\r\n    height: 32px;\r\n    zoom: 0.75;\r\n    -webkit-print-color-adjust: exact !important;\r\n    color-adjust: exact !important;\r\n}\r\ni.key-sprite.GamePad_RThumb[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -128px -64px no-repeat;\r\n}\r\ni.key-sprite.GamePad_RStickX[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -96px -64px no-repeat;\r\n}\r\ni.key-sprite.Pos_GamePad_RStickX[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -160px -64px no-repeat;\r\n}\r\ni.key-sprite.Neg_GamePad_RStickX[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -64px -64px no-repeat;\r\n}\r\ni.key-sprite.GamePad_RStickY[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -224px -64px no-repeat;\r\n}\r\ni.key-sprite.Pos_GamePad_RStickY[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -192px -64px no-repeat;\r\n}\r\ni.key-sprite.Neg_GamePad_RStickY[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -32px -64px no-repeat;\r\n}\r\ni.key-sprite.GamePad_LThumb[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -128px -32px no-repeat;\r\n}\r\ni.key-sprite.GamePad_LStickX[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -96px -32px no-repeat;\r\n}\r\ni.key-sprite.Pos_GamePad_LStickX[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -160px -32px no-repeat;\r\n}\r\ni.key-sprite.Neg_GamePad_LStickX[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -64px -32px no-repeat;\r\n}\r\ni.key-sprite.GamePad_LStickY[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -224px -32px no-repeat;\r\n}\r\ni.key-sprite.Pos_GamePad_LStickY[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -192px -32px no-repeat;\r\n}\r\ni.key-sprite.Neg_GamePad_LStickY[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -32px -32px no-repeat;\r\n}\r\ni.key-sprite.GamePad_DPadUp[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -192px -96px no-repeat;\r\n}\r\ni.key-sprite.GamePad_DPadRight[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -160px -96px no-repeat;\r\n}\r\ni.key-sprite.GamePad_DPadDown[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -32px -96px no-repeat;\r\n}\r\ni.key-sprite.GamePad_DPadLeft[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -64px -96px no-repeat;\r\n}\r\ni.key-sprite.GamePad_FaceUp[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -96px 0px no-repeat;\r\n}\r\ni.key-sprite.GamePad_FaceRight[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -32px 0px no-repeat;\r\n}\r\ni.key-sprite.GamePad_FaceDown[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -0px 0px no-repeat;\r\n}\r\ni.key-sprite.GamePad_FaceLeft[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -64px 0px no-repeat;\r\n}\r\ni.key-sprite.GamePad_LBumper[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -128px 0px no-repeat;\r\n}\r\ni.key-sprite.GamePad_RBumper[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -192px 0px no-repeat;\r\n}\r\ni.key-sprite[_ngcontent-%COMP%]:is(.Pos_GamePad_LTrigger, .Neg_GamePad_LTrigger[_ngcontent-%COMP%], .GamePad_LTrigger)[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -160px 0px no-repeat;\r\n}\r\ni.key-sprite[_ngcontent-%COMP%]:is(.Pos_GamePad_RTrigger, .Neg_GamePad_RTrigger[_ngcontent-%COMP%], .GamePad_RTrigger)[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -224px 0px no-repeat;\r\n}\r\ni.key-sprite.GamePad_Back[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -192px -128px no-repeat;\r\n}\r\ni.key-sprite.GamePad_Forward[_ngcontent-%COMP%] {\r\n    background: url('/assets/img/GameControllerButtons.png') -192px -160px no-repeat;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsNENBQTRDO0lBQzVDLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksK0VBQStFO0FBQ25GO0FBQ0E7SUFDSSw4RUFBOEU7QUFDbEY7QUFDQTtJQUNJLCtFQUErRTtBQUNuRjtBQUNBO0lBQ0ksOEVBQThFO0FBQ2xGO0FBQ0E7SUFDSSwrRUFBK0U7QUFDbkY7QUFDQTtJQUNJLCtFQUErRTtBQUNuRjtBQUNBO0lBQ0ksOEVBQThFO0FBQ2xGO0FBQ0E7SUFDSSwrRUFBK0U7QUFDbkY7QUFDQTtJQUNJLDhFQUE4RTtBQUNsRjtBQUNBO0lBQ0ksK0VBQStFO0FBQ25GO0FBQ0E7SUFDSSw4RUFBOEU7QUFDbEY7QUFDQTtJQUNJLCtFQUErRTtBQUNuRjtBQUNBO0lBQ0ksK0VBQStFO0FBQ25GO0FBQ0E7SUFDSSw4RUFBOEU7QUFDbEY7QUFDQTtJQUNJLCtFQUErRTtBQUNuRjtBQUNBO0lBQ0ksK0VBQStFO0FBQ25GO0FBQ0E7SUFDSSw4RUFBOEU7QUFDbEY7QUFDQTtJQUNJLDhFQUE4RTtBQUNsRjtBQUNBO0lBQ0ksNEVBQTRFO0FBQ2hGO0FBQ0E7SUFDSSw0RUFBNEU7QUFDaEY7QUFDQTtJQUNJLDJFQUEyRTtBQUMvRTtBQUNBO0lBQ0ksNEVBQTRFO0FBQ2hGO0FBQ0E7SUFDSSw2RUFBNkU7QUFDakY7QUFDQTtJQUNJLDZFQUE2RTtBQUNqRjtBQUNBO0lBQ0ksNkVBQTZFO0FBQ2pGO0FBQ0E7SUFDSSw2RUFBNkU7QUFDakY7QUFDQTtJQUNJLGdGQUFnRjtBQUNwRjtBQUNBO0lBQ0ksZ0ZBQWdGO0FBQ3BGIiwiZmlsZSI6InRhYi1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpLmtleS1zcHJpdGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICB6b29tOiAwLjc1O1xyXG4gICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvci1hZGp1c3Q6IGV4YWN0ICFpbXBvcnRhbnQ7XHJcbn1cclxuaS5rZXktc3ByaXRlLkdhbWVQYWRfUlRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvR2FtZUNvbnRyb2xsZXJCdXR0b25zLnBuZycpIC0xMjhweCAtNjRweCBuby1yZXBlYXQ7XHJcbn1cclxuaS5rZXktc3ByaXRlLkdhbWVQYWRfUlN0aWNrWCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtOTZweCAtNjRweCBuby1yZXBlYXQ7XHJcbn1cclxuaS5rZXktc3ByaXRlLlBvc19HYW1lUGFkX1JTdGlja1gge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTE2MHB4IC02NHB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGUuTmVnX0dhbWVQYWRfUlN0aWNrWCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtNjRweCAtNjRweCBuby1yZXBlYXQ7XHJcbn1cclxuaS5rZXktc3ByaXRlLkdhbWVQYWRfUlN0aWNrWSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtMjI0cHggLTY0cHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5Qb3NfR2FtZVBhZF9SU3RpY2tZIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvR2FtZUNvbnRyb2xsZXJCdXR0b25zLnBuZycpIC0xOTJweCAtNjRweCBuby1yZXBlYXQ7XHJcbn1cclxuaS5rZXktc3ByaXRlLk5lZ19HYW1lUGFkX1JTdGlja1kge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTMycHggLTY0cHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5HYW1lUGFkX0xUaHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtMTI4cHggLTMycHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5HYW1lUGFkX0xTdGlja1gge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTk2cHggLTMycHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5Qb3NfR2FtZVBhZF9MU3RpY2tYIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvR2FtZUNvbnRyb2xsZXJCdXR0b25zLnBuZycpIC0xNjBweCAtMzJweCBuby1yZXBlYXQ7XHJcbn1cclxuaS5rZXktc3ByaXRlLk5lZ19HYW1lUGFkX0xTdGlja1gge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTY0cHggLTMycHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5HYW1lUGFkX0xTdGlja1kge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTIyNHB4IC0zMnB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGUuUG9zX0dhbWVQYWRfTFN0aWNrWSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtMTkycHggLTMycHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5OZWdfR2FtZVBhZF9MU3RpY2tZIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvR2FtZUNvbnRyb2xsZXJCdXR0b25zLnBuZycpIC0zMnB4IC0zMnB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGUuR2FtZVBhZF9EUGFkVXAge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTE5MnB4IC05NnB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGUuR2FtZVBhZF9EUGFkUmlnaHQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTE2MHB4IC05NnB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGUuR2FtZVBhZF9EUGFkRG93biB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtMzJweCAtOTZweCBuby1yZXBlYXQ7XHJcbn1cclxuaS5rZXktc3ByaXRlLkdhbWVQYWRfRFBhZExlZnQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTY0cHggLTk2cHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5HYW1lUGFkX0ZhY2VVcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtOTZweCAwcHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5HYW1lUGFkX0ZhY2VSaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtMzJweCAwcHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5HYW1lUGFkX0ZhY2VEb3duIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvR2FtZUNvbnRyb2xsZXJCdXR0b25zLnBuZycpIC0wcHggMHB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGUuR2FtZVBhZF9GYWNlTGVmdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtNjRweCAwcHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5HYW1lUGFkX0xCdW1wZXIge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTEyOHB4IDBweCBuby1yZXBlYXQ7XHJcbn1cclxuaS5rZXktc3ByaXRlLkdhbWVQYWRfUkJ1bXBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtMTkycHggMHB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGU6aXMoLlBvc19HYW1lUGFkX0xUcmlnZ2VyLCAuTmVnX0dhbWVQYWRfTFRyaWdnZXIsIC5HYW1lUGFkX0xUcmlnZ2VyKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtMTYwcHggMHB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGU6aXMoLlBvc19HYW1lUGFkX1JUcmlnZ2VyLCAuTmVnX0dhbWVQYWRfUlRyaWdnZXIsIC5HYW1lUGFkX1JUcmlnZ2VyKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL0dhbWVDb250cm9sbGVyQnV0dG9ucy5wbmcnKSAtMjI0cHggMHB4IG5vLXJlcGVhdDtcclxufVxyXG5pLmtleS1zcHJpdGUuR2FtZVBhZF9CYWNrIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvR2FtZUNvbnRyb2xsZXJCdXR0b25zLnBuZycpIC0xOTJweCAtMTI4cHggbm8tcmVwZWF0O1xyXG59XHJcbmkua2V5LXNwcml0ZS5HYW1lUGFkX0ZvcndhcmQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9HYW1lQ29udHJvbGxlckJ1dHRvbnMucG5nJykgLTE5MnB4IC0xNjBweCBuby1yZXBlYXQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 8020:
/*!*****************************************************!*\
  !*** ./src/app/e-d-controls/tabs/tabs.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsComponent": () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ship_tab_ship_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship-tab/ship-tab.component */ 8730);
/* harmony import */ var _srv_tab_srv_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./srv-tab/srv-tab.component */ 6970);
/* harmony import */ var _map_tab_map_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-tab/map-tab.component */ 6387);




class TabsComponent {
    refreshLayout() {
        /* triggers UI update check */
    }
}
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(); };
TabsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsComponent, selectors: [["app-tabs"]], decls: 23, vars: 0, consts: [[1, "container-fluid", "mb-1"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["id", "ship-tab", "data-bs-toggle", "tab", "data-bs-target", "#ship", "type", "button", "role", "tab", "aria-controls", "ship", "aria-selected", "true", 1, "nav-link", "active", 3, "click"], ["id", "srv-tab", "data-bs-toggle", "tab", "data-bs-target", "#srv", "type", "button", "role", "tab", "aria-controls", "srv", "aria-selected", "false", 1, "nav-link", 3, "click"], ["id", "map-tab", "data-bs-toggle", "tab", "data-bs-target", "#map", "type", "button", "role", "tab", "aria-controls", "map", "aria-selected", "false", 1, "nav-link", 3, "click"], ["id", "camera-tab", "data-bs-toggle", "tab", "data-bs-target", "#camera", "type", "button", "role", "tab", "aria-controls", "camera", "aria-selected", "false", 1, "nav-link", 3, "click"], ["id", "myTabContent", 1, "tab-content"], ["id", "ship", "role", "tabpanel", "aria-labelledby", "ship-tab", 1, "tab-pane", "fade", "show", "active"], ["id", "srv", "role", "tabpanel", "aria-labelledby", "srv-tab", 1, "tab-pane", "fade"], ["id", "map", "role", "tabpanel", "aria-labelledby", "map-tab", 1, "tab-pane", "fade"], ["id", "camera", "role", "tabpanel", "aria-labelledby", "camera-tab", 1, "tab-pane", "fade"]], template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_ship_tab_ship_tab_component__WEBPACK_IMPORTED_MODULE_1__.ShipTabComponent, _srv_tab_srv_tab_component__WEBPACK_IMPORTED_MODULE_2__.SrvTabComponent, _map_tab_map_tab_component__WEBPACK_IMPORTED_MODULE_3__.MapTabComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5jc3MifQ== */", "@import url(\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css\");\r\n@import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css\");\r\n@media print {\r\n    .grid[_ngcontent-%COMP%] {\r\n        height:auto !important;\r\n        max-width: 100%;\r\n        text-align:center;\r\n    }\r\n    .grid-item[_ngcontent-%COMP%] {\r\n        position: relative !important;\r\n        left: auto !important;\r\n        top: auto !important;\r\n        float: none !important;\r\n        display: block !important;\r\n        padding: 0;\r\n        margin: 2px;\r\n        max-width: 32%;\r\n        page-break-inside: avoid;\r\n    }\r\n    div[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtZC1jb250cm9scy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRGQUE0RjtBQUM1RiwwRkFBMEY7QUFDMUY7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixXQUFXO1FBQ1gsY0FBYztRQUNkLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiZS1kLWNvbnRyb2xzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4wLWJldGEyL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuMy4wL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzc1wiKTtcclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5ncmlkIHtcclxuICAgICAgICBoZWlnaHQ6YXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuICAgIC5ncmlkLWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMyJTtcclxuICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 5533:
/*!**************************!*\
  !*** ./src/bootstrap.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4809:
/*!********************************************************************!*\
  !*** ./node_modules/desandro-matches-selector/matches-selector.js ***!
  \********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));


/***/ }),

/***/ 1748:
/*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( typeof window != 'undefined' ? window : this, function() {

"use strict";

function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));


/***/ }),

/***/ 1709:
/*!**********************************************!*\
  !*** ./node_modules/fizzy-ui-utils/utils.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */
(function (window, factory) {
  // universal module definition

  /*jshint strict: false */

  /*globals define, module, require */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! desandro-matches-selector/matches-selector */ 4809)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (matchesSelector) {
      return factory(window, matchesSelector);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, matchesSelector) {
  'use strict';

  var utils = {}; // ----- extend ----- //
  // extends objects

  utils.extend = function (a, b) {
    for (var prop in b) {
      a[prop] = b[prop];
    }

    return a;
  }; // ----- modulo ----- //


  utils.modulo = function (num, div) {
    return (num % div + div) % div;
  }; // ----- makeArray ----- //


  var arraySlice = Array.prototype.slice; // turn element or nodeList into an array

  utils.makeArray = function (obj) {
    if (Array.isArray(obj)) {
      // use object if already an array
      return obj;
    } // return empty array if undefined or null. #6


    if (obj === null || obj === undefined) {
      return [];
    }

    var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';

    if (isArrayLike) {
      // convert nodeList to array
      return arraySlice.call(obj);
    } // array of single index


    return [obj];
  }; // ----- removeFrom ----- //


  utils.removeFrom = function (ary, obj) {
    var index = ary.indexOf(obj);

    if (index != -1) {
      ary.splice(index, 1);
    }
  }; // ----- getParent ----- //


  utils.getParent = function (elem, selector) {
    while (elem.parentNode && elem != document.body) {
      elem = elem.parentNode;

      if (matchesSelector(elem, selector)) {
        return elem;
      }
    }
  }; // ----- getQueryElement ----- //
  // use element as selector string


  utils.getQueryElement = function (elem) {
    if (typeof elem == 'string') {
      return document.querySelector(elem);
    }

    return elem;
  }; // ----- handleEvent ----- //
  // enable .ontype to trigger from .addEventListener( elem, 'type' )


  utils.handleEvent = function (event) {
    var method = 'on' + event.type;

    if (this[method]) {
      this[method](event);
    }
  }; // ----- filterFindElements ----- //


  utils.filterFindElements = function (elems, selector) {
    // make array of elems
    elems = utils.makeArray(elems);
    var ffElems = [];
    elems.forEach(function (elem) {
      // check that elem is an actual element
      if (!(elem instanceof HTMLElement)) {
        return;
      } // add elem if no selector


      if (!selector) {
        ffElems.push(elem);
        return;
      } // filter & find items if we have a selector
      // filter


      if (matchesSelector(elem, selector)) {
        ffElems.push(elem);
      } // find children


      var childElems = elem.querySelectorAll(selector); // concat childElems to filterFound array

      for (var i = 0; i < childElems.length; i++) {
        ffElems.push(childElems[i]);
      }
    });
    return ffElems;
  }; // ----- debounceMethod ----- //


  utils.debounceMethod = function (_class, methodName, threshold) {
    threshold = threshold || 100; // original method

    var method = _class.prototype[methodName];
    var timeoutName = methodName + 'Timeout';

    _class.prototype[methodName] = function () {
      var timeout = this[timeoutName];
      clearTimeout(timeout);
      var args = arguments;

      var _this = this;

      this[timeoutName] = setTimeout(function () {
        method.apply(_this, args);
        delete _this[timeoutName];
      }, threshold);
    };
  }; // ----- docReady ----- //


  utils.docReady = function (callback) {
    var readyState = document.readyState;

    if (readyState == 'complete' || readyState == 'interactive') {
      // do async to allow for other scripts to run. metafizzy/flickity#441
      setTimeout(callback);
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }; // ----- htmlInit ----- //
  // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/


  utils.toDashed = function (str) {
    return str.replace(/(.)([A-Z])/g, function (match, $1, $2) {
      return $1 + '-' + $2;
    }).toLowerCase();
  };

  var console = window.console;
  /**
   * allow user to initialize classes via [data-namespace] or .js-namespace class
   * htmlInit( Widget, 'widgetName' )
   * options are parsed from data-namespace-options
   */

  utils.htmlInit = function (WidgetClass, namespace) {
    utils.docReady(function () {
      var dashedNamespace = utils.toDashed(namespace);
      var dataAttr = 'data-' + dashedNamespace;
      var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
      var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
      var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
      var dataOptionsAttr = dataAttr + '-options';
      var jQuery = window.jQuery;
      elems.forEach(function (elem) {
        var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
        var options;

        try {
          options = attr && JSON.parse(attr);
        } catch (error) {
          // log error, do not initialize
          if (console) {
            console.error('Error parsing ' + dataAttr + ' on ' + elem.className + ': ' + error);
          }

          return;
        } // initialize


        var instance = new WidgetClass(elem, options); // make available via $().data('namespace')

        if (jQuery) {
          jQuery.data(elem, namespace, instance);
        }
      });
    });
  }; // -----  ----- //


  return utils;
});

/***/ }),

/***/ 1699:
/*!*******************************************!*\
  !*** ./node_modules/get-size/get-size.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});


/***/ }),

/***/ 8258:
/*!************************************************!*\
  !*** ./node_modules/masonry-layout/masonry.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! outlayer/outlayer */ 492),
        __webpack_require__(/*! get-size/get-size */ 1699)
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( Outlayer, getSize ) {

'use strict';

// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  var proto = Masonry.prototype;

  proto._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
    this.horizontalColIndex = 0;
  };

  proto.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  proto.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  proto._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );
    // use horizontal or top column position
    var colPosMethod = this.options.horizontalOrder ?
      '_getHorizontalColPosition' : '_getTopColPosition';
    var colPosition = this[ colPosMethod ]( colSpan, item );
    // position the brick
    var position = {
      x: this.columnWidth * colPosition.col,
      y: colPosition.y
    };
    // apply setHeight to necessary columns
    var setHeight = colPosition.y + item.size.outerHeight;
    var setMax = colSpan + colPosition.col;
    for ( var i = colPosition.col; i < setMax; i++ ) {
      this.colYs[i] = setHeight;
    }

    return position;
  };

  proto._getTopColPosition = function( colSpan ) {
    var colGroup = this._getTopColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );

    return {
      col: colGroup.indexOf( minimumY ),
      y: minimumY,
    };
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  proto._getTopColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      colGroup[i] = this._getColGroupY( i, colSpan );
    }
    return colGroup;
  };

  proto._getColGroupY = function( col, colSpan ) {
    if ( colSpan < 2 ) {
      return this.colYs[ col ];
    }
    // make an array of colY values for that one group
    var groupColYs = this.colYs.slice( col, col + colSpan );
    // and get the max value of the array
    return Math.max.apply( Math, groupColYs );
  };

  // get column position based on horizontal index. #873
  proto._getHorizontalColPosition = function( colSpan, item ) {
    var col = this.horizontalColIndex % this.cols;
    var isOver = colSpan > 1 && col + colSpan > this.cols;
    // shift to next row if item can't fit on current row
    col = isOver ? 0 : col;
    // don't let zero-size items take up space
    var hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

    return {
      col: col,
      y: this._getColGroupY( col, colSpan ),
    };
  };

  proto._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  proto._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  proto._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  proto.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));


/***/ }),

/***/ 281:
/*!***************************************!*\
  !*** ./node_modules/outlayer/item.js ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Outlayer Item
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ev-emitter/ev-emitter */ 1748),
        __webpack_require__(/*! get-size/get-size */ 1699)
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( EvEmitter, getSize ) {
'use strict';

// ----- helpers ----- //

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //


var docElemStyle = document.documentElement.style;

var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
var vendorProperties = {
  transform: transformProperty,
  transition: transitionProperty,
  transitionDuration: transitionProperty + 'Duration',
  transitionProperty: transitionProperty + 'Property',
  transitionDelay: transitionProperty + 'Delay'
};

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  var x = parseFloat( xValue );
  var y = parseFloat( yValue );
  // convert percent to pixels
  var layoutSize = this.layout.size;
  if ( xValue.indexOf('%') != -1 ) {
    x = ( x / 100 ) * layoutSize.width;
  }
  if ( yValue.indexOf('%') != -1 ) {
    y = ( y / 100 ) * layoutSize.height;
  }
  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var didNotMove = x == this.position.x && y == this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseFloat( x );
  this.position.y = parseFloat( y );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto.transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' + toDashedAll( transformProperty );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // munge number to millisecond, to match stagger
  var duration = this.layout.options.transitionDuration;
  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: duration,
    transitionDelay: this.staggerDelay || 0
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: '',
  transitionDelay: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- stagger ----- //

proto.stagger = function( delay ) {
  delay = isNaN( delay ) ? 0 : delay;
  this.staggerDelay = delay + 'ms';
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));


/***/ }),

/***/ 492:
/*!*******************************************!*\
  !*** ./node_modules/outlayer/outlayer.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ev-emitter/ev-emitter */ 1748),
        __webpack_require__(/*! get-size/get-size */ 1699),
        __webpack_require__(/*! fizzy-ui-utils/utils */ 1709),
        __webpack_require__(/*! ./item */ 281)
      ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  this.updateStagger();
  queue.forEach( function( obj, i ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  }, this );
};

// set stagger from option in milliseconds number
proto.updateStagger = function() {
  var stagger = this.options.stagger;
  if ( stagger === null || stagger === undefined ) {
    this.stagger = 0;
    return;
  }
  this.stagger = getMilliseconds( stagger );
  return this.stagger;
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant, i ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.stagger( i * this.stagger );
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- helpers ----- //

// how many milliseconds are in each unit
var msUnits = {
  ms: 1,
  s: 1000
};

// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds( time ) {
  if ( typeof time == 'number' ) {
    return time;
  }
  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  var num = matches && matches[1];
  var unit = matches && matches[2];
  if ( !num.length ) {
    return 0;
  }
  num = parseFloat( num );
  var mult = msUnits[ unit ] || 1;
  return num * mult;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));


/***/ }),

/***/ 4505:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/BehaviorSubject.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BehaviorSubject": () => (/* binding */ BehaviorSubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 2218);
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ 9086);


class BehaviorSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
    constructor(_value) {
        super();
        this._value = _value;
    }
    get value() {
        return this.getValue();
    }
    _subscribe(subscriber) {
        const subscription = super._subscribe(subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    }
    getValue() {
        if (this.hasError) {
            throw this.thrownError;
        }
        else if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__.ObjectUnsubscribedError();
        }
        else {
            return this._value;
        }
    }
    next(value) {
        super.next(this._value = value);
    }
}


/***/ }),

/***/ 2378:
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Observable.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observable": () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/canReportError */ 5739);
/* harmony import */ var _util_toSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/toSubscriber */ 8333);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./symbol/observable */ 6831);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/pipe */ 6800);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ 146);





class Observable {
    constructor(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    lift(operator) {
        const observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    }
    subscribe(observerOrNext, error, complete) {
        const { operator } = this;
        const sink = (0,_util_toSubscriber__WEBPACK_IMPORTED_MODULE_0__.toSubscriber)(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (_config__WEBPACK_IMPORTED_MODULE_1__.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (_config__WEBPACK_IMPORTED_MODULE_1__.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    }
    _trySubscribe(sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (_config__WEBPACK_IMPORTED_MODULE_1__.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if ((0,_util_canReportError__WEBPACK_IMPORTED_MODULE_2__.canReportError)(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    }
    forEach(next, promiseCtor) {
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor((resolve, reject) => {
            let subscription;
            subscription = this.subscribe((value) => {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    }
    _subscribe(subscriber) {
        const { source } = this;
        return source && source.subscribe(subscriber);
    }
    [_symbol_observable__WEBPACK_IMPORTED_MODULE_3__.observable]() {
        return this;
    }
    pipe(...operations) {
        if (operations.length === 0) {
            return this;
        }
        return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_4__.pipeFromArray)(operations)(this);
    }
    toPromise(promiseCtor) {
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor((resolve, reject) => {
            let value;
            this.subscribe((x) => value = x, (err) => reject(err), () => resolve(value));
        });
    }
}
Observable.create = (subscribe) => {
    return new Observable(subscribe);
};
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = _config__WEBPACK_IMPORTED_MODULE_1__.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}


/***/ }),

/***/ 9957:
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Observer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "empty": () => (/* binding */ empty)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ 146);
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/hostReportError */ 8897);


const empty = {
    closed: true,
    next(value) { },
    error(err) {
        if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_1__.hostReportError)(err);
        }
    },
    complete() { }
};


/***/ }),

/***/ 2218:
/*!********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Subject.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubjectSubscriber": () => (/* binding */ SubjectSubscriber),
/* harmony export */   "Subject": () => (/* binding */ Subject),
/* harmony export */   "AnonymousSubject": () => (/* binding */ AnonymousSubject)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observable */ 2378);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 14);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Subscription */ 2425);
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ 9086);
/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubjectSubscription */ 1722);
/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ 1482);






class SubjectSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
    constructor(destination) {
        super(destination);
        this.destination = destination;
    }
}
class Subject extends _Observable__WEBPACK_IMPORTED_MODULE_1__.Observable {
    constructor() {
        super();
        this.observers = [];
        this.closed = false;
        this.isStopped = false;
        this.hasError = false;
        this.thrownError = null;
    }
    [_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_2__.rxSubscriber]() {
        return new SubjectSubscriber(this);
    }
    lift(operator) {
        const subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    }
    next(value) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__.ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            const { observers } = this;
            const len = observers.length;
            const copy = observers.slice();
            for (let i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    }
    error(err) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__.ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        const { observers } = this;
        const len = observers.length;
        const copy = observers.slice();
        for (let i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    }
    complete() {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__.ObjectUnsubscribedError();
        }
        this.isStopped = true;
        const { observers } = this;
        const len = observers.length;
        const copy = observers.slice();
        for (let i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    }
    unsubscribe() {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    }
    _trySubscribe(subscriber) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__.ObjectUnsubscribedError();
        }
        else {
            return super._trySubscribe(subscriber);
        }
    }
    _subscribe(subscriber) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return _Subscription__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return _Subscription__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__.SubjectSubscription(this, subscriber);
        }
    }
    asObservable() {
        const observable = new _Observable__WEBPACK_IMPORTED_MODULE_1__.Observable();
        observable.source = this;
        return observable;
    }
}
Subject.create = (destination, source) => {
    return new AnonymousSubject(destination, source);
};
class AnonymousSubject extends Subject {
    constructor(destination, source) {
        super();
        this.destination = destination;
        this.source = source;
    }
    next(value) {
        const { destination } = this;
        if (destination && destination.next) {
            destination.next(value);
        }
    }
    error(err) {
        const { destination } = this;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    }
    complete() {
        const { destination } = this;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    }
    _subscribe(subscriber) {
        const { source } = this;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return _Subscription__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;
        }
    }
}


/***/ }),

/***/ 1722:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/SubjectSubscription.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubjectSubscription": () => (/* binding */ SubjectSubscription)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscription */ 2425);

class SubjectSubscription extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
    constructor(subject, subscriber) {
        super();
        this.subject = subject;
        this.subscriber = subscriber;
        this.closed = false;
    }
    unsubscribe() {
        if (this.closed) {
            return;
        }
        this.closed = true;
        const subject = this.subject;
        const observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        const subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    }
}


/***/ }),

/***/ 14:
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Subscriber.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subscriber": () => (/* binding */ Subscriber),
/* harmony export */   "SafeSubscriber": () => (/* binding */ SafeSubscriber)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/isFunction */ 1900);
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observer */ 9957);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscription */ 2425);
/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ 1482);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ 146);
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/hostReportError */ 8897);






class Subscriber extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
    constructor(destinationOrNext, error, complete) {
        super();
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = _Observer__WEBPACK_IMPORTED_MODULE_1__.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = _Observer__WEBPACK_IMPORTED_MODULE_1__.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        this.destination = destinationOrNext;
                        destinationOrNext.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    [_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_2__.rxSubscriber]() { return this; }
    static create(next, error, complete) {
        const subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    }
    next(value) {
        if (!this.isStopped) {
            this._next(value);
        }
    }
    error(err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    }
    complete() {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    }
    unsubscribe() {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        super.unsubscribe();
    }
    _next(value) {
        this.destination.next(value);
    }
    _error(err) {
        this.destination.error(err);
        this.unsubscribe();
    }
    _complete() {
        this.destination.complete();
        this.unsubscribe();
    }
    _unsubscribeAndRecycle() {
        const { _parentOrParents } = this;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    }
}
class SafeSubscriber extends Subscriber {
    constructor(_parentSubscriber, observerOrNext, error, complete) {
        super();
        this._parentSubscriber = _parentSubscriber;
        let next;
        let context = this;
        if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_3__.isFunction)(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== _Observer__WEBPACK_IMPORTED_MODULE_1__.empty) {
                context = Object.create(observerOrNext);
                if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_3__.isFunction)(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    next(value) {
        if (!this.isStopped && this._next) {
            const { _parentSubscriber } = this;
            if (!_config__WEBPACK_IMPORTED_MODULE_4__.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    }
    error(err) {
        if (!this.isStopped) {
            const { _parentSubscriber } = this;
            const { useDeprecatedSynchronousErrorHandling } = _config__WEBPACK_IMPORTED_MODULE_4__.config;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__.hostReportError)(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__.hostReportError)(err);
                }
                this.unsubscribe();
            }
        }
    }
    complete() {
        if (!this.isStopped) {
            const { _parentSubscriber } = this;
            if (this._complete) {
                const wrappedComplete = () => this._complete.call(this._context);
                if (!_config__WEBPACK_IMPORTED_MODULE_4__.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    }
    __tryOrUnsub(fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (_config__WEBPACK_IMPORTED_MODULE_4__.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__.hostReportError)(err);
            }
        }
    }
    __tryOrSetError(parent, fn, value) {
        if (!_config__WEBPACK_IMPORTED_MODULE_4__.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (_config__WEBPACK_IMPORTED_MODULE_4__.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__.hostReportError)(err);
                return true;
            }
        }
        return false;
    }
    _unsubscribe() {
        const { _parentSubscriber } = this;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    }
}


/***/ }),

/***/ 2425:
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Subscription.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subscription": () => (/* binding */ Subscription)
/* harmony export */ });
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/isArray */ 4327);
/* harmony import */ var _util_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/isObject */ 6549);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isFunction */ 1900);
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/UnsubscriptionError */ 7875);




class Subscription {
    constructor(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
        }
    }
    unsubscribe() {
        let errors;
        if (this.closed) {
            return;
        }
        let { _parentOrParents, _ctorUnsubscribe, _unsubscribe, _subscriptions } = this;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (let index = 0; index < _parentOrParents.length; ++index) {
                const parent = _parentOrParents[index];
                parent.remove(this);
            }
        }
        if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(_unsubscribe)) {
            if (_ctorUnsubscribe) {
                this._unsubscribe = undefined;
            }
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if ((0,_util_isArray__WEBPACK_IMPORTED_MODULE_2__.isArray)(_subscriptions)) {
            let index = -1;
            let len = _subscriptions.length;
            while (++index < len) {
                const sub = _subscriptions[index];
                if ((0,_util_isObject__WEBPACK_IMPORTED_MODULE_3__.isObject)(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError(errors);
        }
    }
    add(teardown) {
        let subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    const tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        let { _parentOrParents } = subscription;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        const subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    }
    remove(subscription) {
        const subscriptions = this._subscriptions;
        if (subscriptions) {
            const subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    }
}
Subscription.EMPTY = (function (empty) {
    empty.closed = true;
    return empty;
}(new Subscription()));
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce((errs, err) => errs.concat((err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError) ? err.errors : err), []);
}


/***/ }),

/***/ 146:
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/config.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
let _enable_super_gross_mode_that_will_cause_bad_things = false;
const config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            const error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};


/***/ }),

/***/ 6831:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/symbol/observable.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "observable": () => (/* binding */ observable)
/* harmony export */ });
const observable = (() => typeof Symbol === 'function' && Symbol.observable || '@@observable')();


/***/ }),

/***/ 1482:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/symbol/rxSubscriber.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rxSubscriber": () => (/* binding */ rxSubscriber),
/* harmony export */   "$$rxSubscriber": () => (/* binding */ $$rxSubscriber)
/* harmony export */ });
const rxSubscriber = (() => typeof Symbol === 'function'
    ? Symbol('rxSubscriber')
    : '@@rxSubscriber_' + Math.random())();
const $$rxSubscriber = rxSubscriber;


/***/ }),

/***/ 9086:
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/ObjectUnsubscribedError.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectUnsubscribedError": () => (/* binding */ ObjectUnsubscribedError)
/* harmony export */ });
const ObjectUnsubscribedErrorImpl = (() => {
    function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
    return ObjectUnsubscribedErrorImpl;
})();
const ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;


/***/ }),

/***/ 7875:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/UnsubscriptionError.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsubscriptionError": () => (/* binding */ UnsubscriptionError)
/* harmony export */ });
const UnsubscriptionErrorImpl = (() => {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}` : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
const UnsubscriptionError = UnsubscriptionErrorImpl;


/***/ }),

/***/ 5739:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/canReportError.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canReportError": () => (/* binding */ canReportError)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 14);

function canReportError(observer) {
    while (observer) {
        const { closed, destination, isStopped } = observer;
        if (closed || isStopped) {
            return false;
        }
        else if (destination && destination instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}


/***/ }),

/***/ 8897:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/hostReportError.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hostReportError": () => (/* binding */ hostReportError)
/* harmony export */ });
function hostReportError(err) {
    setTimeout(() => { throw err; }, 0);
}


/***/ }),

/***/ 1356:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/identity.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "identity": () => (/* binding */ identity)
/* harmony export */ });
function identity(x) {
    return x;
}


/***/ }),

/***/ 4327:
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isArray.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isArray": () => (/* binding */ isArray)
/* harmony export */ });
const isArray = (() => Array.isArray || ((x) => x && typeof x.length === 'number'))();


/***/ }),

/***/ 1900:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isFunction.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isFunction": () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(x) {
    return typeof x === 'function';
}


/***/ }),

/***/ 6549:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isObject.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isObject": () => (/* binding */ isObject)
/* harmony export */ });
function isObject(x) {
    return x !== null && typeof x === 'object';
}


/***/ }),

/***/ 6800:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/pipe.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pipe": () => (/* binding */ pipe),
/* harmony export */   "pipeFromArray": () => (/* binding */ pipeFromArray)
/* harmony export */ });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ 1356);

function pipe(...fns) {
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce((prev, fn) => fn(prev), input);
    };
}


/***/ }),

/***/ 8333:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/toSubscriber.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toSubscriber": () => (/* binding */ toSubscriber)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 14);
/* harmony import */ var _symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/rxSubscriber */ 1482);
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observer */ 9957);



function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__.rxSubscriber]) {
            return nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber(_Observer__WEBPACK_IMPORTED_MODULE_2__.empty);
    }
    return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber(nextOrObserver, error, complete);
}


/***/ }),

/***/ 4497:
/*!******************************************************************************!*\
  !*** ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ɵgetDOM": () => (/* reexport safe */ _angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"]),
/* harmony export */   "BrowserModule": () => (/* binding */ BrowserModule),
/* harmony export */   "BrowserTransferStateModule": () => (/* binding */ BrowserTransferStateModule),
/* harmony export */   "By": () => (/* binding */ By),
/* harmony export */   "DomSanitizer": () => (/* binding */ DomSanitizer),
/* harmony export */   "EVENT_MANAGER_PLUGINS": () => (/* binding */ EVENT_MANAGER_PLUGINS),
/* harmony export */   "EventManager": () => (/* binding */ EventManager),
/* harmony export */   "HAMMER_GESTURE_CONFIG": () => (/* binding */ HAMMER_GESTURE_CONFIG),
/* harmony export */   "HAMMER_LOADER": () => (/* binding */ HAMMER_LOADER),
/* harmony export */   "HammerGestureConfig": () => (/* binding */ HammerGestureConfig),
/* harmony export */   "HammerModule": () => (/* binding */ HammerModule),
/* harmony export */   "Meta": () => (/* binding */ Meta),
/* harmony export */   "Title": () => (/* binding */ Title),
/* harmony export */   "TransferState": () => (/* binding */ TransferState),
/* harmony export */   "VERSION": () => (/* binding */ VERSION),
/* harmony export */   "disableDebugTools": () => (/* binding */ disableDebugTools),
/* harmony export */   "enableDebugTools": () => (/* binding */ enableDebugTools),
/* harmony export */   "makeStateKey": () => (/* binding */ makeStateKey),
/* harmony export */   "platformBrowser": () => (/* binding */ platformBrowser),
/* harmony export */   "ɵBrowserDomAdapter": () => (/* binding */ BrowserDomAdapter),
/* harmony export */   "ɵBrowserGetTestability": () => (/* binding */ BrowserGetTestability),
/* harmony export */   "ɵDomEventsPlugin": () => (/* binding */ DomEventsPlugin),
/* harmony export */   "ɵDomRendererFactory2": () => (/* binding */ DomRendererFactory2),
/* harmony export */   "ɵDomSanitizerImpl": () => (/* binding */ DomSanitizerImpl),
/* harmony export */   "ɵDomSharedStylesHost": () => (/* binding */ DomSharedStylesHost),
/* harmony export */   "ɵHammerGesturesPlugin": () => (/* binding */ HammerGesturesPlugin),
/* harmony export */   "ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS": () => (/* binding */ INTERNAL_BROWSER_PLATFORM_PROVIDERS),
/* harmony export */   "ɵKeyEventsPlugin": () => (/* binding */ KeyEventsPlugin),
/* harmony export */   "ɵNAMESPACE_URIS": () => (/* binding */ NAMESPACE_URIS),
/* harmony export */   "ɵSharedStylesHost": () => (/* binding */ SharedStylesHost),
/* harmony export */   "ɵTRANSITION_ID": () => (/* binding */ TRANSITION_ID),
/* harmony export */   "ɵescapeHtml": () => (/* binding */ escapeHtml),
/* harmony export */   "ɵflattenStyles": () => (/* binding */ flattenStyles),
/* harmony export */   "ɵinitDomAdapter": () => (/* binding */ initDomAdapter),
/* harmony export */   "ɵshimContentAttribute": () => (/* binding */ shimContentAttribute),
/* harmony export */   "ɵshimHostAttribute": () => (/* binding */ shimHostAttribute)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 1643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8802);
/**
 * @license Angular v13.2.1
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */




/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Provides DOM operations in any browser environment.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */

class GenericBrowserDomAdapter extends _angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵDomAdapter"] {
  constructor() {
    super(...arguments);
    this.supportsDOMEvents = true;
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * A `DomAdapter` powered by full browser DOM APIs.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */

/* tslint:disable:requireParameterType no-console */


class BrowserDomAdapter extends GenericBrowserDomAdapter {
  static makeCurrent() {
    (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵsetRootDomAdapter"])(new BrowserDomAdapter());
  }

  onAndCancel(el, evt, listener) {
    el.addEventListener(evt, listener, false); // Needed to follow Dart's subscription semantic, until fix of
    // https://code.google.com/p/dart/issues/detail?id=17406

    return () => {
      el.removeEventListener(evt, listener, false);
    };
  }

  dispatchEvent(el, evt) {
    el.dispatchEvent(evt);
  }

  remove(node) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }

  createElement(tagName, doc) {
    doc = doc || this.getDefaultDocument();
    return doc.createElement(tagName);
  }

  createHtmlDocument() {
    return document.implementation.createHTMLDocument('fakeTitle');
  }

  getDefaultDocument() {
    return document;
  }

  isElementNode(node) {
    return node.nodeType === Node.ELEMENT_NODE;
  }

  isShadowRoot(node) {
    return node instanceof DocumentFragment;
  }
  /** @deprecated No longer being used in Ivy code. To be removed in version 14. */


  getGlobalEventTarget(doc, target) {
    if (target === 'window') {
      return window;
    }

    if (target === 'document') {
      return doc;
    }

    if (target === 'body') {
      return doc.body;
    }

    return null;
  }

  getBaseHref(doc) {
    const href = getBaseElementHref();
    return href == null ? null : relativePath(href);
  }

  resetBaseElement() {
    baseElement = null;
  }

  getUserAgent() {
    return window.navigator.userAgent;
  }

  getCookie(name) {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵparseCookieValue"])(document.cookie, name);
  }

}

let baseElement = null;

function getBaseElementHref() {
  baseElement = baseElement || document.querySelector('base');
  return baseElement ? baseElement.getAttribute('href') : null;
} // based on urlUtils.js in AngularJS 1


let urlParsingNode;

function relativePath(url) {
  urlParsingNode = urlParsingNode || document.createElement('a');
  urlParsingNode.setAttribute('href', url);
  const pathName = urlParsingNode.pathname;
  return pathName.charAt(0) === '/' ? pathName : `/${pathName}`;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * An id that identifies a particular application being bootstrapped, that should
 * match across the client/server boundary.
 */


const TRANSITION_ID = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('TRANSITION_ID');

function appInitializerFactory(transitionId, document, injector) {
  return () => {
    // Wait for all application initializers to be completed before removing the styles set by
    // the server.
    injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationInitStatus).donePromise.then(() => {
      const dom = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"])();
      const styles = document.querySelectorAll(`style[ng-transition="${transitionId}"]`);

      for (let i = 0; i < styles.length; i++) {
        dom.remove(styles[i]);
      }
    });
  };
}

const SERVER_TRANSITION_PROVIDERS = [{
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_INITIALIZER,
  useFactory: appInitializerFactory,
  deps: [TRANSITION_ID, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector],
  multi: true
}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

class BrowserGetTestability {
  static init() {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.setTestabilityGetter)(new BrowserGetTestability());
  }

  addToWindow(registry) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].getAngularTestability = (elem, findInAncestors = true) => {
      const testability = registry.findTestabilityInTree(elem, findInAncestors);

      if (testability == null) {
        throw new Error('Could not find testability for element.');
      }

      return testability;
    };

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].getAllAngularTestabilities = () => registry.getAllTestabilities();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].getAllAngularRootElements = () => registry.getAllRootElements();

    const whenAllStable = (callback
    /** TODO #9100 */
    ) => {
      const testabilities = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].getAllAngularTestabilities();
      let count = testabilities.length;
      let didWork = false;

      const decrement = function (didWork_
      /** TODO #9100 */
      ) {
        didWork = didWork || didWork_;
        count--;

        if (count == 0) {
          callback(didWork);
        }
      };

      testabilities.forEach(function (testability
      /** TODO #9100 */
      ) {
        testability.whenStable(decrement);
      });
    };

    if (!_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].frameworkStabilizers) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].frameworkStabilizers = [];
    }

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].frameworkStabilizers.push(whenAllStable);
  }

  findTestabilityInTree(registry, elem, findInAncestors) {
    if (elem == null) {
      return null;
    }

    const t = registry.getTestability(elem);

    if (t != null) {
      return t;
    } else if (!findInAncestors) {
      return null;
    }

    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"])().isShadowRoot(elem)) {
      return this.findTestabilityInTree(registry, elem.host, true);
    }

    return this.findTestabilityInTree(registry, elem.parentElement, true);
  }

}
/**
 * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
 */


class BrowserXhr {
  build() {
    return new XMLHttpRequest();
  }

}

BrowserXhr.ɵfac = function BrowserXhr_Factory(t) {
  return new (t || BrowserXhr)();
};

BrowserXhr.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: BrowserXhr,
  factory: BrowserXhr.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrowserXhr, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * The injection token for the event-manager plug-in service.
 *
 * @publicApi
 */


const EVENT_MANAGER_PLUGINS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('EventManagerPlugins');
/**
 * An injectable service that provides event management for Angular
 * through a browser plug-in.
 *
 * @publicApi
 */

class EventManager {
  /**
   * Initializes an instance of the event-manager service.
   */
  constructor(plugins, _zone) {
    this._zone = _zone;
    this._eventNameToPlugin = new Map();
    plugins.forEach(p => p.manager = this);
    this._plugins = plugins.slice().reverse();
  }
  /**
   * Registers a handler for a specific element and event.
   *
   * @param element The HTML element to receive event notifications.
   * @param eventName The name of the event to listen for.
   * @param handler A function to call when the notification occurs. Receives the
   * event object as an argument.
   * @returns  A callback function that can be used to remove the handler.
   */


  addEventListener(element, eventName, handler) {
    const plugin = this._findPluginFor(eventName);

    return plugin.addEventListener(element, eventName, handler);
  }
  /**
   * Registers a global handler for an event in a target view.
   *
   * @param target A target for global event notifications. One of "window", "document", or "body".
   * @param eventName The name of the event to listen for.
   * @param handler A function to call when the notification occurs. Receives the
   * event object as an argument.
   * @returns A callback function that can be used to remove the handler.
   * @deprecated No longer being used in Ivy code. To be removed in version 14.
   */


  addGlobalEventListener(target, eventName, handler) {
    const plugin = this._findPluginFor(eventName);

    return plugin.addGlobalEventListener(target, eventName, handler);
  }
  /**
   * Retrieves the compilation zone in which event listeners are registered.
   */


  getZone() {
    return this._zone;
  }
  /** @internal */


  _findPluginFor(eventName) {
    const plugin = this._eventNameToPlugin.get(eventName);

    if (plugin) {
      return plugin;
    }

    const plugins = this._plugins;

    for (let i = 0; i < plugins.length; i++) {
      const plugin = plugins[i];

      if (plugin.supports(eventName)) {
        this._eventNameToPlugin.set(eventName, plugin);

        return plugin;
      }
    }

    throw new Error(`No event manager plugin found for event ${eventName}`);
  }

}

EventManager.ɵfac = function EventManager_Factory(t) {
  return new (t || EventManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](EVENT_MANAGER_PLUGINS), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
};

EventManager.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: EventManager,
  factory: EventManager.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EventManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [EVENT_MANAGER_PLUGINS]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }];
  }, null);
})();

class EventManagerPlugin {
  constructor(_doc) {
    this._doc = _doc;
  }

  addGlobalEventListener(element, eventName, handler) {
    const target = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"])().getGlobalEventTarget(this._doc, element);

    if (!target) {
      throw new Error(`Unsupported event target ${target} for event ${eventName}`);
    }

    return this.addEventListener(target, eventName, handler);
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class SharedStylesHost {
  constructor() {
    /** @internal */
    this._stylesSet = new Set();
  }

  addStyles(styles) {
    const additions = new Set();
    styles.forEach(style => {
      if (!this._stylesSet.has(style)) {
        this._stylesSet.add(style);

        additions.add(style);
      }
    });
    this.onStylesAdded(additions);
  }

  onStylesAdded(additions) {}

  getAllStyles() {
    return Array.from(this._stylesSet);
  }

}

SharedStylesHost.ɵfac = function SharedStylesHost_Factory(t) {
  return new (t || SharedStylesHost)();
};

SharedStylesHost.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SharedStylesHost,
  factory: SharedStylesHost.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedStylesHost, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();

class DomSharedStylesHost extends SharedStylesHost {
  constructor(_doc) {
    super();
    this._doc = _doc; // Maps all registered host nodes to a list of style nodes that have been added to the host node.

    this._hostNodes = new Map();

    this._hostNodes.set(_doc.head, []);
  }

  _addStylesToHost(styles, host, styleNodes) {
    styles.forEach(style => {
      const styleEl = this._doc.createElement('style');

      styleEl.textContent = style;
      styleNodes.push(host.appendChild(styleEl));
    });
  }

  addHost(hostNode) {
    const styleNodes = [];

    this._addStylesToHost(this._stylesSet, hostNode, styleNodes);

    this._hostNodes.set(hostNode, styleNodes);
  }

  removeHost(hostNode) {
    const styleNodes = this._hostNodes.get(hostNode);

    if (styleNodes) {
      styleNodes.forEach(removeStyle);
    }

    this._hostNodes.delete(hostNode);
  }

  onStylesAdded(additions) {
    this._hostNodes.forEach((styleNodes, hostNode) => {
      this._addStylesToHost(additions, hostNode, styleNodes);
    });
  }

  ngOnDestroy() {
    this._hostNodes.forEach(styleNodes => styleNodes.forEach(removeStyle));
  }

}

DomSharedStylesHost.ɵfac = function DomSharedStylesHost_Factory(t) {
  return new (t || DomSharedStylesHost)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
};

DomSharedStylesHost.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: DomSharedStylesHost,
  factory: DomSharedStylesHost.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DomSharedStylesHost, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
      }]
    }];
  }, null);
})();

function removeStyle(styleNode) {
  (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"])().remove(styleNode);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const NAMESPACE_URIS = {
  'svg': 'http://www.w3.org/2000/svg',
  'xhtml': 'http://www.w3.org/1999/xhtml',
  'xlink': 'http://www.w3.org/1999/xlink',
  'xml': 'http://www.w3.org/XML/1998/namespace',
  'xmlns': 'http://www.w3.org/2000/xmlns/',
  'math': 'http://www.w3.org/1998/MathML/'
};
const COMPONENT_REGEX = /%COMP%/g;
const NG_DEV_MODE = typeof ngDevMode === 'undefined' || !!ngDevMode;
const COMPONENT_VARIABLE = '%COMP%';
const HOST_ATTR = `_nghost-${COMPONENT_VARIABLE}`;
const CONTENT_ATTR = `_ngcontent-${COMPONENT_VARIABLE}`;

function shimContentAttribute(componentShortId) {
  return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
}

function shimHostAttribute(componentShortId) {
  return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
}

function flattenStyles(compId, styles, target) {
  for (let i = 0; i < styles.length; i++) {
    let style = styles[i];

    if (Array.isArray(style)) {
      flattenStyles(compId, style, target);
    } else {
      style = style.replace(COMPONENT_REGEX, compId);
      target.push(style);
    }
  }

  return target;
}

function decoratePreventDefault(eventHandler) {
  // `DebugNode.triggerEventHandler` needs to know if the listener was created with
  // decoratePreventDefault or is a listener added outside the Angular context so it can handle the
  // two differently. In the first case, the special '__ngUnwrap__' token is passed to the unwrap
  // the listener (see below).
  return event => {
    // Ivy uses '__ngUnwrap__' as a special token that allows us to unwrap the function
    // so that it can be invoked programmatically by `DebugNode.triggerEventHandler`. The debug_node
    // can inspect the listener toString contents for the existence of this special token. Because
    // the token is a string literal, it is ensured to not be modified by compiled code.
    if (event === '__ngUnwrap__') {
      return eventHandler;
    }

    const allowDefaultBehavior = eventHandler(event);

    if (allowDefaultBehavior === false) {
      // TODO(tbosch): move preventDefault into event plugins...
      event.preventDefault();
      event.returnValue = false;
    }

    return undefined;
  };
}

let hasLoggedNativeEncapsulationWarning = false;

class DomRendererFactory2 {
  constructor(eventManager, sharedStylesHost, appId) {
    this.eventManager = eventManager;
    this.sharedStylesHost = sharedStylesHost;
    this.appId = appId;
    this.rendererByCompId = new Map();
    this.defaultRenderer = new DefaultDomRenderer2(eventManager);
  }

  createRenderer(element, type) {
    if (!element || !type) {
      return this.defaultRenderer;
    }

    switch (type.encapsulation) {
      case _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.Emulated:
        {
          let renderer = this.rendererByCompId.get(type.id);

          if (!renderer) {
            renderer = new EmulatedEncapsulationDomRenderer2(this.eventManager, this.sharedStylesHost, type, this.appId);
            this.rendererByCompId.set(type.id, renderer);
          }

          renderer.applyToHost(element);
          return renderer;
        }
      // @ts-ignore TODO: Remove as part of FW-2290. TS complains about us dealing with an enum
      // value that is not known (but previously was the value for ViewEncapsulation.Native)

      case 1:
      case _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.ShadowDom:
        // TODO(FW-2290): remove the `case 1:` fallback logic and the warning in v12.
        if ((typeof ngDevMode === 'undefined' || ngDevMode) && // @ts-ignore TODO: Remove as part of FW-2290. TS complains about us dealing with an
        // enum value that is not known (but previously was the value for
        // ViewEncapsulation.Native)
        !hasLoggedNativeEncapsulationWarning && type.encapsulation === 1) {
          hasLoggedNativeEncapsulationWarning = true;
          console.warn('ViewEncapsulation.Native is no longer supported. Falling back to ViewEncapsulation.ShadowDom. The fallback will be removed in v12.');
        }

        return new ShadowDomRenderer(this.eventManager, this.sharedStylesHost, element, type);

      default:
        {
          if (!this.rendererByCompId.has(type.id)) {
            const styles = flattenStyles(type.id, type.styles, []);
            this.sharedStylesHost.addStyles(styles);
            this.rendererByCompId.set(type.id, this.defaultRenderer);
          }

          return this.defaultRenderer;
        }
    }
  }

  begin() {}

  end() {}

}

DomRendererFactory2.ɵfac = function DomRendererFactory2_Factory(t) {
  return new (t || DomRendererFactory2)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](EventManager), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DomSharedStylesHost), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_ID));
};

DomRendererFactory2.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: DomRendererFactory2,
  factory: DomRendererFactory2.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DomRendererFactory2, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: EventManager
    }, {
      type: DomSharedStylesHost
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_ID]
      }]
    }];
  }, null);
})();

class DefaultDomRenderer2 {
  constructor(eventManager) {
    this.eventManager = eventManager;
    this.data = Object.create(null);
    this.destroyNode = null;
  }

  destroy() {}

  createElement(name, namespace) {
    if (namespace) {
      // TODO: `|| namespace` was added in
      // https://github.com/angular/angular/commit/2b9cc8503d48173492c29f5a271b61126104fbdb to
      // support how Ivy passed around the namespace URI rather than short name at the time. It did
      // not, however extend the support to other parts of the system (setAttribute, setAttribute,
      // and the ServerRenderer). We should decide what exactly the semantics for dealing with
      // namespaces should be and make it consistent.
      // Related issues:
      // https://github.com/angular/angular/issues/44028
      // https://github.com/angular/angular/issues/44883
      return document.createElementNS(NAMESPACE_URIS[namespace] || namespace, name);
    }

    return document.createElement(name);
  }

  createComment(value) {
    return document.createComment(value);
  }

  createText(value) {
    return document.createTextNode(value);
  }

  appendChild(parent, newChild) {
    parent.appendChild(newChild);
  }

  insertBefore(parent, newChild, refChild) {
    if (parent) {
      parent.insertBefore(newChild, refChild);
    }
  }

  removeChild(parent, oldChild) {
    if (parent) {
      parent.removeChild(oldChild);
    }
  }

  selectRootElement(selectorOrNode, preserveContent) {
    let el = typeof selectorOrNode === 'string' ? document.querySelector(selectorOrNode) : selectorOrNode;

    if (!el) {
      throw new Error(`The selector "${selectorOrNode}" did not match any elements`);
    }

    if (!preserveContent) {
      el.textContent = '';
    }

    return el;
  }

  parentNode(node) {
    return node.parentNode;
  }

  nextSibling(node) {
    return node.nextSibling;
  }

  setAttribute(el, name, value, namespace) {
    if (namespace) {
      name = namespace + ':' + name;
      const namespaceUri = NAMESPACE_URIS[namespace];

      if (namespaceUri) {
        el.setAttributeNS(namespaceUri, name, value);
      } else {
        el.setAttribute(name, value);
      }
    } else {
      el.setAttribute(name, value);
    }
  }

  removeAttribute(el, name, namespace) {
    if (namespace) {
      const namespaceUri = NAMESPACE_URIS[namespace];

      if (namespaceUri) {
        el.removeAttributeNS(namespaceUri, name);
      } else {
        el.removeAttribute(`${namespace}:${name}`);
      }
    } else {
      el.removeAttribute(name);
    }
  }

  addClass(el, name) {
    el.classList.add(name);
  }

  removeClass(el, name) {
    el.classList.remove(name);
  }

  setStyle(el, style, value, flags) {
    if (flags & (_angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererStyleFlags2.DashCase | _angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererStyleFlags2.Important)) {
      el.style.setProperty(style, value, flags & _angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererStyleFlags2.Important ? 'important' : '');
    } else {
      el.style[style] = value;
    }
  }

  removeStyle(el, style, flags) {
    if (flags & _angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererStyleFlags2.DashCase) {
      el.style.removeProperty(style);
    } else {
      // IE requires '' instead of null
      // see https://github.com/angular/angular/issues/7916
      el.style[style] = '';
    }
  }

  setProperty(el, name, value) {
    NG_DEV_MODE && checkNoSyntheticProp(name, 'property');
    el[name] = value;
  }

  setValue(node, value) {
    node.nodeValue = value;
  }

  listen(target, event, callback) {
    NG_DEV_MODE && checkNoSyntheticProp(event, 'listener');

    if (typeof target === 'string') {
      return this.eventManager.addGlobalEventListener(target, event, decoratePreventDefault(callback));
    }

    return this.eventManager.addEventListener(target, event, decoratePreventDefault(callback));
  }

}

const AT_CHARCODE = (() => '@'.charCodeAt(0))();

function checkNoSyntheticProp(name, nameKind) {
  if (name.charCodeAt(0) === AT_CHARCODE) {
    throw new Error(`Unexpected synthetic ${nameKind} ${name} found. Please make sure that:
  - Either \`BrowserAnimationsModule\` or \`NoopAnimationsModule\` are imported in your application.
  - There is corresponding configuration for the animation named \`${name}\` defined in the \`animations\` field of the \`@Component\` decorator (see https://angular.io/api/core/Component#animations).`);
  }
}

class EmulatedEncapsulationDomRenderer2 extends DefaultDomRenderer2 {
  constructor(eventManager, sharedStylesHost, component, appId) {
    super(eventManager);
    this.component = component;
    const styles = flattenStyles(appId + '-' + component.id, component.styles, []);
    sharedStylesHost.addStyles(styles);
    this.contentAttr = shimContentAttribute(appId + '-' + component.id);
    this.hostAttr = shimHostAttribute(appId + '-' + component.id);
  }

  applyToHost(element) {
    super.setAttribute(element, this.hostAttr, '');
  }

  createElement(parent, name) {
    const el = super.createElement(parent, name);
    super.setAttribute(el, this.contentAttr, '');
    return el;
  }

}

class ShadowDomRenderer extends DefaultDomRenderer2 {
  constructor(eventManager, sharedStylesHost, hostEl, component) {
    super(eventManager);
    this.sharedStylesHost = sharedStylesHost;
    this.hostEl = hostEl;
    this.shadowRoot = hostEl.attachShadow({
      mode: 'open'
    });
    this.sharedStylesHost.addHost(this.shadowRoot);
    const styles = flattenStyles(component.id, component.styles, []);

    for (let i = 0; i < styles.length; i++) {
      const styleEl = document.createElement('style');
      styleEl.textContent = styles[i];
      this.shadowRoot.appendChild(styleEl);
    }
  }

  nodeOrShadowRoot(node) {
    return node === this.hostEl ? this.shadowRoot : node;
  }

  destroy() {
    this.sharedStylesHost.removeHost(this.shadowRoot);
  }

  appendChild(parent, newChild) {
    return super.appendChild(this.nodeOrShadowRoot(parent), newChild);
  }

  insertBefore(parent, newChild, refChild) {
    return super.insertBefore(this.nodeOrShadowRoot(parent), newChild, refChild);
  }

  removeChild(parent, oldChild) {
    return super.removeChild(this.nodeOrShadowRoot(parent), oldChild);
  }

  parentNode(node) {
    return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(node)));
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class DomEventsPlugin extends EventManagerPlugin {
  constructor(doc) {
    super(doc);
  } // This plugin should come last in the list of plugins, because it accepts all
  // events.


  supports(eventName) {
    return true;
  }

  addEventListener(element, eventName, handler) {
    element.addEventListener(eventName, handler, false);
    return () => this.removeEventListener(element, eventName, handler);
  }

  removeEventListener(target, eventName, callback) {
    return target.removeEventListener(eventName, callback);
  }

}

DomEventsPlugin.ɵfac = function DomEventsPlugin_Factory(t) {
  return new (t || DomEventsPlugin)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
};

DomEventsPlugin.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: DomEventsPlugin,
  factory: DomEventsPlugin.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DomEventsPlugin, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Defines supported modifiers for key events.
 */


const MODIFIER_KEYS = ['alt', 'control', 'meta', 'shift'];
const DOM_KEY_LOCATION_NUMPAD = 3; // Map to convert some key or keyIdentifier values to what will be returned by getEventKey

const _keyMap = {
  // The following values are here for cross-browser compatibility and to match the W3C standard
  // cf https://www.w3.org/TR/DOM-Level-3-Events-key/
  '\b': 'Backspace',
  '\t': 'Tab',
  '\x7F': 'Delete',
  '\x1B': 'Escape',
  'Del': 'Delete',
  'Esc': 'Escape',
  'Left': 'ArrowLeft',
  'Right': 'ArrowRight',
  'Up': 'ArrowUp',
  'Down': 'ArrowDown',
  'Menu': 'ContextMenu',
  'Scroll': 'ScrollLock',
  'Win': 'OS'
}; // There is a bug in Chrome for numeric keypad keys:
// https://code.google.com/p/chromium/issues/detail?id=155654
// 1, 2, 3 ... are reported as A, B, C ...

const _chromeNumKeyPadMap = {
  'A': '1',
  'B': '2',
  'C': '3',
  'D': '4',
  'E': '5',
  'F': '6',
  'G': '7',
  'H': '8',
  'I': '9',
  'J': '*',
  'K': '+',
  'M': '-',
  'N': '.',
  'O': '/',
  '\x60': '0',
  '\x90': 'NumLock'
};
/**
 * Retrieves modifiers from key-event objects.
 */

const MODIFIER_KEY_GETTERS = {
  'alt': event => event.altKey,
  'control': event => event.ctrlKey,
  'meta': event => event.metaKey,
  'shift': event => event.shiftKey
};
/**
 * @publicApi
 * A browser plug-in that provides support for handling of key events in Angular.
 */

class KeyEventsPlugin extends EventManagerPlugin {
  /**
   * Initializes an instance of the browser plug-in.
   * @param doc The document in which key events will be detected.
   */
  constructor(doc) {
    super(doc);
  }
  /**
   * Reports whether a named key event is supported.
   * @param eventName The event name to query.
   * @return True if the named key event is supported.
   */


  supports(eventName) {
    return KeyEventsPlugin.parseEventName(eventName) != null;
  }
  /**
   * Registers a handler for a specific element and key event.
   * @param element The HTML element to receive event notifications.
   * @param eventName The name of the key event to listen for.
   * @param handler A function to call when the notification occurs. Receives the
   * event object as an argument.
   * @returns The key event that was registered.
   */


  addEventListener(element, eventName, handler) {
    const parsedEvent = KeyEventsPlugin.parseEventName(eventName);
    const outsideHandler = KeyEventsPlugin.eventCallback(parsedEvent['fullKey'], handler, this.manager.getZone());
    return this.manager.getZone().runOutsideAngular(() => {
      return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"])().onAndCancel(element, parsedEvent['domEventName'], outsideHandler);
    });
  }

  static parseEventName(eventName) {
    const parts = eventName.toLowerCase().split('.');
    const domEventName = parts.shift();

    if (parts.length === 0 || !(domEventName === 'keydown' || domEventName === 'keyup')) {
      return null;
    }

    const key = KeyEventsPlugin._normalizeKey(parts.pop());

    let fullKey = '';
    MODIFIER_KEYS.forEach(modifierName => {
      const index = parts.indexOf(modifierName);

      if (index > -1) {
        parts.splice(index, 1);
        fullKey += modifierName + '.';
      }
    });
    fullKey += key;

    if (parts.length != 0 || key.length === 0) {
      // returning null instead of throwing to let another plugin process the event
      return null;
    } // NOTE: Please don't rewrite this as so, as it will break JSCompiler property renaming.
    //       The code must remain in the `result['domEventName']` form.
    // return {domEventName, fullKey};


    const result = {};
    result['domEventName'] = domEventName;
    result['fullKey'] = fullKey;
    return result;
  }

  static getEventFullKey(event) {
    let fullKey = '';
    let key = getEventKey(event);
    key = key.toLowerCase();

    if (key === ' ') {
      key = 'space'; // for readability
    } else if (key === '.') {
      key = 'dot'; // because '.' is used as a separator in event names
    }

    MODIFIER_KEYS.forEach(modifierName => {
      if (modifierName != key) {
        const modifierGetter = MODIFIER_KEY_GETTERS[modifierName];

        if (modifierGetter(event)) {
          fullKey += modifierName + '.';
        }
      }
    });
    fullKey += key;
    return fullKey;
  }
  /**
   * Configures a handler callback for a key event.
   * @param fullKey The event name that combines all simultaneous keystrokes.
   * @param handler The function that responds to the key event.
   * @param zone The zone in which the event occurred.
   * @returns A callback function.
   */


  static eventCallback(fullKey, handler, zone) {
    return (event
    /** TODO #9100 */
    ) => {
      if (KeyEventsPlugin.getEventFullKey(event) === fullKey) {
        zone.runGuarded(() => handler(event));
      }
    };
  }
  /** @internal */


  static _normalizeKey(keyName) {
    // TODO: switch to a Map if the mapping grows too much
    switch (keyName) {
      case 'esc':
        return 'escape';

      default:
        return keyName;
    }
  }

}

KeyEventsPlugin.ɵfac = function KeyEventsPlugin_Factory(t) {
  return new (t || KeyEventsPlugin)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
};

KeyEventsPlugin.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: KeyEventsPlugin,
  factory: KeyEventsPlugin.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KeyEventsPlugin, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
      }]
    }];
  }, null);
})();

function getEventKey(event) {
  let key = event.key;

  if (key == null) {
    key = event.keyIdentifier; // keyIdentifier is defined in the old draft of DOM Level 3 Events implemented by Chrome and
    // Safari cf
    // https://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/events.html#Events-KeyboardEvents-Interfaces

    if (key == null) {
      return 'Unidentified';
    }

    if (key.startsWith('U+')) {
      key = String.fromCharCode(parseInt(key.substring(2), 16));

      if (event.location === DOM_KEY_LOCATION_NUMPAD && _chromeNumKeyPadMap.hasOwnProperty(key)) {
        // There is a bug in Chrome for numeric keypad keys:
        // https://code.google.com/p/chromium/issues/detail?id=155654
        // 1, 2, 3 ... are reported as A, B, C ...
        key = _chromeNumKeyPadMap[key];
      }
    }
  }

  return _keyMap[key] || key;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function initDomAdapter() {
  BrowserDomAdapter.makeCurrent();
  BrowserGetTestability.init();
}

function errorHandler() {
  return new _angular_core__WEBPACK_IMPORTED_MODULE_1__.ErrorHandler();
}

function _document() {
  // Tell ivy about the global document
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetDocument"])(document);
  return document;
}

const INTERNAL_BROWSER_PLATFORM_PROVIDERS = [{
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID,
  useValue: _angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵPLATFORM_BROWSER_ID"]
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_INITIALIZER,
  useValue: initDomAdapter,
  multi: true
}, {
  provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT,
  useFactory: _document,
  deps: []
}];
/**
 * A factory function that returns a `PlatformRef` instance associated with browser service
 * providers.
 *
 * @publicApi
 */

const platformBrowser = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.createPlatformFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.platformCore, 'browser', INTERNAL_BROWSER_PLATFORM_PROVIDERS);
const BROWSER_MODULE_PROVIDERS = [{
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵINJECTOR_SCOPE"],
  useValue: 'root'
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ErrorHandler,
  useFactory: errorHandler,
  deps: []
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: DomEventsPlugin,
  multi: true,
  deps: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: KeyEventsPlugin,
  multi: true,
  deps: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
}, {
  provide: DomRendererFactory2,
  useClass: DomRendererFactory2,
  deps: [EventManager, DomSharedStylesHost, _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_ID]
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory2,
  useExisting: DomRendererFactory2
}, {
  provide: SharedStylesHost,
  useExisting: DomSharedStylesHost
}, {
  provide: DomSharedStylesHost,
  useClass: DomSharedStylesHost,
  deps: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Testability,
  useClass: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Testability,
  deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone]
}, {
  provide: EventManager,
  useClass: EventManager,
  deps: [EVENT_MANAGER_PLUGINS, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone]
}, {
  provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__.XhrFactory,
  useClass: BrowserXhr,
  deps: []
}];
/**
 * Exports required infrastructure for all Angular apps.
 * Included by default in all Angular apps created with the CLI
 * `new` command.
 * Re-exports `CommonModule` and `ApplicationModule`, making their
 * exports and providers available to all apps.
 *
 * @publicApi
 */

class BrowserModule {
  constructor(parentModule) {
    if (parentModule) {
      throw new Error(`BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.`);
    }
  }
  /**
   * Configures a browser-based app to transition from a server-rendered app, if
   * one is present on the page.
   *
   * @param params An object containing an identifier for the app to transition.
   * The ID must match between the client and server versions of the app.
   * @returns The reconfigured `BrowserModule` to import into the app's root `AppModule`.
   */


  static withServerTransition(params) {
    return {
      ngModule: BrowserModule,
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_ID,
        useValue: params.appId
      }, {
        provide: TRANSITION_ID,
        useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_ID
      }, SERVER_TRANSITION_PROVIDERS]
    };
  }

}

BrowserModule.ɵfac = function BrowserModule_Factory(t) {
  return new (t || BrowserModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](BrowserModule, 12));
};

BrowserModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: BrowserModule
});
BrowserModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: BROWSER_MODULE_PROVIDERS,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrowserModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      providers: BROWSER_MODULE_PROVIDERS,
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationModule]
    }]
  }], function () {
    return [{
      type: BrowserModule,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [BrowserModule]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Factory to create a `Meta` service instance for the current DOM document.
 */


function createMeta() {
  return new Meta((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
}
/**
 * A service for managing HTML `<meta>` tags.
 *
 * Properties of the `MetaDefinition` object match the attributes of the
 * HTML `<meta>` tag. These tags define document metadata that is important for
 * things like configuring a Content Security Policy, defining browser compatibility
 * and security settings, setting HTTP Headers, defining rich content for social sharing,
 * and Search Engine Optimization (SEO).
 *
 * To identify specific `<meta>` tags in a document, use an attribute selection
 * string in the format `"tag_attribute='value string'"`.
 * For example, an `attrSelector` value of `"name='description'"` matches a tag
 * whose `name` attribute has the value `"description"`.
 * Selectors are used with the `querySelector()` Document method,
 * in the format `meta[{attrSelector}]`.
 *
 * @see [HTML meta tag](https://developer.mozilla.org/docs/Web/HTML/Element/meta)
 * @see [Document.querySelector()](https://developer.mozilla.org/docs/Web/API/Document/querySelector)
 *
 *
 * @publicApi
 */


class Meta {
  constructor(_doc) {
    this._doc = _doc;
    this._dom = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"])();
  }
  /**
   * Retrieves or creates a specific `<meta>` tag element in the current HTML document.
   * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
   * values in the provided tag definition, and verifies that all other attribute values are equal.
   * If an existing element is found, it is returned and is not modified in any way.
   * @param tag The definition of a `<meta>` element to match or create.
   * @param forceCreation True to create a new element without checking whether one already exists.
   * @returns The existing element with the same attributes and values if found,
   * the new element if no match is found, or `null` if the tag parameter is not defined.
   */


  addTag(tag, forceCreation = false) {
    if (!tag) return null;
    return this._getOrCreateElement(tag, forceCreation);
  }
  /**
   * Retrieves or creates a set of `<meta>` tag elements in the current HTML document.
   * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
   * values in the provided tag definition, and verifies that all other attribute values are equal.
   * @param tags An array of tag definitions to match or create.
   * @param forceCreation True to create new elements without checking whether they already exist.
   * @returns The matching elements if found, or the new elements.
   */


  addTags(tags, forceCreation = false) {
    if (!tags) return [];
    return tags.reduce((result, tag) => {
      if (tag) {
        result.push(this._getOrCreateElement(tag, forceCreation));
      }

      return result;
    }, []);
  }
  /**
   * Retrieves a `<meta>` tag element in the current HTML document.
   * @param attrSelector The tag attribute and value to match against, in the format
   * `"tag_attribute='value string'"`.
   * @returns The matching element, if any.
   */


  getTag(attrSelector) {
    if (!attrSelector) return null;
    return this._doc.querySelector(`meta[${attrSelector}]`) || null;
  }
  /**
   * Retrieves a set of `<meta>` tag elements in the current HTML document.
   * @param attrSelector The tag attribute and value to match against, in the format
   * `"tag_attribute='value string'"`.
   * @returns The matching elements, if any.
   */


  getTags(attrSelector) {
    if (!attrSelector) return [];

    const list
    /*NodeList*/
    = this._doc.querySelectorAll(`meta[${attrSelector}]`);

    return list ? [].slice.call(list) : [];
  }
  /**
   * Modifies an existing `<meta>` tag element in the current HTML document.
   * @param tag The tag description with which to replace the existing tag content.
   * @param selector A tag attribute and value to match against, to identify
   * an existing tag. A string in the format `"tag_attribute=`value string`"`.
   * If not supplied, matches a tag with the same `name` or `property` attribute value as the
   * replacement tag.
   * @return The modified element.
   */


  updateTag(tag, selector) {
    if (!tag) return null;
    selector = selector || this._parseSelector(tag);
    const meta = this.getTag(selector);

    if (meta) {
      return this._setMetaElementAttributes(tag, meta);
    }

    return this._getOrCreateElement(tag, true);
  }
  /**
   * Removes an existing `<meta>` tag element from the current HTML document.
   * @param attrSelector A tag attribute and value to match against, to identify
   * an existing tag. A string in the format `"tag_attribute=`value string`"`.
   */


  removeTag(attrSelector) {
    this.removeTagElement(this.getTag(attrSelector));
  }
  /**
   * Removes an existing `<meta>` tag element from the current HTML document.
   * @param meta The tag definition to match against to identify an existing tag.
   */


  removeTagElement(meta) {
    if (meta) {
      this._dom.remove(meta);
    }
  }

  _getOrCreateElement(meta, forceCreation = false) {
    if (!forceCreation) {
      const selector = this._parseSelector(meta); // It's allowed to have multiple elements with the same name so it's not enough to
      // just check that element with the same name already present on the page. We also need to
      // check if element has tag attributes


      const elem = this.getTags(selector).filter(elem => this._containsAttributes(meta, elem))[0];
      if (elem !== undefined) return elem;
    }

    const element = this._dom.createElement('meta');

    this._setMetaElementAttributes(meta, element);

    const head = this._doc.getElementsByTagName('head')[0];

    head.appendChild(element);
    return element;
  }

  _setMetaElementAttributes(tag, el) {
    Object.keys(tag).forEach(prop => el.setAttribute(this._getMetaKeyMap(prop), tag[prop]));
    return el;
  }

  _parseSelector(tag) {
    const attr = tag.name ? 'name' : 'property';
    return `${attr}="${tag[attr]}"`;
  }

  _containsAttributes(tag, elem) {
    return Object.keys(tag).every(key => elem.getAttribute(this._getMetaKeyMap(key)) === tag[key]);
  }

  _getMetaKeyMap(prop) {
    return META_KEYS_MAP[prop] || prop;
  }

}

Meta.ɵfac = function Meta_Factory(t) {
  return new (t || Meta)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
};

Meta.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: Meta,
  factory: function Meta_Factory(t) {
    let r = null;

    if (t) {
      r = new t();
    } else {
      r = createMeta();
    }

    return r;
  },
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Meta, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: createMeta,
      deps: []
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * Mapping for MetaDefinition properties with their correct meta attribute names
 */


const META_KEYS_MAP = {
  httpEquiv: 'http-equiv'
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Factory to create Title service.
 */

function createTitle() {
  return new Title((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
}
/**
 * A service that can be used to get and set the title of a current HTML document.
 *
 * Since an Angular application can't be bootstrapped on the entire HTML document (`<html>` tag)
 * it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
 * (representing the `<title>` tag). Instead, this service can be used to set and get the current
 * title value.
 *
 * @publicApi
 */


class Title {
  constructor(_doc) {
    this._doc = _doc;
  }
  /**
   * Get the title of the current HTML document.
   */


  getTitle() {
    return this._doc.title;
  }
  /**
   * Set the title of the current HTML document.
   * @param newTitle
   */


  setTitle(newTitle) {
    this._doc.title = newTitle || '';
  }

}

Title.ɵfac = function Title_Factory(t) {
  return new (t || Title)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
};

Title.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: Title,
  factory: function Title_Factory(t) {
    let r = null;

    if (t) {
      r = new t();
    } else {
      r = createTitle();
    }

    return r;
  },
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Title, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: createTitle,
      deps: []
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const CAMEL_CASE_REGEXP = /([A-Z])/g;
const DASH_CASE_REGEXP = /-([a-z])/g;

function camelCaseToDashCase(input) {
  return input.replace(CAMEL_CASE_REGEXP, (...m) => '-' + m[1].toLowerCase());
}

function dashCaseToCamelCase(input) {
  return input.replace(DASH_CASE_REGEXP, (...m) => m[1].toUpperCase());
}
/**
 * Exports the value under a given `name` in the global property `ng`. For example `ng.probe` if
 * `name` is `'probe'`.
 * @param name Name under which it will be exported. Keep in mind this will be a property of the
 * global `ng` object.
 * @param value The value to export.
 */


function exportNgVar(name, value) {
  if (typeof COMPILED === 'undefined' || !COMPILED) {
    // Note: we can't export `ng` when using closure enhanced optimization as:
    // - closure declares globals itself for minified names, which sometimes clobber our `ng` global
    // - we can't declare a closure extern as the namespace `ng` is already used within Google
    //   for typings for angularJS (via `goog.provide('ng....')`).
    const ng = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].ng = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵglobal"].ng || {};
    ng[name] = value;
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const win = typeof window !== 'undefined' && window || {};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

class ChangeDetectionPerfRecord {
  constructor(msPerTick, numTicks) {
    this.msPerTick = msPerTick;
    this.numTicks = numTicks;
  }

}
/**
 * Entry point for all Angular profiling-related debug tools. This object
 * corresponds to the `ng.profiler` in the dev console.
 */


class AngularProfiler {
  constructor(ref) {
    this.appRef = ref.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationRef);
  } // tslint:disable:no-console

  /**
   * Exercises change detection in a loop and then prints the average amount of
   * time in milliseconds how long a single round of change detection takes for
   * the current state of the UI. It runs a minimum of 5 rounds for a minimum
   * of 500 milliseconds.
   *
   * Optionally, a user may pass a `config` parameter containing a map of
   * options. Supported options are:
   *
   * `record` (boolean) - causes the profiler to record a CPU profile while
   * it exercises the change detector. Example:
   *
   * ```
   * ng.profiler.timeChangeDetection({record: true})
   * ```
   */


  timeChangeDetection(config) {
    const record = config && config['record'];
    const profileName = 'Change Detection'; // Profiler is not available in Android browsers without dev tools opened

    const isProfilerAvailable = win.console.profile != null;

    if (record && isProfilerAvailable) {
      win.console.profile(profileName);
    }

    const start = performanceNow();
    let numTicks = 0;

    while (numTicks < 5 || performanceNow() - start < 500) {
      this.appRef.tick();
      numTicks++;
    }

    const end = performanceNow();

    if (record && isProfilerAvailable) {
      win.console.profileEnd(profileName);
    }

    const msPerTick = (end - start) / numTicks;
    win.console.log(`ran ${numTicks} change detection cycles`);
    win.console.log(`${msPerTick.toFixed(2)} ms per check`);
    return new ChangeDetectionPerfRecord(msPerTick, numTicks);
  }

}

function performanceNow() {
  return win.performance && win.performance.now ? win.performance.now() : new Date().getTime();
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const PROFILER_GLOBAL_NAME = 'profiler';
/**
 * Enabled Angular debug tools that are accessible via your browser's
 * developer console.
 *
 * Usage:
 *
 * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
 * 1. Type `ng.` (usually the console will show auto-complete suggestion)
 * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
 *    then hit Enter.
 *
 * @publicApi
 */

function enableDebugTools(ref) {
  exportNgVar(PROFILER_GLOBAL_NAME, new AngularProfiler(ref));
  return ref;
}
/**
 * Disables Angular tools.
 *
 * @publicApi
 */


function disableDebugTools() {
  exportNgVar(PROFILER_GLOBAL_NAME, null);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function escapeHtml(text) {
  const escapedText = {
    '&': '&a;',
    '"': '&q;',
    '\'': '&s;',
    '<': '&l;',
    '>': '&g;'
  };
  return text.replace(/[&"'<>]/g, s => escapedText[s]);
}

function unescapeHtml(text) {
  const unescapedText = {
    '&a;': '&',
    '&q;': '"',
    '&s;': '\'',
    '&l;': '<',
    '&g;': '>'
  };
  return text.replace(/&[^;]+;/g, s => unescapedText[s]);
}
/**
 * Create a `StateKey<T>` that can be used to store value of type T with `TransferState`.
 *
 * Example:
 *
 * ```
 * const COUNTER_KEY = makeStateKey<number>('counter');
 * let value = 10;
 *
 * transferState.set(COUNTER_KEY, value);
 * ```
 *
 * @publicApi
 */


function makeStateKey(key) {
  return key;
}
/**
 * A key value store that is transferred from the application on the server side to the application
 * on the client side.
 *
 * `TransferState` will be available as an injectable token. To use it import
 * `ServerTransferStateModule` on the server and `BrowserTransferStateModule` on the client.
 *
 * The values in the store are serialized/deserialized using JSON.stringify/JSON.parse. So only
 * boolean, number, string, null and non-class objects will be serialized and deserialized in a
 * non-lossy manner.
 *
 * @publicApi
 */


class TransferState {
  constructor() {
    this.store = {};
    this.onSerializeCallbacks = {};
  }
  /** @internal */


  static init(initState) {
    const transferState = new TransferState();
    transferState.store = initState;
    return transferState;
  }
  /**
   * Get the value corresponding to a key. Return `defaultValue` if key is not found.
   */


  get(key, defaultValue) {
    return this.store[key] !== undefined ? this.store[key] : defaultValue;
  }
  /**
   * Set the value corresponding to a key.
   */


  set(key, value) {
    this.store[key] = value;
  }
  /**
   * Remove a key from the store.
   */


  remove(key) {
    delete this.store[key];
  }
  /**
   * Test whether a key exists in the store.
   */


  hasKey(key) {
    return this.store.hasOwnProperty(key);
  }
  /**
   * Register a callback to provide the value for a key when `toJson` is called.
   */


  onSerialize(key, callback) {
    this.onSerializeCallbacks[key] = callback;
  }
  /**
   * Serialize the current state of the store to JSON.
   */


  toJson() {
    // Call the onSerialize callbacks and put those values into the store.
    for (const key in this.onSerializeCallbacks) {
      if (this.onSerializeCallbacks.hasOwnProperty(key)) {
        try {
          this.store[key] = this.onSerializeCallbacks[key]();
        } catch (e) {
          console.warn('Exception in onSerialize callback: ', e);
        }
      }
    }

    return JSON.stringify(this.store);
  }

}

TransferState.ɵfac = function TransferState_Factory(t) {
  return new (t || TransferState)();
};

TransferState.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TransferState,
  factory: TransferState.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TransferState, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();

function initTransferState(doc, appId) {
  // Locate the script tag with the JSON data transferred from the server.
  // The id of the script tag is set to the Angular appId + 'state'.
  const script = doc.getElementById(appId + '-state');
  let initialState = {};

  if (script && script.textContent) {
    try {
      // Avoid using any here as it triggers lint errors in google3 (any is not allowed).
      initialState = JSON.parse(unescapeHtml(script.textContent));
    } catch (e) {
      console.warn('Exception while restoring TransferState for app ' + appId, e);
    }
  }

  return TransferState.init(initialState);
}
/**
 * NgModule to install on the client side while using the `TransferState` to transfer state from
 * server to client.
 *
 * @publicApi
 */


class BrowserTransferStateModule {}

BrowserTransferStateModule.ɵfac = function BrowserTransferStateModule_Factory(t) {
  return new (t || BrowserTransferStateModule)();
};

BrowserTransferStateModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: BrowserTransferStateModule
});
BrowserTransferStateModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [{
    provide: TransferState,
    useFactory: initTransferState,
    deps: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT, _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_ID]
  }]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrowserTransferStateModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      providers: [{
        provide: TransferState,
        useFactory: initTransferState,
        deps: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT, _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_ID]
      }]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Predicates for use with {@link DebugElement}'s query functions.
 *
 * @publicApi
 */


class By {
  /**
   * Match all nodes.
   *
   * @usageNotes
   * ### Example
   *
   * {@example platform-browser/dom/debug/ts/by/by.ts region='by_all'}
   */
  static all() {
    return () => true;
  }
  /**
   * Match elements by the given CSS selector.
   *
   * @usageNotes
   * ### Example
   *
   * {@example platform-browser/dom/debug/ts/by/by.ts region='by_css'}
   */


  static css(selector) {
    return debugElement => {
      return debugElement.nativeElement != null ? elementMatches(debugElement.nativeElement, selector) : false;
    };
  }
  /**
   * Match nodes that have the given directive present.
   *
   * @usageNotes
   * ### Example
   *
   * {@example platform-browser/dom/debug/ts/by/by.ts region='by_directive'}
   */


  static directive(type) {
    return debugNode => debugNode.providerTokens.indexOf(type) !== -1;
  }

}

function elementMatches(n, selector) {
  if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵgetDOM"])().isElementNode(n)) {
    return n.matches && n.matches(selector) || n.msMatchesSelector && n.msMatchesSelector(selector) || n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
  }

  return false;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Supported HammerJS recognizer event names.
 */


const EVENT_NAMES = {
  // pan
  'pan': true,
  'panstart': true,
  'panmove': true,
  'panend': true,
  'pancancel': true,
  'panleft': true,
  'panright': true,
  'panup': true,
  'pandown': true,
  // pinch
  'pinch': true,
  'pinchstart': true,
  'pinchmove': true,
  'pinchend': true,
  'pinchcancel': true,
  'pinchin': true,
  'pinchout': true,
  // press
  'press': true,
  'pressup': true,
  // rotate
  'rotate': true,
  'rotatestart': true,
  'rotatemove': true,
  'rotateend': true,
  'rotatecancel': true,
  // swipe
  'swipe': true,
  'swipeleft': true,
  'swiperight': true,
  'swipeup': true,
  'swipedown': true,
  // tap
  'tap': true,
  'doubletap': true
};
/**
 * DI token for providing [HammerJS](https://hammerjs.github.io/) support to Angular.
 * @see `HammerGestureConfig`
 *
 * @ngModule HammerModule
 * @publicApi
 */

const HAMMER_GESTURE_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('HammerGestureConfig');
/**
 * Injection token used to provide a {@link HammerLoader} to Angular.
 *
 * @publicApi
 */

const HAMMER_LOADER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('HammerLoader');
/**
 * An injectable [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
 * for gesture recognition. Configures specific event recognition.
 * @publicApi
 */

class HammerGestureConfig {
  constructor() {
    /**
     * A set of supported event names for gestures to be used in Angular.
     * Angular supports all built-in recognizers, as listed in
     * [HammerJS documentation](https://hammerjs.github.io/).
     */
    this.events = [];
    /**
     * Maps gesture event names to a set of configuration options
     * that specify overrides to the default values for specific properties.
     *
     * The key is a supported event name to be configured,
     * and the options object contains a set of properties, with override values
     * to be applied to the named recognizer event.
     * For example, to disable recognition of the rotate event, specify
     *  `{"rotate": {"enable": false}}`.
     *
     * Properties that are not present take the HammerJS default values.
     * For information about which properties are supported for which events,
     * and their allowed and default values, see
     * [HammerJS documentation](https://hammerjs.github.io/).
     *
     */

    this.overrides = {};
  }
  /**
   * Creates a [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
   * and attaches it to a given HTML element.
   * @param element The element that will recognize gestures.
   * @returns A HammerJS event-manager object.
   */


  buildHammer(element) {
    const mc = new Hammer(element, this.options);
    mc.get('pinch').set({
      enable: true
    });
    mc.get('rotate').set({
      enable: true
    });

    for (const eventName in this.overrides) {
      mc.get(eventName).set(this.overrides[eventName]);
    }

    return mc;
  }

}

HammerGestureConfig.ɵfac = function HammerGestureConfig_Factory(t) {
  return new (t || HammerGestureConfig)();
};

HammerGestureConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: HammerGestureConfig,
  factory: HammerGestureConfig.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HammerGestureConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();
/**
 * Event plugin that adds Hammer support to an application.
 *
 * @ngModule HammerModule
 */


class HammerGesturesPlugin extends EventManagerPlugin {
  constructor(doc, _config, console, loader) {
    super(doc);
    this._config = _config;
    this.console = console;
    this.loader = loader;
    this._loaderPromise = null;
  }

  supports(eventName) {
    if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
      return false;
    }

    if (!window.Hammer && !this.loader) {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        this.console.warn(`The "${eventName}" event cannot be bound because Hammer.JS is not ` + `loaded and no custom loader has been specified.`);
      }

      return false;
    }

    return true;
  }

  addEventListener(element, eventName, handler) {
    const zone = this.manager.getZone();
    eventName = eventName.toLowerCase(); // If Hammer is not present but a loader is specified, we defer adding the event listener
    // until Hammer is loaded.

    if (!window.Hammer && this.loader) {
      this._loaderPromise = this._loaderPromise || this.loader(); // This `addEventListener` method returns a function to remove the added listener.
      // Until Hammer is loaded, the returned function needs to *cancel* the registration rather
      // than remove anything.

      let cancelRegistration = false;

      let deregister = () => {
        cancelRegistration = true;
      };

      this._loaderPromise.then(() => {
        // If Hammer isn't actually loaded when the custom loader resolves, give up.
        if (!window.Hammer) {
          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            this.console.warn(`The custom HAMMER_LOADER completed, but Hammer.JS is not present.`);
          }

          deregister = () => {};

          return;
        }

        if (!cancelRegistration) {
          // Now that Hammer is loaded and the listener is being loaded for real,
          // the deregistration function changes from canceling registration to removal.
          deregister = this.addEventListener(element, eventName, handler);
        }
      }).catch(() => {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          this.console.warn(`The "${eventName}" event cannot be bound because the custom ` + `Hammer.JS loader failed.`);
        }

        deregister = () => {};
      }); // Return a function that *executes* `deregister` (and not `deregister` itself) so that we
      // can change the behavior of `deregister` once the listener is added. Using a closure in
      // this way allows us to avoid any additional data structures to track listener removal.


      return () => {
        deregister();
      };
    }

    return zone.runOutsideAngular(() => {
      // Creating the manager bind events, must be done outside of angular
      const mc = this._config.buildHammer(element);

      const callback = function (eventObj) {
        zone.runGuarded(function () {
          handler(eventObj);
        });
      };

      mc.on(eventName, callback);
      return () => {
        mc.off(eventName, callback); // destroy mc to prevent memory leak

        if (typeof mc.destroy === 'function') {
          mc.destroy();
        }
      };
    });
  }

  isCustomEvent(eventName) {
    return this._config.events.indexOf(eventName) > -1;
  }

}

HammerGesturesPlugin.ɵfac = function HammerGesturesPlugin_Factory(t) {
  return new (t || HammerGesturesPlugin)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HAMMER_GESTURE_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵConsole"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HAMMER_LOADER, 8));
};

HammerGesturesPlugin.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: HammerGesturesPlugin,
  factory: HammerGesturesPlugin.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HammerGesturesPlugin, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
      }]
    }, {
      type: HammerGestureConfig,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [HAMMER_GESTURE_CONFIG]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵConsole"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [HAMMER_LOADER]
      }]
    }];
  }, null);
})();
/**
 * Adds support for HammerJS.
 *
 * Import this module at the root of your application so that Angular can work with
 * HammerJS to detect gesture events.
 *
 * Note that applications still need to include the HammerJS script itself. This module
 * simply sets up the coordination layer between HammerJS and Angular's EventManager.
 *
 * @publicApi
 */


class HammerModule {}

HammerModule.ɵfac = function HammerModule_Factory(t) {
  return new (t || HammerModule)();
};

HammerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: HammerModule
});
HammerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [{
    provide: EVENT_MANAGER_PLUGINS,
    useClass: HammerGesturesPlugin,
    multi: true,
    deps: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT, HAMMER_GESTURE_CONFIG, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵConsole"], [new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional(), HAMMER_LOADER]]
  }, {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: HammerGestureConfig,
    deps: []
  }]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HammerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      providers: [{
        provide: EVENT_MANAGER_PLUGINS,
        useClass: HammerGesturesPlugin,
        multi: true,
        deps: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT, HAMMER_GESTURE_CONFIG, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵConsole"], [new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional(), HAMMER_LOADER]]
      }, {
        provide: HAMMER_GESTURE_CONFIG,
        useClass: HammerGestureConfig,
        deps: []
      }]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
 * values to be safe to use in the different DOM contexts.
 *
 * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
 * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
 * the website.
 *
 * In specific situations, it might be necessary to disable sanitization, for example if the
 * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
 * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
 * methods, and then binding to that value from the template.
 *
 * These situations should be very rare, and extraordinary care must be taken to avoid creating a
 * Cross Site Scripting (XSS) security bug!
 *
 * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
 * close as possible to the source of the value, to make it easy to verify no security bug is
 * created by its use.
 *
 * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
 * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
 * code. The sanitizer leaves safe values intact.
 *
 * @security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
 * sanitization for the value passed in. Carefully check and audit all values and code paths going
 * into this call. Make sure any user data is appropriately escaped for this security context.
 * For more detail, see the [Security Guide](https://g.co/ng/security).
 *
 * @publicApi
 */


class DomSanitizer {}

DomSanitizer.ɵfac = function DomSanitizer_Factory(t) {
  return new (t || DomSanitizer)();
};

DomSanitizer.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: DomSanitizer,
  factory: function DomSanitizer_Factory(t) {
    let r = null;

    if (t) {
      r = new (t || DomSanitizer)();
    } else {
      r = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DomSanitizerImpl);
    }

    return r;
  },
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DomSanitizer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root',
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => DomSanitizerImpl)
    }]
  }], null, null);
})();

function domSanitizerImplFactory(injector) {
  return new DomSanitizerImpl(injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
}

class DomSanitizerImpl extends DomSanitizer {
  constructor(_doc) {
    super();
    this._doc = _doc;
  }

  sanitize(ctx, value) {
    if (value == null) return null;

    switch (ctx) {
      case _angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.NONE:
        return value;

      case _angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.HTML:
        if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵallowSanitizationBypassAndThrow"])(value, "HTML"
        /* Html */
        )) {
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunwrapSafeValue"])(value);
        }

        return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵ_sanitizeHtml"])(this._doc, String(value)).toString();

      case _angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.STYLE:
        if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵallowSanitizationBypassAndThrow"])(value, "Style"
        /* Style */
        )) {
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunwrapSafeValue"])(value);
        }

        return value;

      case _angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.SCRIPT:
        if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵallowSanitizationBypassAndThrow"])(value, "Script"
        /* Script */
        )) {
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunwrapSafeValue"])(value);
        }

        throw new Error('unsafe value used in a script context');

      case _angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.URL:
        const type = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵgetSanitizationBypassType"])(value);

        if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵallowSanitizationBypassAndThrow"])(value, "URL"
        /* Url */
        )) {
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunwrapSafeValue"])(value);
        }

        return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵ_sanitizeUrl"])(String(value));

      case _angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.RESOURCE_URL:
        if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵallowSanitizationBypassAndThrow"])(value, "ResourceURL"
        /* ResourceUrl */
        )) {
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunwrapSafeValue"])(value);
        }

        throw new Error('unsafe value used in a resource URL context (see https://g.co/ng/security#xss)');

      default:
        throw new Error(`Unexpected SecurityContext ${ctx} (see https://g.co/ng/security#xss)`);
    }
  }

  bypassSecurityTrustHtml(value) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵbypassSanitizationTrustHtml"])(value);
  }

  bypassSecurityTrustStyle(value) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵbypassSanitizationTrustStyle"])(value);
  }

  bypassSecurityTrustScript(value) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵbypassSanitizationTrustScript"])(value);
  }

  bypassSecurityTrustUrl(value) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵbypassSanitizationTrustUrl"])(value);
  }

  bypassSecurityTrustResourceUrl(value) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵbypassSanitizationTrustResourceUrl"])(value);
  }

}

DomSanitizerImpl.ɵfac = function DomSanitizerImpl_Factory(t) {
  return new (t || DomSanitizerImpl)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
};

DomSanitizerImpl.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: DomSanitizerImpl,
  factory: function DomSanitizerImpl_Factory(t) {
    let r = null;

    if (t) {
      r = new t();
    } else {
      r = domSanitizerImplFactory(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
    }

    return r;
  },
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DomSanitizerImpl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root',
      useFactory: domSanitizerImplFactory,
      deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @publicApi
 */


const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Version('13.2.1');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 1670:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ })

}])
//# sourceMappingURL=src_bootstrap_ts.js.map