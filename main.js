"use strict";
(self["webpackChunklms_web"] = self["webpackChunklms_web"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _listings_listings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listings/listings.component */ 8585);
/* harmony import */ var _listing_details_listing_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listing-details/listing-details.component */ 8995);
/* harmony import */ var _edit_listing_edit_listing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-listing/edit-listing.component */ 2456);
/* harmony import */ var _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questionnaire/questionnaire.component */ 1220);
/* harmony import */ var _my_listings_my_listings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-listings/my-listings.component */ 336);
/* harmony import */ var _create_listing_create_listing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-listing/create-listing.component */ 5339);
/* harmony import */ var _create_questionnaire_create_questionnaire_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-questionnaire/create-questionnaire.component */ 3919);
/* harmony import */ var _questionnaire_details_questionnaire_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./questionnaire-details/questionnaire-details.component */ 4697);
/* harmony import */ var _create_questionnaire_details_create_questionnaire_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-questionnaire-details/create-questionnaire-details.component */ 737);
/* harmony import */ var _create_questionnaire_det_ops_create_questionnaire_det_ops_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-questionnaire-det-ops/create-questionnaire-det-ops.component */ 4239);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ 6459);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ 2014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);















const routes = [{
  path: 'listings',
  component: _listings_listings_component__WEBPACK_IMPORTED_MODULE_0__.ListingsComponent,
  pathMatch: 'full'
}, {
  path: 'listings/:id',
  component: _listing_details_listing_details_component__WEBPACK_IMPORTED_MODULE_1__.ListingDetailsComponent
}, {
  path: 'questionnaire/:id',
  component: _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_3__.QuestionnaireComponent
}, {
  path: 'create-listings',
  component: _create_listing_create_listing_component__WEBPACK_IMPORTED_MODULE_5__.CreateListingComponent
}, {
  path: 'edit-listing/:id',
  component: _edit_listing_edit_listing_component__WEBPACK_IMPORTED_MODULE_2__.EditListingComponent
}, {
  path: 'my-listings',
  component: _my_listings_my_listings_component__WEBPACK_IMPORTED_MODULE_4__.MyListingsComponent
}, {
  path: 'questionnaire-details/:id',
  component: _questionnaire_details_questionnaire_details_component__WEBPACK_IMPORTED_MODULE_7__.QuestionnaireDetailsComponent
}, {
  path: 'listings/:id',
  component: _listings_listings_component__WEBPACK_IMPORTED_MODULE_0__.ListingsComponent
}, {
  path: 'create-questionnaire',
  component: _create_questionnaire_create_questionnaire_component__WEBPACK_IMPORTED_MODULE_6__.CreateQuestionnaireComponent
}, {
  path: 'create-ques-details',
  component: _create_questionnaire_details_create_questionnaire_details_component__WEBPACK_IMPORTED_MODULE_8__.CreateQuestionnaireDetailsComponent
}, {
  path: 'create-ques-det-ops',
  component: _create_questionnaire_det_ops_create_questionnaire_det_ops_component__WEBPACK_IMPORTED_MODULE_9__.CreateQuestionnaireDetOpsComponent
}, {
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__.HomeComponent
}, {
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__.LoginComponent
}, {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 6466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 2014);






function AppComponent_ul_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 14)(1, "li", 15)(2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "li", 15)(6, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Create Jobs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li", 15)(10, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Search Jobs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 15)(14, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "My Jobs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li", 15)(18, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Notifications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function AppComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AppComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.logOut());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class AppComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.title = 'LMS';
    this.user = this.authService.afAuth.user;
  }
  ngOnInit() {}
  logOut() {
    this.authService.AuthLogout();
    this.router.navigateByUrl('login');
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 22,
  vars: 15,
  consts: [[1, "navbar", "navbar-expand-lg", "bg-body-tertiary"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], [1, "bi", "bi-robot", 2, "font-size", "2rem", "color", "cornflowerblue"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], ["class", "navbar-nav me-auto mb-2 mb-lg-0", 4, "ngIf"], ["role", "search", 1, "d-flex"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "me-2"], ["type", "submit", 1, "btn", "btn-outline-success"], ["class", "btn btn-outline-primary", "type", "button", "routerLink", "/login", 4, "ngIf"], ["class", "btn btn-outline-succes", "type", "button", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "routerLink", "/home", 1, "nav-link"], [1, "bi", "bi-house-door", 2, "font-size", "2rem", "color", "rgb(45, 51, 179)"], ["aria-current", "page", "routerLink", "/create-listings", 1, "nav-link"], [1, "bi", "bi-person-add", 2, "font-size", "2rem", "color", "rgb(45, 51, 179)"], ["aria-current", "page", "routerLink", "/listings", 1, "nav-link"], [1, "bi", "bi-search", 2, "font-size", "2rem", "color", "rgb(45, 51, 179)"], ["aria-current", "page", "routerLink", "/my-listings", 1, "nav-link"], [1, "bi", "bi-bullseye", 2, "font-size", "2rem", "color", "rgb(45, 51, 179)"], ["type", "button", "routerLink", "/login", 1, "btn", "btn-outline-primary"], ["type", "button", 1, "btn", "btn-outline-succes", 3, "click"], [1, "bi", "bi-power", 2, "font-size", "2rem", "color", "rgb(45, 51, 179)"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "LMS ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AppComponent_ul_8_Template, 21, 0, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AppComponent_button_14_Template, 2, 0, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AppComponent_button_16_Template, 2, 0, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AppComponent_div_18_Template, 2, 0, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AppComponent_div_20_Template, 2, 0, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 5, ctx.user));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 7, ctx.user));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 9, ctx.user));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 11, ctx.user));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 13, ctx.user));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  styles: [".bouton-image[_ngcontent-%COMP%]:before {\n    content: \"\";\n    width: 16px;\n    height: 16px;\n    display: inline-block;\n    margin-right: 5px;\n    vertical-align: text-top;\n    background-color: transparent;\n    background-position : center center;\n    background-repeat:no-repeat;\n}\n\n.monBouton[_ngcontent-%COMP%]:before{\n    background-image : url('Google.png');\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0IsbUNBQW1DO0lBQ25DLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9DQUE0QztBQUNoRCIsInNvdXJjZXNDb250ZW50IjpbIi5ib3V0b24taW1hZ2U6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uIDogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxufVxyXG5cclxuLm1vbkJvdXRvbjpiZWZvcmV7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlIDogdXJsKC4uL2Fzc2V0cy9Hb29nbGUucG5nKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/compat */ 5281);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/compat/auth */ 6075);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/compat/storage */ 9664);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 4080);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/compat/database */ 3002);
/* harmony import */ var _listings_listings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listings/listings.component */ 8585);
/* harmony import */ var _listing_details_listing_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listing-details/listing-details.component */ 8995);
/* harmony import */ var _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./questionnaire/questionnaire.component */ 1220);
/* harmony import */ var _my_listings_my_listings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-listings/my-listings.component */ 336);
/* harmony import */ var _edit_listing_edit_listing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-listing/edit-listing.component */ 2456);
/* harmony import */ var _create_listing_create_listing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-listing/create-listing.component */ 5339);
/* harmony import */ var _create_questionnaire_create_questionnaire_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-questionnaire/create-questionnaire.component */ 3919);
/* harmony import */ var _questionnaire_details_questionnaire_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./questionnaire-details/questionnaire-details.component */ 4697);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ 6459);
/* harmony import */ var _create_questionnaire_details_create_questionnaire_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./create-questionnaire-details/create-questionnaire-details.component */ 737);
/* harmony import */ var _create_questionnaire_det_ops_create_questionnaire_det_ops_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./create-questionnaire-det-ops/create-questionnaire-det-ops.component */ 4239);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ 2014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 1699);

























class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_19__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.firebase), _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_20__.AngularFireAuthModule, _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_21__.AngularFirestoreModule, _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_22__.AngularFireStorageModule, _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_23__.AngularFireDatabaseModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _listings_listings_component__WEBPACK_IMPORTED_MODULE_2__.ListingsComponent, _listing_details_listing_details_component__WEBPACK_IMPORTED_MODULE_3__.ListingDetailsComponent, _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_4__.QuestionnaireComponent, _my_listings_my_listings_component__WEBPACK_IMPORTED_MODULE_5__.MyListingsComponent, _edit_listing_edit_listing_component__WEBPACK_IMPORTED_MODULE_6__.EditListingComponent, _create_listing_create_listing_component__WEBPACK_IMPORTED_MODULE_7__.CreateListingComponent, _create_questionnaire_create_questionnaire_component__WEBPACK_IMPORTED_MODULE_8__.CreateQuestionnaireComponent, _questionnaire_details_questionnaire_details_component__WEBPACK_IMPORTED_MODULE_9__.QuestionnaireDetailsComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_11__.HomeComponent, _create_questionnaire_details_create_questionnaire_details_component__WEBPACK_IMPORTED_MODULE_12__.CreateQuestionnaireDetailsComponent, _create_questionnaire_det_ops_create_questionnaire_det_ops_component__WEBPACK_IMPORTED_MODULE_13__.CreateQuestionnaireDetOpsComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_14__.LoginComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_19__.AngularFireModule, _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_20__.AngularFireAuthModule, _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_21__.AngularFirestoreModule, _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_22__.AngularFireStorageModule, _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_23__.AngularFireDatabaseModule]
  });
})();

/***/ }),

/***/ 6466:
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ 9193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/auth */ 6075);



class AuthService {
  constructor(afAuth // Inject Firebase auth service
  ) {
    this.afAuth = afAuth;
  }
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider).then(result => {
      console.log('You have been successfully logged in!');
    }).catch(error => {
      console.log(error);
    });
  }
  AuthLogout() {
    this.afAuth.signOut();
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuth));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5339:
/*!************************************************************!*\
  !*** ./src/app/create-listing/create-listing.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateListingComponent: () => (/* binding */ CreateListingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../listing.service */ 2215);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);




class CreateListingComponent {
  constructor(listingService, router) {
    this.listingService = listingService;
    this.router = router;
    this.listing = {
      listingId: "1",
      listingName: "hello",
      listingStartDate: "",
      minSalary: 1,
      maxSalary: 1,
      listingEndDate: "",
      isActive: true
    };
  }
  ngOnInit() {}
  saveListing(listing) {
    this.listingService.saveListings(listing).subscribe(value => {
      console.log('Listing saved -' + value);
      this.router.navigateByUrl('create-questionnaire');
    });
  }
}
CreateListingComponent.ɵfac = function CreateListingComponent_Factory(t) {
  return new (t || CreateListingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_listing_service__WEBPACK_IMPORTED_MODULE_0__.ListingService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
CreateListingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CreateListingComponent,
  selectors: [["app-create-listing"]],
  decls: 56,
  vars: 8,
  consts: [[1, "card"], [1, "card-header"], ["aria-label", "breadcrumb", 2, "--bs-breadcrumb-divider", "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E\")"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/listings"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "card-body"], [1, "card-title"], [1, "mb-3"], ["for", "lblListingName", 1, "form-label"], ["type", "text", "id", "txtListingName", "placeholder", "What is this job role for?", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "lblListingDescription", 1, "form-label"], ["id", "txtListingDescription", "placeholder", "Specify brief details about listing.", "rows", "5", "cols", "20", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-6"], ["for", "lblStartDate", 1, "form-label"], ["type", "date", "id", "dtStartDate", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "lblEndDate", 1, "form-label"], ["type", "date", "id", "dtEndDate", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-12"], [1, "form-check"], ["type", "checkbox", "id", "gridCheck", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "gridCheck", 1, "form-check-label"], ["for", "lblMinSalary>", 1, "form-label"], ["type", "number", "id", "txtMinSalary", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "lblMaxSalary", 1, "form-label"], ["type", "number", "id", "txtMaxSalary", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "lblLocation", 1, "form-label"], ["type", "text", "id", "txtLocation", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "card-footer", "text-body-secondary"], [1, "col-6", "d-grid"], ["type", "submit", 1, "btn", "btn-outline-success", 3, "click"], [1, "bi", "bi-save", 2, "font-size", "1rem", "color", "rgb(229, 229, 236)"], ["type", "button", "routerLink", "/listings", 1, "btn", "btn-outline-primary"], [1, "bi", "bi-list-columns", 2, "font-size", "1rem", "color", "rgb(229, 229, 236)"]],
  template: function CreateListingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nav", 2)(3, "ol", 3)(4, "li", 4)(5, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Jobs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Create Jobs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "h5", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Job Posting");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9)(13, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Listing Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateListingComponent_Template_input_ngModelChange_15_listener($event) {
        return ctx.listing.listingName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9)(17, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Listing Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "textarea", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateListingComponent_Template_textarea_ngModelChange_19_listener($event) {
        return ctx.listing.listingDescription = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14)(21, "div", 15)(22, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Start Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateListingComponent_Template_input_ngModelChange_24_listener($event) {
        return ctx.listing.listingStartDate = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15)(26, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "End Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateListingComponent_Template_input_ngModelChange_28_listener($event) {
        return ctx.listing.listingEndDate = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 20)(30, "div", 21)(31, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateListingComponent_Template_input_ngModelChange_31_listener($event) {
        return ctx.listing.isActive = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Is Active ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 9)(35, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Min Salary");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateListingComponent_Template_input_ngModelChange_37_listener($event) {
        return ctx.listing.minSalary = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 9)(39, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Max Salary");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateListingComponent_Template_input_ngModelChange_41_listener($event) {
        return ctx.listing.maxSalary = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 9)(43, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateListingComponent_Template_input_ngModelChange_45_listener($event) {
        return ctx.listing.location = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 30)(47, "div", 14)(48, "div", 31)(49, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateListingComponent_Template_button_click_49_listener() {
        return ctx.saveListing(ctx.listing);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "i", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Post Job");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 31)(53, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "i", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Job Listings ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.listing.listingName);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.listing.listingDescription);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.listing.listingStartDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.listing.listingEndDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.listing.isActive);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.listing.minSalary);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.listing.maxSalary);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.listing.location);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4239:
/*!****************************************************************************************!*\
  !*** ./src/app/create-questionnaire-det-ops/create-questionnaire-det-ops.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateQuestionnaireDetOpsComponent: () => (/* binding */ CreateQuestionnaireDetOpsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class CreateQuestionnaireDetOpsComponent {}
CreateQuestionnaireDetOpsComponent.ɵfac = function CreateQuestionnaireDetOpsComponent_Factory(t) {
  return new (t || CreateQuestionnaireDetOpsComponent)();
};
CreateQuestionnaireDetOpsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CreateQuestionnaireDetOpsComponent,
  selectors: [["app-create-questionnaire-det-ops"]],
  decls: 2,
  vars: 0,
  template: function CreateQuestionnaireDetOpsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "create-questionnaire-det-ops works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 737:
/*!****************************************************************************************!*\
  !*** ./src/app/create-questionnaire-details/create-questionnaire-details.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateQuestionnaireDetailsComponent: () => (/* binding */ CreateQuestionnaireDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _questionnaire_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../questionnaire.service */ 5207);
/* harmony import */ var _questionnaire_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../questionnaire-details.service */ 9073);
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility.service */ 1574);
/* harmony import */ var _questionnaire_det_ops_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../questionnaire-det-ops.service */ 4941);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);








function CreateQuestionnaireDetailsComponent_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const questionnaire_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", questionnaire_r6.questionnaireId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](questionnaire_r6.questionnaireName);
  }
}
function CreateQuestionnaireDetailsComponent_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const htmlElementType_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", htmlElementType_r7.htmlElementId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](htmlElementType_r7.htmlElementName);
  }
}
function CreateQuestionnaireDetailsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 5)(2, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Questionnaire Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CreateQuestionnaireDetailsComponent_div_9_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.questionnaireDetails.questionnaireQuestion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.questionnaireDetails.questionnaireQuestion);
  }
}
function CreateQuestionnaireDetailsComponent_div_10_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const questionnaireDetOp_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](questionnaireDetOp_r11.questionnaireDetOptName);
  }
}
function CreateQuestionnaireDetailsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Questionnaire Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CreateQuestionnaireDetailsComponent_div_10_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.questionnaireDetails.questionnaireQuestion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div")(5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Create options to your question");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CreateQuestionnaireDetailsComponent_div_10_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.questionnaireDetOps.questionnaireDetOptName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateQuestionnaireDetailsComponent_div_10_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.AddQuestionnaireDetOpt(ctx_r15.questionnaireDetOps));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Add Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, CreateQuestionnaireDetailsComponent_div_10_div_10_Template, 3, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r3.questionnaireDetails.questionnaireQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r3.questionnaireDetOps.questionnaireDetOptName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.questionnaireDetOpsArr);
  }
}
function CreateQuestionnaireDetailsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 9)(2, "div", 16)(3, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CreateQuestionnaireDetailsComponent_div_11_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.questionnaireDetails.questionnaireQuestion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Is Active ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r4.questionnaireDetails.questionnaireQuestion);
  }
}
function CreateQuestionnaireDetailsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 9)(2, "div", 16)(3, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CreateQuestionnaireDetailsComponent_div_12_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.questionnaireDetails.questionnaireQuestion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Is Active ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r5.questionnaireDetails.questionnaireQuestion);
  }
}
class CreateQuestionnaireDetailsComponent {
  constructor(questionnaireService, questionnaireDetailsService, utilityService, questionnaireDetOpsService, router) {
    this.questionnaireService = questionnaireService;
    this.questionnaireDetailsService = questionnaireDetailsService;
    this.utilityService = utilityService;
    this.questionnaireDetOpsService = questionnaireDetOpsService;
    this.router = router;
    this.questionnaireDetIdGen = -1;
    this.questionnaireDetails = {};
    this.questionnaireDetOps = {};
    this.questionnaireDetOpsArr = [];
  }
  ngOnInit() {
    this.questionnaireService.getAllQuestionnaire().subscribe(questionnaires => this.questionnaires = questionnaires);
    this.utilityService.getAllHtmlElementTypes().subscribe(htmlElementTypes => this.htmlElementTypes = htmlElementTypes);
  }
  saveQuestionnaireDetails(questionnaireDetails) {
    this.questionnaireDetailsService.saveQuestionnaireDetails(questionnaireDetails).subscribe(id => {
      this.questionnaireDetIdGen = id;
      if (questionnaireDetails.htmlElementId !== '1') {
        this.questionnaireDetOpsService.saveQuestionnaireDetOps(this.questionnaireDetOpsArr, this.questionnaireDetIdGen).subscribe(data => {
          this.router.navigateByUrl('listings');
        });
      }
    });
  }
  AddQuestionnaireDetOpt(questionnaireDetOps) {
    questionnaireDetOps.questionnaireDetId = this.questionnaireDetails.questionnaireDetId;
    this.questionnaireDetOpsArr.push(questionnaireDetOps);
  }
}
CreateQuestionnaireDetailsComponent.ɵfac = function CreateQuestionnaireDetailsComponent_Factory(t) {
  return new (t || CreateQuestionnaireDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_questionnaire_service__WEBPACK_IMPORTED_MODULE_0__.QuestionnaireService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_questionnaire_details_service__WEBPACK_IMPORTED_MODULE_1__.QuestionnaireDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_utility_service__WEBPACK_IMPORTED_MODULE_2__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_questionnaire_det_ops_service__WEBPACK_IMPORTED_MODULE_3__.QuestionnaireDetOpsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
CreateQuestionnaireDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CreateQuestionnaireDetailsComponent,
  selectors: [["app-create-questionnaire-details"]],
  decls: 24,
  vars: 10,
  consts: [[1, "container-fluid"], ["aria-label", "ddlQuestionnaire", 1, "form-select", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["aria-label", "ddlHtmlElementTypes", 1, "form-select", 3, "ngModel", "ngModelChange"], [4, "ngIf"], [1, "mb-3"], ["for", "lblListingName", 1, "form-label"], ["type", "text", "id", "txtMinReq", "placeholder", "Min Requirement?", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "txtAdditionalDet", "placeholder", "Additional text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-12"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [3, "value"], ["type", "text", "id", "txtQuestionnaireQuestion", "placeholder", "Type your question", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "txtQuestionnaireQuestion", "placeholder", "Enter option for select box", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-info", 3, "click"], [4, "ngFor", "ngForOf"], [1, "form-check"], ["type", "checkbox", "id", "gridCheck", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "gridCheck", 1, "form-check-label"], ["type", "radio", "id", "gridCheck", 1, "form-check-input", 3, "ngModel", "ngModelChange"]],
  template: function CreateQuestionnaireDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Select Questionnaire");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "select", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CreateQuestionnaireDetailsComponent_Template_select_ngModelChange_3_listener($event) {
        return ctx.questionnaireDetails.questionnaireId = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CreateQuestionnaireDetailsComponent_option_4_Template, 2, 2, "option", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Select Question Display Type ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "select", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CreateQuestionnaireDetailsComponent_Template_select_ngModelChange_7_listener($event) {
        return ctx.questionnaireDetails.htmlElementId = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CreateQuestionnaireDetailsComponent_option_8_Template, 2, 2, "option", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CreateQuestionnaireDetailsComponent_div_9_Template, 5, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, CreateQuestionnaireDetailsComponent_div_10_Template, 11, 3, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, CreateQuestionnaireDetailsComponent_div_11_Template, 6, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, CreateQuestionnaireDetailsComponent_div_12_Template, 6, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 5)(14, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Questionnaire Question");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CreateQuestionnaireDetailsComponent_Template_input_ngModelChange_16_listener($event) {
        return ctx.questionnaireDetails.minimumRequirement = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 5)(18, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Questionnaire Question");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CreateQuestionnaireDetailsComponent_Template_input_ngModelChange_20_listener($event) {
        return ctx.questionnaireDetails.additionalDetails = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 9)(22, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateQuestionnaireDetailsComponent_Template_button_click_22_listener() {
        return ctx.saveQuestionnaireDetails(ctx.questionnaireDetails);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Save Questionnaire");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.questionnaireDetails.questionnaireId);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.questionnaires);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.questionnaireDetails.htmlElementId);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.htmlElementTypes);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.questionnaireDetails.htmlElementId == "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.questionnaireDetails.htmlElementId == "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.questionnaireDetails.htmlElementId == "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.questionnaireDetails.htmlElementId == "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.questionnaireDetails.minimumRequirement);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.questionnaireDetails.additionalDetails);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3919:
/*!************************************************************************!*\
  !*** ./src/app/create-questionnaire/create-questionnaire.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateQuestionnaireComponent: () => (/* binding */ CreateQuestionnaireComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _questionnaire_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../questionnaire.service */ 5207);
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listing.service */ 2215);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);






function CreateQuestionnaireComponent_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const listing_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", listing_r1.listingId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](listing_r1.listingName);
  }
}
class CreateQuestionnaireComponent {
  constructor(questionnaireService, listingService, router) {
    this.questionnaireService = questionnaireService;
    this.listingService = listingService;
    this.router = router;
    this.questionnaire = {};
  }
  ngOnInit() {
    this.listingService.getListings().subscribe(listings => this.listings = listings);
  }
  saveQuestionnaire(questionnaire) {
    this.questionnaireService.saveQuestionnaire(questionnaire).subscribe(value => {
      this.router.navigateByUrl('create-ques-details');
    });
  }
}
CreateQuestionnaireComponent.ɵfac = function CreateQuestionnaireComponent_Factory(t) {
  return new (t || CreateQuestionnaireComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_questionnaire_service__WEBPACK_IMPORTED_MODULE_0__.QuestionnaireService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_listing_service__WEBPACK_IMPORTED_MODULE_1__.ListingService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
CreateQuestionnaireComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CreateQuestionnaireComponent,
  selectors: [["app-create-questionnaire"]],
  decls: 17,
  vars: 4,
  consts: [["aria-label", "ddlListings", "id", "listing.listingId", 1, "form-select", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "container-fluid"], [1, "mb-3"], ["for", "lblListingName", 1, "form-label"], ["type", "text", "id", "txtListingName", "placeholder", "What is this job role for?", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-12"], [1, "form-check"], ["type", "checkbox", "id", "gridCheck", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "gridCheck", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [3, "value"]],
  template: function CreateQuestionnaireComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Post Job List");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "select", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateQuestionnaireComponent_Template_select_ngModelChange_2_listener($event) {
        return ctx.questionnaire.listingId = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CreateQuestionnaireComponent_option_3_Template, 2, 2, "option", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Listing Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateQuestionnaireComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.questionnaire.questionnaireName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateQuestionnaireComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.questionnaire.isQuestionnaireManadatory = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Is Active ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6)(15, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateQuestionnaireComponent_Template_button_click_15_listener() {
        return ctx.saveQuestionnaire(ctx.questionnaire);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Save Questionnaire");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.questionnaire.listingId);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listings);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.questionnaire.questionnaireName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.questionnaire.isQuestionnaireManadatory);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2456:
/*!********************************************************!*\
  !*** ./src/app/edit-listing/edit-listing.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditListingComponent: () => (/* binding */ EditListingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class EditListingComponent {}
EditListingComponent.ɵfac = function EditListingComponent_Factory(t) {
  return new (t || EditListingComponent)();
};
EditListingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: EditListingComponent,
  selectors: [["app-edit-listing"]],
  decls: 2,
  vars: 0,
  template: function EditListingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit-listing works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6459:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class HomeComponent {}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 27,
  vars: 0,
  consts: [[1, "row"], [1, "col-6"], [1, "card"], [1, "card-body"], [1, "card-title", "text-bg-light"], [1, "card-subtitle", "mb-2", "text-body-secondary"], [1, "card-text"], [1, "d-grid"], ["routerLink", "/create-listings", "type", "button", 1, "btn", "btn-success"], [1, "bi", "bi-person-add", 2, "font-size", "1rem", "color", "rgb(229, 229, 236)"], [1, "card-subtitle", "mb-2"], ["routerLink", "/listings", "type", "button", 1, "btn", "btn-info"], [1, "bi", "bi-search", 2, "font-size", "1rem", "color", "rgb(229, 229, 236)"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create Jobs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Post your Jobs Here");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Create your job listing here");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "button", 8)(12, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00A0Create Job");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1)(15, "div", 2)(16, "div", 3)(17, "h5", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Search Jobs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Start your new job search here!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Search your jobs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7)(24, "button", 11)(25, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u00A0 Search Job");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8995:
/*!**************************************************************!*\
  !*** ./src/app/listing-details/listing-details.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListingDetailsComponent: () => (/* binding */ ListingDetailsComponent)
/* harmony export */ });
/* harmony import */ var _listingsdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../listingsdata */ 8101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);



class ListingDetailsComponent {
  constructor(route) {
    this.route = route;
    this.listing = {};
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    let list = _listingsdata__WEBPACK_IMPORTED_MODULE_0__.fakeListings.find(listing => listing.listingId == id);
    this.listing.listingId = list?.listingId;
    this.listing.listingName = list?.listingName;
    this.listing.listingDescription = list?.listingDescription;
    this.listing.listingStartDate = list?.listingStartDate;
    this.listing.listingEndDate = list?.listingEndDate;
    this.listing.isActive = list?.isActive;
  }
}
ListingDetailsComponent.ɵfac = function ListingDetailsComponent_Factory(t) {
  return new (t || ListingDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
};
ListingDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ListingDetailsComponent,
  selectors: [["app-listing-details"]],
  decls: 22,
  vars: 6,
  consts: [["routerLink", "/listings"], [3, "routerLink"], [1, "row", "g-3"], [1, "col"], ["type", "txtListingDescription", "placeholder", "Job Name", "aria-label", "First name", 1, "form-control"], ["type", "text", "placeholder", "Last name", "aria-label", "Last name", 1, "form-control"]],
  template: function ListingDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Fill Questionnaire");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 2)(18, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.listing.listingId);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.listing.listingDescription);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.listing.listingStartDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.listing.listingEndDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.listing.isActive);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/questionnaire/", ctx.listing.listingId, "");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2215:
/*!************************************!*\
  !*** ./src/app/listing.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListingService: () => (/* binding */ ListingService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 6075);





const httpOptions = {
  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
    'Content-Type': 'application/json'
  })
};
const httpOptionsWithAuthToken = token => ({
  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
    'Content-Type': 'application/json',
    'AuthToken': token
  })
});
class ListingService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
    this.listings = [];
  }
  getListings() {
    return this.http.get('api/Listing');
  }
  getListingsForUser() {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token => {
          if (user && token) {
            this.id = user.uid;
            this.http.get(`/api/listing/${this.id}`).subscribe(listing => {
              observer.next(listing);
            });
          } else {
            observer.next([]);
          }
        });
      });
    });
  }
  saveListings(listing) {
    listing.userId = this.id;
    return this.http.post('api/Listing', listing);
  }
}
ListingService.ɵfac = function ListingService_Factory(t) {
  return new (t || ListingService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth));
};
ListingService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ListingService,
  factory: ListingService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8585:
/*!************************************************!*\
  !*** ./src/app/listings/listings.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListingsComponent: () => (/* binding */ ListingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../listing.service */ 2215);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




function ListingsComponent_a_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 6)(1, "div", 7)(2, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "3 days ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 7)(7, "p", 8)(8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " More Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Offcanvas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15)(20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16)(23, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " What would you like to Do Today? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ul", 18)(26, "li")(27, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li")(30, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Ignore");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const listing_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](listing_r1.listingName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Min Salary - $", listing_r1.minSalary, " - Max Salary - $", listing_r1.maxSalary, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Location - ", listing_r1.location, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "#", listing_r1.listingId, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", listing_r1.listingId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", listing_r1.listingDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "/questionnaire/", listing_r1.listingId, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
class ListingsComponent {
  constructor(listingService) {
    this.listingService = listingService;
  }
  ngOnInit() {
    // this.listingService.getListings().subscribe(
    //   listings => console.log('listings  ' + listings),
    //   err => console.error('Observer got an error: ' + err),
    //   () => console.log('Observer got a complete notification')
    //   );
    this.listingService.getListings().subscribe(listings => {
      console.log(listings);
      this.listings = listings;
      console.log('listings Data ' + this.listings);
      //this.listings = fakeListings;
      console.log('Fake Listings Data ' + this.listings);
    });
    //this.listingService.getListingsForUser();
    // subscribe(
    //   x => console.log('Observer got a next value: ' + x),
    //   err => console.error('Observer got an error: ' + err),
    //   () => console.log('Observer got a complete notification')
    // );
    //this.listings = fakeListings;
  }
}

ListingsComponent.ɵfac = function ListingsComponent_Factory(t) {
  return new (t || ListingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_listing_service__WEBPACK_IMPORTED_MODULE_0__.ListingService));
};
ListingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ListingsComponent,
  selectors: [["app-listings"]],
  decls: 7,
  vars: 1,
  consts: [[1, "row"], [1, "col-12", "d-grid"], ["type", "buttin", "routerLink", "/create-listings", 1, "btn", "btn-outline-success"], [1, "bi", "bi-save", 2, "font-size", "1rem", "color", "rgb(229, 229, 236)"], [1, "list-group"], ["href", "#", "class", "list-group-item list-group-item-action", "aria-current", "true", 4, "ngFor", "ngForOf"], ["href", "#", "aria-current", "true", 1, "list-group-item", "list-group-item-action"], [1, "d-flex", "w-100", "justify-content-between"], [1, "mb-1"], [1, "badge", "rounded-pill", "text-bg-info"], ["data-bs-toggle", "offcanvas", "role", "button", "aria-controls", "offcanvasExample", 1, "btn", "btn-primary", 3, "href"], ["tabindex", "-1", "aria-labelledby", "offcanvasExampleLabel", 1, "offcanvas", "offcanvas-start", 3, "id"], [1, "offcanvas-header"], ["id", "offcanvasExampleLabel", 1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close"], [1, "offcanvas-body"], [1, "dropdown", "mt-3"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-warning", "dropdown-toggle"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "href"], ["href", "#", 1, "dropdown-item"]],
  template: function ListingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Post a job");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ListingsComponent_a_6_Template, 35, 8, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listings);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8101:
/*!*********************************!*\
  !*** ./src/app/listingsdata.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fakeListings: () => (/* binding */ fakeListings),
/* harmony export */   fakeQuestionnaire: () => (/* binding */ fakeQuestionnaire),
/* harmony export */   fakeQuestionnaireDetOps: () => (/* binding */ fakeQuestionnaireDetOps),
/* harmony export */   fakeQuestionnaireDetails: () => (/* binding */ fakeQuestionnaireDetails)
/* harmony export */ });
const fakeListings = [{
  listingId: "1",
  listingName: "Full Stack .Net Developer",
  listingDescription: "Hybrid Work Environment: 40% in-office and up to 60% work-from-home, if desired. Must live within commutable distance from our officeJob Summary\r\n\r\nAs part of a development technology team, individual analyzes business requirements and problems and drives research to design quality technical solutions. This individual will be involved in portions of the full systems life cycle (based on experience/skills) and is responsible for designing, coding, testing, implementing, maintaining and supporting application software that is delivered on time and within budget. Handles complex problems independently and demonstrates analytical thinking. Is able to make judgements and recommendations based on the analysis and interpretation of data.",
  minSalary: 110000,
  maxSalary: 120000,
  location: "Memphis, TN",
  listingStartDate: "2023-08-07T00:00:00",
  listingEndDate: "2023-09-10T00:00:00",
  isActive: false
}, {
  listingId: "2",
  listingName: "Full Stack Java Developer",
  listingDescription: "We are seeking an experienced full stack software engineer with strong C# skills to join our team, specifically to design and develop software for medical devices. The ideal candidate will have a passion for building robust and scalable software and will be able to work on both front-end and back-end development tasks.About PhilipsWe are a health technology company. We built our entire company around the belief that every human matters, and we won't stop until everybody everywhere has access to the quality healthcare that we all deserve. Do the work of your life to help the lives of others. • Learn more about our business.• Discover our rich and exciting history.• Learn more about our purpose.If you’re interested in this role and have many, but not all, of the experiences needed, we encourage you to apply. You may still be the right candidate for this or other opportunities at Philips. Learn more about our commitment to diversity and inclusion here.",
  minSalary: 109000,
  maxSalary: 200000,
  location: "Latham",
  listingStartDate: "2023-09-09T00:00:00",
  listingEndDate: "2023-10-11T00:00:00",
  isActive: true
}, {
  listingId: "3",
  listingName: "Data Architect",
  listingDescription: "This role is for data archicitent to analyze the sql database events for performance tuning",
  minSalary: 140000,
  maxSalary: 180000,
  location: "Tampa, FL",
  listingStartDate: "2023-08-07T00:00:00",
  listingEndDate: "2023-08-09T00:00:00",
  isActive: true
}, {
  listingId: "4",
  listingName: "Oracle Speacialist",
  listingDescription: "Database Expert",
  minSalary: 100000,
  maxSalary: 200000,
  location: "A",
  listingStartDate: "2023-07-22T11:58:24.537",
  listingEndDate: "2023-07-22T11:58:24.537",
  isActive: true
}];
const fakeQuestionnaire = [{
  questionnaireId: "1",
  questionnaireName: ".NET FULL STACK",
  listingId: "1",
  isQuestionnaireManadatory: true
}];
const fakeQuestionnaireDetails = [{
  questionnaireDetId: "1",
  questionnaireId: "1",
  questionnaireQuestion: "How many years of .NET experience do you have?",
  minimumRequirement: 5,
  htmlElementId: "1",
  additionalDetails: "This position requires a minimum of 5 years .net application debug, develop and maintain experience."
}];
const fakeQuestionnaireDetOps = [{
  questionnaireDetId: "1",
  questionnaireDetOptId: "1",
  questionnaireDetOptName: 2022
}];

/***/ }),

/***/ 2014:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 6466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);




class LoginComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.user = this.authService.afAuth.user;
  }
  ngOnInit() {}
  validateLogin() {
    this.authService.GoogleAuth().then(userData => {
      console.log(userData);
      this.router.navigateByUrl('home');
    });
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 55,
  vars: 0,
  consts: [[1, "d-flex", "align-items-center", "py-4", "bg-body-tertiary"], ["xmlns", "http://www.w3.org/2000/svg", 2, "display", "none"], ["id", "check2", "viewBox", "0 0 16 16"], ["d", "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"], ["id", "circle-half", "viewBox", "0 0 16 16"], ["d", "M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"], ["id", "moon-stars-fill", "viewBox", "0 0 16 16"], ["d", "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"], ["d", "M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"], ["id", "sun-fill", "viewBox", "0 0 16 16"], ["d", "M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"], [1, "dropdown", "position-fixed", "bottom-0", "end-0", "mb-3", "me-3", "bd-mode-toggle"], ["id", "bd-theme", "type", "button", "aria-expanded", "false", "data-bs-toggle", "dropdown", "aria-label", "Toggle theme (auto)", 1, "btn", "btn-bd-primary", "py-2", "dropdown-toggle", "d-flex", "align-items-center"], ["width", "1em", "height", "1em", 1, "bi", "my-1", "theme-icon-active"], ["href", "#circle-half"], ["id", "bd-theme-text", 1, "visually-hidden"], ["aria-labelledby", "bd-theme-text", 1, "dropdown-menu", "dropdown-menu-end", "shadow"], ["type", "button", "data-bs-theme-value", "light", "aria-pressed", "false", 1, "dropdown-item", "d-flex", "align-items-center"], ["width", "1em", "height", "1em", 1, "bi", "me-2", "opacity-50", "theme-icon"], ["href", "#sun-fill"], ["width", "1em", "height", "1em", 1, "bi", "ms-auto", "d-none"], ["href", "#check2"], ["type", "button", "data-bs-theme-value", "dark", "aria-pressed", "false", 1, "dropdown-item", "d-flex", "align-items-center"], ["href", "#moon-stars-fill"], ["type", "button", "data-bs-theme-value", "auto", "aria-pressed", "true", 1, "dropdown-item", "d-flex", "align-items-center", "active"], [1, "form-signin", "w-100", "m-auto"], [1, "card"], [1, "card-body"], [1, "card-title", "text-bg-light"], [1, "card-subtitle", "mb-2", "text-body-secondary"], ["src", "./../../assets/Google.png", "alt", "...", "width", "72", "height", "57"], [1, "card-text"], [1, "d-grid"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "bi", "bi-google", 2, "font-size", "1rem", "color", "rgb(229, 229, 236)"], [1, "mt-5", "mb-3", "text-body-secondary"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 1)(2, "symbol", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "symbol", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "symbol", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "path", 7)(8, "path", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "symbol", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "path", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 11)(12, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "svg", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "use", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Toggle theme");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ul", 16)(18, "li")(19, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "svg", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "use", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Light ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "svg", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "use", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li")(26, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "svg", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "use", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Dark ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "svg", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "use", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "svg", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "use", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Auto ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "svg", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "use", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "main", 25)(40, "form")(41, "div", 26)(42, "div", 27)(43, "h5", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h6", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Just Login with your google account to continue!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 32)(50, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_50_listener() {
        return ctx.validateLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\u00A0 Login with Google");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\u00A9 2017\u20132023");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
  styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.form-signin[_ngcontent-%COMP%] {\n  max-width: 330px;\n  padding: 1rem;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%]:focus-within {\n  z-index: 2;\n}\n\n.form-signin[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.form-signin[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIHtcclxuICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1mbG9hdGluZzpmb2N1cy13aXRoaW4ge1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xyXG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */", ".bd-placeholder-img[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n    text-anchor: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n  }\n\n  @media (min-width: 768px) {\n    .bd-placeholder-img-lg[_ngcontent-%COMP%] {\n      font-size: 3.5rem;\n    }\n  }\n\n  .b-example-divider[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 3rem;\n    background-color: rgba(0, 0, 0, .1);\n    border: solid rgba(0, 0, 0, .15);\n    border-width: 1px 0;\n    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);\n  }\n\n  .b-example-vr[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    width: 1.5rem;\n    height: 100vh;\n  }\n\n  .bi[_ngcontent-%COMP%] {\n    vertical-align: -.125em;\n    fill: currentColor;\n  }\n\n  .nav-scroller[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 2;\n    height: 2.75rem;\n    overflow-y: hidden;\n  }\n\n  .nav-scroller[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: nowrap;\n    padding-bottom: 1rem;\n    margin-top: -1px;\n    overflow-x: auto;\n    text-align: center;\n    white-space: nowrap;\n    -webkit-overflow-scrolling: touch;\n  }\n\n  .btn-bd-primary[_ngcontent-%COMP%] {\n    --bd-violet-bg: #712cf9;\n    --bd-violet-rgb: 112.520718, 44.062154, 249.437846;\n\n    --bs-btn-font-weight: 600;\n    --bs-btn-color: var(--bs-white);\n    --bs-btn-bg: var(--bd-violet-bg);\n    --bs-btn-border-color: var(--bd-violet-bg);\n    --bs-btn-hover-color: var(--bs-white);\n    --bs-btn-hover-bg: #6528e0;\n    --bs-btn-hover-border-color: #6528e0;\n    --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);\n    --bs-btn-active-color: var(--bs-btn-hover-color);\n    --bs-btn-active-bg: #5a23c8;\n    --bs-btn-active-border-color: #5a23c8;\n  }\n  .bd-mode-toggle[_ngcontent-%COMP%] {\n    z-index: 1500;\n  }"]
});

/***/ }),

/***/ 336:
/*!******************************************************!*\
  !*** ./src/app/my-listings/my-listings.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyListingsComponent: () => (/* binding */ MyListingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../listing.service */ 2215);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/auth */ 6075);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);






function MyListingsComponent_a_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 6)(1, "div", 7)(2, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "3 days ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 7)(7, "p", 8)(8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " More Details\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Offcanvas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15)(20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16)(23, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " What would you like to Do Today? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ul", 18)(26, "li")(27, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li")(30, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Ignore");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const listing_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](listing_r1.listingName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Min Salary - $", listing_r1.minSalary, " - Max Salary - $", listing_r1.maxSalary, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Location - ", listing_r1.location, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "#", listing_r1.listingId, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", listing_r1.listingId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", listing_r1.listingDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "/questionnaire/", listing_r1.listingId, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
class MyListingsComponent {
  constructor(listingService, auth, http) {
    this.listingService = listingService;
    this.auth = auth;
    this.http = http;
  }
  ngOnInit() {
    this.listingService.getListingsForUser().subscribe(listings => {
      this.listings = listings;
    });
  }
}
MyListingsComponent.ɵfac = function MyListingsComponent_Factory(t) {
  return new (t || MyListingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_listing_service__WEBPACK_IMPORTED_MODULE_0__.ListingService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
MyListingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MyListingsComponent,
  selectors: [["app-my-listings"]],
  decls: 7,
  vars: 1,
  consts: [[1, "row"], [1, "col-12", "d-grid"], ["type", "buttin", "routerLink", "/create-listings", 1, "btn", "btn-outline-success"], [1, "bi", "bi-save", 2, "font-size", "1rem", "color", "rgb(229, 229, 236)"], [1, "list-group"], ["href", "#", "class", "list-group-item list-group-item-action", "aria-current", "true", 4, "ngFor", "ngForOf"], ["href", "#", "aria-current", "true", 1, "list-group-item", "list-group-item-action"], [1, "d-flex", "w-100", "justify-content-between"], [1, "mb-1"], [1, "badge", "rounded-pill", "text-bg-info"], ["data-bs-toggle", "offcanvas", "role", "button", "aria-controls", "offcanvasExample", 1, "btn", "btn-primary", 3, "href"], ["tabindex", "-1", "aria-labelledby", "offcanvasExampleLabel", 1, "offcanvas", "offcanvas-start", 3, "id"], [1, "offcanvas-header"], ["id", "offcanvasExampleLabel", 1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close"], [1, "offcanvas-body"], [1, "dropdown", "mt-3"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-warning", "dropdown-toggle"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "href"], ["href", "#", 1, "dropdown-item"]],
  template: function MyListingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Post a job");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MyListingsComponent_a_6_Template, 35, 8, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listings);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4941:
/*!**************************************************!*\
  !*** ./src/app/questionnaire-det-ops.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionnaireDetOpsService: () => (/* binding */ QuestionnaireDetOpsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);


class QuestionnaireDetOpsService {
  constructor(http) {
    this.http = http;
    this.questionnaireDetailOptions = {};
  }
  saveQuestionnaireDetOps(questionnaireDetOps, id) {
    for (let index = 0; index < questionnaireDetOps.length; index++) {
      this.questionnaireDetailOptions = questionnaireDetOps[index];
      this.questionnaireDetailOptions.questionnaireDetId = '' + id;
    }
    return this.http.post('api/QuestionnaireDetailOps', this.questionnaireDetailOptions);
  }
  saveQuestionnaireDetOp(questionnaireDetOp) {
    return this.http.post('api/QuestionnaireDetailOps', questionnaireDetOp);
  }
  getQuestionnaireDetOpsByQuestionnaireDetId(questionnaireDetId) {
    return this.http.get(`api/QuestionnaireDetailOps/${questionnaireDetId}`);
  }
}
QuestionnaireDetOpsService.ɵfac = function QuestionnaireDetOpsService_Factory(t) {
  return new (t || QuestionnaireDetOpsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
QuestionnaireDetOpsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: QuestionnaireDetOpsService,
  factory: QuestionnaireDetOpsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9073:
/*!**************************************************!*\
  !*** ./src/app/questionnaire-details.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionnaireDetailsService: () => (/* binding */ QuestionnaireDetailsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);


class QuestionnaireDetailsService {
  constructor(http) {
    this.http = http;
  }
  saveQuestionnaireDetails(questionnaireDetails) {
    return this.http.post('api/QuestionnaireDetails', questionnaireDetails);
  }
  getQuestionnaireDetailsByQuestionnaireId(qId) {
    return this.http.get(`/api/QuestionnaireDetails/${qId}`);
  }
}
QuestionnaireDetailsService.ɵfac = function QuestionnaireDetailsService_Factory(t) {
  return new (t || QuestionnaireDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
QuestionnaireDetailsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: QuestionnaireDetailsService,
  factory: QuestionnaireDetailsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4697:
/*!**************************************************************************!*\
  !*** ./src/app/questionnaire-details/questionnaire-details.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionnaireDetailsComponent: () => (/* binding */ QuestionnaireDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _questionnaire_details_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../questionnaire-details.service */ 9073);
/* harmony import */ var _questionnaire_det_ops_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../questionnaire-det-ops.service */ 4941);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);






function QuestionnaireDetailsComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const questionnaireDetail_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](questionnaireDetail_r1.questionnaireQuestion);
  }
}
function QuestionnaireDetailsComponent_div_1_div_2_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const questionnaireDetOp_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](questionnaireDetOp_r8.questionnaireDetOptName);
  }
}
function QuestionnaireDetailsComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, QuestionnaireDetailsComponent_div_1_div_2_option_4_Template, 2, 1, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const questionnaireDetail_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](questionnaireDetail_r1.questionnaireQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.questionnaireDetOps);
  }
}
function QuestionnaireDetailsComponent_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 9)(2, "div", 10)(3, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function QuestionnaireDetailsComponent_div_1_div_3_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const questionnaireDetail_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](questionnaireDetail_r1.questionnaireQuestion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const questionnaireDetail_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", questionnaireDetail_r1.questionnaireQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", questionnaireDetail_r1.questionnaireQuestion, " ");
  }
}
function QuestionnaireDetailsComponent_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 9)(2, "div", 10)(3, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function QuestionnaireDetailsComponent_div_1_div_4_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const questionnaireDetail_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](questionnaireDetail_r1.questionnaireQuestion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const questionnaireDetail_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", questionnaireDetail_r1.questionnaireQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", questionnaireDetail_r1.questionnaireQuestion, " ");
  }
}
function QuestionnaireDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QuestionnaireDetailsComponent_div_1_div_1_Template, 5, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, QuestionnaireDetailsComponent_div_1_div_2_Template, 5, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, QuestionnaireDetailsComponent_div_1_div_3_Template, 6, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, QuestionnaireDetailsComponent_div_1_div_4_Template, 6, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const questionnaireDetail_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", questionnaireDetail_r1.htmlElementId == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", questionnaireDetail_r1.htmlElementId == "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", questionnaireDetail_r1.htmlElementId == "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", questionnaireDetail_r1.htmlElementId == "4");
  }
}
class QuestionnaireDetailsComponent {
  constructor(route, questionnareDetailsService, questionnaireDetOpsService) {
    this.route = route;
    this.questionnareDetailsService = questionnareDetailsService;
    this.questionnaireDetOpsService = questionnaireDetOpsService;
    this.questionnaireDetails = [];
    this.questionnaireDetOps = [];
    this.id = '';
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id !== null ? id : '';
    this.questionnareDetailsService.getQuestionnaireDetailsByQuestionnaireId(this.id).subscribe(questionnaireDetails => {
      this.questionnaireDetails = questionnaireDetails;
      this.questionnaireDetId = questionnaireDetails[0].questionnaireDetId !== null ? questionnaireDetails[0].questionnaireDetId : '';
      this.questionnaireDetOpsService.getQuestionnaireDetOpsByQuestionnaireDetId(this.questionnaireDetId).subscribe(value => {
        this.questionnaireDetOps = value;
      });
    });
  }
}
QuestionnaireDetailsComponent.ɵfac = function QuestionnaireDetailsComponent_Factory(t) {
  return new (t || QuestionnaireDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_questionnaire_details_service__WEBPACK_IMPORTED_MODULE_0__.QuestionnaireDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_questionnaire_det_ops_service__WEBPACK_IMPORTED_MODULE_1__.QuestionnaireDetOpsService));
};
QuestionnaireDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: QuestionnaireDetailsComponent,
  selectors: [["app-questionnaire-details"]],
  decls: 4,
  vars: 1,
  consts: [[4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-primary"], [4, "ngIf"], [1, "mb-3"], ["for", "lblListingName", 1, "form-label"], ["type", "text", "id", "txtQuestionnaireQuestion", "placeholder", "Type your Answer", 1, "form-control"], ["aria-label", "ddlHtmlElementTypes", 1, "form-select"], ["value", "questionnaireDetOp.questionnaireDetOptId", 4, "ngFor", "ngForOf"], ["value", "questionnaireDetOp.questionnaireDetOptId"], [1, "col-12"], [1, "form-check"], ["type", "checkbox", "id", "gridCheck", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "gridCheck", 1, "form-check-label"], ["type", "radio", "id", "gridCheck", 1, "form-check-input", 3, "ngModel", "ngModelChange"]],
  template: function QuestionnaireDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QuestionnaireDetailsComponent_div_1_Template, 5, 4, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.questionnaireDetails);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5207:
/*!******************************************!*\
  !*** ./src/app/questionnaire.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionnaireService: () => (/* binding */ QuestionnaireService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);


class QuestionnaireService {
  constructor(http) {
    this.http = http;
    this.listings = [];
  }
  getAllQuestionnaire() {
    return this.http.get('api/Questionnaire');
  }
  getQuestionnaire(listId) {
    return this.http.get(`api/Questionnaire/${listId}`);
  }
  saveQuestionnaire(questionnaire) {
    return this.http.post('api/Questionnaire', questionnaire);
  }
}
QuestionnaireService.ɵfac = function QuestionnaireService_Factory(t) {
  return new (t || QuestionnaireService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
QuestionnaireService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: QuestionnaireService,
  factory: QuestionnaireService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1220:
/*!**********************************************************!*\
  !*** ./src/app/questionnaire/questionnaire.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionnaireComponent: () => (/* binding */ QuestionnaireComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _questionnaire_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../questionnaire.service */ 5207);



class QuestionnaireComponent {
  constructor(route, questionnaireService) {
    this.route = route;
    this.questionnaireService = questionnaireService;
    this.id = '';
    this.listing = {
      listingId: "1",
      listingName: "hello",
      listingStartDate: "",
      listingEndDate: "",
      isActive: true
    };
    this.questionnaire = {};
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id !== null ? id : '';
    this.questionnaireService.getQuestionnaire(this.id).subscribe(value => {
      this.questionnaires = value;
      this.questionnaire = this.questionnaires[0];
    });
    // let questionnaire = fakeQuestionnaire.find(questionnaire => questionnaire.listingId == id);
    // this.questionnaire.questionnaireId = questionnaire?.questionnaireId;
    // this.questionnaire.questionnaireName = questionnaire?.questionnaireName;
    // this.questionnaire.listingId = questionnaire?.listingId;
    // this.questionnaire.isQuestionnaireManadatory = questionnaire?.isQuestionnaireManadatory;
  }
}

QuestionnaireComponent.ɵfac = function QuestionnaireComponent_Factory(t) {
  return new (t || QuestionnaireComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_questionnaire_service__WEBPACK_IMPORTED_MODULE_0__.QuestionnaireService));
};
QuestionnaireComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: QuestionnaireComponent,
  selectors: [["app-questionnaire"]],
  decls: 8,
  vars: 4,
  consts: [[3, "routerLink"]],
  template: function QuestionnaireComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Questionnaire Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.questionnaire.questionnaireName);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.questionnaire.listingId);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.questionnaire.isQuestionnaireManadatory);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/questionnaire-details/", ctx.questionnaire.questionnaireId, "");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1574:
/*!************************************!*\
  !*** ./src/app/utility.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UtilityService: () => (/* binding */ UtilityService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);


class UtilityService {
  constructor(http) {
    this.http = http;
  }
  getAllHtmlElementTypes() {
    return this.http.get('/api/Utilities');
  }
}
UtilityService.ɵfac = function UtilityService_Factory(t) {
  return new (t || UtilityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
UtilityService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: UtilityService,
  factory: UtilityService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBQMTy-Ec1Kz3VixTgyEjzhKv66isRNV7I",
    authDomain: "lms-web-cded0.firebaseapp.com",
    projectId: "lms-web-cded0",
    storageBucket: "lms-web-cded0.appspot.com",
    messagingSenderId: "918201625227",
    appId: "1:918201625227:web:0b1a6dc7f0f8866eccc28e",
    measurementId: "G-VGLKQRZ85S"
  }
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map