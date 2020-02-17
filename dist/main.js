(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_app_dashboard_app_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/app-dashboard/app-dashboard.component */ "./src/app/component/app-dashboard/app-dashboard.component.ts");
/* harmony import */ var _component_mainContent_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/mainContent/aboutus/aboutus.component */ "./src/app/component/mainContent/aboutus/aboutus.component.ts");
/* harmony import */ var _component_mainContent_academic_academic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/mainContent/academic/academic.component */ "./src/app/component/mainContent/academic/academic.component.ts");
/* harmony import */ var _component_mainContent_admission_admission_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/mainContent/admission/admission.component */ "./src/app/component/mainContent/admission/admission.component.ts");
/* harmony import */ var _component_mainContent_student_student_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/mainContent/student/student.component */ "./src/app/component/mainContent/student/student.component.ts");
/* harmony import */ var _component_mainContent_tn_pcell_tn_pcell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/mainContent/tn-pcell/tn-pcell.component */ "./src/app/component/mainContent/tn-pcell/tn-pcell.component.ts");
/* harmony import */ var _component_mainContent_committee_committee_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/mainContent/committee/committee.component */ "./src/app/component/mainContent/committee/committee.component.ts");
/* harmony import */ var _component_mainContent_activities_activities_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/mainContent/activities/activities.component */ "./src/app/component/mainContent/activities/activities.component.ts");
/* harmony import */ var _component_mainContent_alumni_alumni_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/mainContent/alumni/alumni.component */ "./src/app/component/mainContent/alumni/alumni.component.ts");
/* harmony import */ var _component_mainContent_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/mainContent/gallery/gallery.component */ "./src/app/component/mainContent/gallery/gallery.component.ts");
/* harmony import */ var _component_mainContent_aboutus_principal_principal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/mainContent/aboutus/principal/principal.component */ "./src/app/component/mainContent/aboutus/principal/principal.component.ts");
/* harmony import */ var _component_mainContent_aboutus_faculty_faculty_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/mainContent/aboutus/faculty/faculty.component */ "./src/app/component/mainContent/aboutus/faculty/faculty.component.ts");
/* harmony import */ var _component_mainContent_aboutus_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/mainContent/aboutus/contact/contact.component */ "./src/app/component/mainContent/aboutus/contact/contact.component.ts");
/* harmony import */ var _component_mainContent_grievance_grievance_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/mainContent/grievance/grievance.component */ "./src/app/component/mainContent/grievance/grievance.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: '', component: _component_app_dashboard_app_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["AppDashboardComponent"] },
    { path: 'aboutus', component: _component_mainContent_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_4__["AboutusComponent"] },
    { path: 'academic', component: _component_mainContent_academic_academic_component__WEBPACK_IMPORTED_MODULE_5__["AcademicComponent"] },
    { path: 'admission', component: _component_mainContent_admission_admission_component__WEBPACK_IMPORTED_MODULE_6__["AdmissionComponent"] },
    { path: 'activities', component: _component_mainContent_activities_activities_component__WEBPACK_IMPORTED_MODULE_10__["ActivitiesComponent"] },
    { path: 'student', component: _component_mainContent_student_student_component__WEBPACK_IMPORTED_MODULE_7__["StudentComponent"] },
    { path: 'TnPcell', component: _component_mainContent_tn_pcell_tn_pcell_component__WEBPACK_IMPORTED_MODULE_8__["TnPcellComponent"] },
    { path: 'alumni', component: _component_mainContent_alumni_alumni_component__WEBPACK_IMPORTED_MODULE_11__["AlumniComponent"] },
    { path: 'committee', component: _component_mainContent_committee_committee_component__WEBPACK_IMPORTED_MODULE_9__["CommitteeComponent"] },
    { path: 'grievance', component: _component_mainContent_grievance_grievance_component__WEBPACK_IMPORTED_MODULE_16__["GrievanceComponent"] },
    { path: 'gallery', component: _component_mainContent_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__["GalleryComponent"] },
    { path: 'principal', component: _component_mainContent_aboutus_principal_principal_component__WEBPACK_IMPORTED_MODULE_13__["PrincipalComponent"] },
    { path: 'faculty', component: _component_mainContent_aboutus_faculty_faculty_component__WEBPACK_IMPORTED_MODULE_14__["FacultyComponent"] },
    { path: 'contact', component: _component_mainContent_aboutus_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: false, useHash: true })
            ],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div>\r\n    <my-nav style=\"z-index: 1;position: fixed;top:0px;right:0px;left:0px;\">\r\n    </my-nav>\r\n</div>\r\n<div style=\"padding:25px 5px 10px 5px;\">\r\n    <br>\r\n    <br>\r\n    <router-outlet></router-outlet>\r\n    <ngx-spinner></ngx-spinner>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(spinner) {
        this.spinner = spinner;
        this.title = 'app';
        this.images = [];
        this.images.push({ source: 'https://primefaces.org/primeng/assets/showcase/images/logo.png', alt: 'Description for Image 1', title: 'Title 1' });
        this.images.push({ source: 'https://primefaces.org/primeng/assets/showcase/images/logo.png', alt: 'Description for Image 2', title: 'Title 2' });
        this.images.push({ source: 'https://primefaces.org/primeng/assets/showcase/images/logo.png', alt: 'Description for Image 3', title: 'Title 3' });
    }
    AppComponent.prototype.showSpinner = function () {
        this.spinner.show();
        setTimeout(this.spinner.hide(), 5000);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/galleria */ "./node_modules/primeng/galleria.js");
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_galleria__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _component_app_dashboard_app_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/app-dashboard/app-dashboard.component */ "./src/app/component/app-dashboard/app-dashboard.component.ts");
/* harmony import */ var _component_my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/my-nav/my-nav.component */ "./src/app/component/my-nav/my-nav.component.ts");
/* harmony import */ var _component_mainContent_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/mainContent/aboutus/aboutus.component */ "./src/app/component/mainContent/aboutus/aboutus.component.ts");
/* harmony import */ var _component_mainContent_academic_academic_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/mainContent/academic/academic.component */ "./src/app/component/mainContent/academic/academic.component.ts");
/* harmony import */ var _component_mainContent_activities_activities_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/mainContent/activities/activities.component */ "./src/app/component/mainContent/activities/activities.component.ts");
/* harmony import */ var _component_mainContent_student_student_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/mainContent/student/student.component */ "./src/app/component/mainContent/student/student.component.ts");
/* harmony import */ var _component_mainContent_tn_pcell_tn_pcell_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/mainContent/tn-pcell/tn-pcell.component */ "./src/app/component/mainContent/tn-pcell/tn-pcell.component.ts");
/* harmony import */ var _component_mainContent_alumni_alumni_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/mainContent/alumni/alumni.component */ "./src/app/component/mainContent/alumni/alumni.component.ts");
/* harmony import */ var _component_mainContent_committee_committee_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/mainContent/committee/committee.component */ "./src/app/component/mainContent/committee/committee.component.ts");
/* harmony import */ var _component_mainContent_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/mainContent/gallery/gallery.component */ "./src/app/component/mainContent/gallery/gallery.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _component_mainContent_admission_admission_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/mainContent/admission/admission.component */ "./src/app/component/mainContent/admission/admission.component.ts");
/* harmony import */ var _component_mainContent_aboutus_principal_principal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/mainContent/aboutus/principal/principal.component */ "./src/app/component/mainContent/aboutus/principal/principal.component.ts");
/* harmony import */ var _component_mainContent_aboutus_faculty_faculty_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/mainContent/aboutus/faculty/faculty.component */ "./src/app/component/mainContent/aboutus/faculty/faculty.component.ts");
/* harmony import */ var _component_mainContent_aboutus_contact_contact_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/mainContent/aboutus/contact/contact.component */ "./src/app/component/mainContent/aboutus/contact/contact.component.ts");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _component_GalleryPopup_gallery_viewer_gallery_viewer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./component/GalleryPopup/gallery-viewer/gallery-viewer.component */ "./src/app/component/GalleryPopup/gallery-viewer/gallery-viewer.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _component_mainContent_student_student_details_student_details_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./component/mainContent/student/student-details/student-details.component */ "./src/app/component/mainContent/student/student-details/student-details.component.ts");
/* harmony import */ var _component_header_flag_header_flag_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./component/header-flag/header-flag.component */ "./src/app/component/header-flag/header-flag.component.ts");
/* harmony import */ var _component_mainContent_grievance_grievance_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./component/mainContent/grievance/grievance.component */ "./src/app/component/mainContent/grievance/grievance.component.ts");
/* harmony import */ var _component_mainContent_grievance_add_add_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./component/mainContent/grievance/add/add.component */ "./src/app/component/mainContent/grievance/add/add.component.ts");
/* harmony import */ var _component_mainContent_grievance_login_login_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./component/mainContent/grievance/login/login.component */ "./src/app/component/mainContent/grievance/login/login.component.ts");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _component_mainContent_grievance_student_history_student_history_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./component/mainContent/grievance/student-history/student-history.component */ "./src/app/component/mainContent/grievance/student-history/student-history.component.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _component_my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_9__["MyNavComponent"],
                _component_app_dashboard_app_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["AppDashboardComponent"],
                _component_mainContent_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_10__["AboutusComponent"],
                _component_mainContent_academic_academic_component__WEBPACK_IMPORTED_MODULE_11__["AcademicComponent"],
                _component_mainContent_activities_activities_component__WEBPACK_IMPORTED_MODULE_12__["ActivitiesComponent"],
                _component_mainContent_student_student_component__WEBPACK_IMPORTED_MODULE_13__["StudentComponent"],
                _component_mainContent_tn_pcell_tn_pcell_component__WEBPACK_IMPORTED_MODULE_14__["TnPcellComponent"],
                _component_mainContent_alumni_alumni_component__WEBPACK_IMPORTED_MODULE_15__["AlumniComponent"],
                _component_mainContent_committee_committee_component__WEBPACK_IMPORTED_MODULE_16__["CommitteeComponent"],
                _component_mainContent_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_17__["GalleryComponent"],
                _component_mainContent_admission_admission_component__WEBPACK_IMPORTED_MODULE_19__["AdmissionComponent"],
                _component_mainContent_aboutus_principal_principal_component__WEBPACK_IMPORTED_MODULE_20__["PrincipalComponent"],
                _component_mainContent_aboutus_faculty_faculty_component__WEBPACK_IMPORTED_MODULE_21__["FacultyComponent"],
                _component_mainContent_aboutus_contact_contact_component__WEBPACK_IMPORTED_MODULE_22__["ContactComponent"],
                _component_GalleryPopup_gallery_viewer_gallery_viewer_component__WEBPACK_IMPORTED_MODULE_24__["GalleryViewerComponent"],
                _component_mainContent_student_student_details_student_details_component__WEBPACK_IMPORTED_MODULE_26__["StudentDetailsComponent"],
                _component_header_flag_header_flag_component__WEBPACK_IMPORTED_MODULE_27__["HeaderFlagComponent"],
                _component_mainContent_grievance_grievance_component__WEBPACK_IMPORTED_MODULE_28__["GrievanceComponent"],
                _component_mainContent_grievance_add_add_component__WEBPACK_IMPORTED_MODULE_29__["AddComponent"],
                _component_mainContent_grievance_login_login_component__WEBPACK_IMPORTED_MODULE_30__["LoginComponent"],
                _component_mainContent_grievance_student_history_student_history_component__WEBPACK_IMPORTED_MODULE_32__["StudentHistoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientModule"],
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_33__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
                primeng_galleria__WEBPACK_IMPORTED_MODULE_4__["GalleriaModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_23__["CardModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_34__["NgxSpinnerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/GalleryPopup/gallery-viewer/gallery-viewer.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/component/GalleryPopup/gallery-viewer/gallery-viewer.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/GalleryPopup/gallery-viewer/gallery-viewer.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/component/GalleryPopup/gallery-viewer/gallery-viewer.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\r\n<div class=\"modal fade bd-example-modal-lg\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <!-- <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Modal title</h5> -->\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\r\n          <div class=\"carousel-inner\">\r\n            <div *ngFor=\"let image of images\" class=\"carousel-item {{image.class}}\">\r\n              <img class=\"d-block w-100\" src=\"{{image.source}}\" alt=\"First slide\">\r\n            </div>\r\n\r\n          </div>\r\n          <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n            <span class=\"sr-only\">Previous</span>\r\n          </a>\r\n          <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n            <span class=\"sr-only\">Next</span>\r\n          </a>\r\n        </div>\r\n\r\n      </div>\r\n    <!--   <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/GalleryPopup/gallery-viewer/gallery-viewer.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/component/GalleryPopup/gallery-viewer/gallery-viewer.component.ts ***!
  \***********************************************************************************/
/*! exports provided: GalleryViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryViewerComponent", function() { return GalleryViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryViewerComponent = /** @class */ (function () {
    function GalleryViewerComponent() {
        this._images = [];
    }
    Object.defineProperty(GalleryViewerComponent.prototype, "images", {
        get: function () { return this._images; },
        set: function (_images) { this._images = _images; },
        enumerable: true,
        configurable: true
    });
    GalleryViewerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('header'),
        __metadata("design:type", String)
    ], GalleryViewerComponent.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('images'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], GalleryViewerComponent.prototype, "images", null);
    GalleryViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery-viewer',
            template: __webpack_require__(/*! ./gallery-viewer.component.html */ "./src/app/component/GalleryPopup/gallery-viewer/gallery-viewer.component.html"),
            styles: [__webpack_require__(/*! ./gallery-viewer.component.css */ "./src/app/component/GalleryPopup/gallery-viewer/gallery-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryViewerComponent);
    return GalleryViewerComponent;
}());



/***/ }),

/***/ "./src/app/component/app-dashboard/app-dashboard.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/component/app-dashboard/app-dashboard.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\r\n  margin: 20px;\r\n}\r\n\r\n.dashboard-card {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  bottom: 15px;\r\n}\r\n\r\n.more-button {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n}\r\n\r\n.dashboard-card-content {\r\n  text-align: center;\r\n}\r\n\r\n#ribbon {\r\n  padding: .34em 1em;\r\n  margin: 0;\r\n  position:relative;\r\n  color: #ffffff;\r\n  text-align: center;\r\n  letter-spacing:0.1em;\r\n  text-shadow: 0px -1px 0px rgba(0,0,0,0.3);\r\n  box-shadow: inset 0px 1px 0px rgba(255,255,255,.3),\r\n        inset 0px 0px 20px rgba(0,0,0,0.1),\r\n        0px 1px 1px rgba(0,0,0,0.4);\r\n   background: -webkit-linear-gradient(top,#1eb2df, #17a7d2);\r\n    display: block;\r\n}\r\n\r\n#ribbon:before, #ribbon:after {\r\n  content: \"\";\r\n  width:.2em;\r\n  bottom:-.5em;\r\n  position:absolute;\r\n  display:block;\r\n  border: .9em solid #1eb2df;\r\n  box-shadow:0px 1px 0px rgba(0,0,0,0.4);\r\n  z-index:-2;\r\n}\r\n\r\n#ribbon:before {\r\n  left:-1.35em;\r\n  border-right-width: .75em;\r\n  border-left-color:transparent;\r\n}\r\n\r\n#ribbon:after {\r\n  right:-1.35em;\r\n  border-left-width: .75em;\r\n  border-right-color:transparent;\r\n}\r\n\r\n#content:before, #content:after {\r\n  content:\"\";\r\n  bottom:-.5em;\r\n  position:absolute;\r\n  display:block;\r\n  border-style:solid;\r\n  border-color: #0675b3 transparent transparent transparent;\r\n  z-index:-1;\r\n}\r\n\r\n#content:before {\r\n  left: 0;\r\n  border-width: .5em 0 0 .5em;\r\n}\r\n\r\n#content:after {\r\n  right: 0;\r\n  border-width: .5em .5em 0 0;\r\n}"

/***/ }),

/***/ "./src/app/component/app-dashboard/app-dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/component/app-dashboard/app-dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\r\n\r\n\r\n  <!--   <mat-grid-list cols=\"2\" rowHeight=\"350px\">\r\n    <mat-grid-tile *ngFor=\"let card of cards\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\r\n      <mat-card class=\"dashboard-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            {{card.title}}\r\n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\r\n              <button mat-menu-item>Expand</button>\r\n              <button mat-menu-item>Remove</button>\r\n            </mat-menu>\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <div>Card Content Here</div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n  </mat-grid-list> -->\r\n\r\n  <div class=\"container\">\r\n      <div id=\"ribbon\">\r\n          <span id=\"content\">Tevo Sada Dnynamaya Pradip !</span>\r\n        </div>\r\n    <!--  <h1 class=\"mat-h1\">Dashboard</h1> -->\r\n    <!-- Heading Row -->\r\n    <div class=\"row my-4\">\r\n      <div class=\"col-lg-8\">\r\n        <img class=\"img-fluid rounded\" src=\"./assets/img/college/banner.jpg\" alt=\"\">\r\n      </div>\r\n      <!-- /.col-lg-8 -->\r\n      <div class=\"col-lg-4 text-justify\">\r\n        <p class=\"ribbon\">\r\n          <span class=\"text\"><strong class=\"bold\"></strong>Vision\r\n          </span>\r\n        </p>\r\n        <!--     <h5>Vision</h5> -->\r\n        <p>\r\n          <small>\"To offer, paramount educational facilities to develope competent Pharma graduates in rural\r\n            area\"</small>\r\n        </p>\r\n        <p class=\"ribbon\">\r\n          <span class=\"text\"><strong class=\"bold\"></strong>Mission\r\n          </span>\r\n        </p>\r\n        <p>\r\n          <small>\"To build up confidence and knowledge about medicine in the students to deliver best professional and\r\n            ethical service\r\n            to the mankind.\r\n            <p>To imbibe creative and innovative pharmacy practice amongst under graduates students.\r\n              <br>To educate and train the students to discover and manufacture drugs of quality.\"</p>\r\n          </small>\r\n        </p>\r\n      </div>\r\n      <!-- /.col-md-4 -->\r\n    </div>\r\n    <!-- /.row -->\r\n\r\n    <!-- Call to Action Well -->\r\n    <!--     <div class=\"card text-white bg-secondary my-4 text-center\">\r\n      <div class=\"card-body\">\r\n        <p class=\"text-white m-0\">Tevo Sada Dnynamaya Pradip !</p>\r\n      </div>\r\n    </div> -->\r\n\r\n\r\n\r\n\r\n\r\n    <!-- Content Row -->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 mb-4\">\r\n        <div class=\"card h-100\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-center\">Salient Features</h5>\r\n\r\n            <div class=\"card-text\">\r\n              <ul>\r\n                <li>Affilated to Solapur University</li>\r\n                <li>Qualified & Experienced Teaching Staf</li>\r\n                <li>Excellent Academic Result & Healthy Academic Environment.</li>\r\n                <li>Well Equipped Laboratories.</li>\r\n                <li>Spacious & well furnished classrooms</li>\r\n                <li>Rich Library</li>\r\n                <li>Excellent playground.</li>\r\n                <li>Exposure to various co-curricular and cultural activities.</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- /.col-md-4 -->\r\n      <div class=\"col-md-4 mb-4\">\r\n        <div class=\"card h-100\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-center\">Important Links</h5>\r\n            <div class=\"card-text\">\r\n              <ul>\r\n                <li *ngFor=\"let link of imporatantLinks\">\r\n                  <a href=\"{{link.filename ? link.filename : link.link}}\" target=\"_blank\">{{link.displayText}}</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <!-- /.col-md-4 -->\r\n      <div class=\"col-md-4 mb-4\">\r\n        <div class=\"card h-100\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-center\">Notifications</h5>\r\n            <div class=\"card-text\">\r\n              <ul>\r\n                <li *ngFor=\"let link of admissionLink\"> <a href=\"../assets/documentation/admission/19-20/{{link.filename ? link.filename : link.link}}\"\r\n                    target=\"_blank\">{{link.displayText}}</a></li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <!-- /.col-md-4 -->\r\n\r\n    </div>\r\n    <!-- /.row -->\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/app-dashboard/app-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/app-dashboard/app-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: AppDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDashboardComponent", function() { return AppDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constant_importantLinks_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constant/importantLinks.constant */ "./src/app/constant/importantLinks.constant.ts");
/* harmony import */ var src_app_constant_admission_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constant/admission.constant */ "./src/app/constant/admission.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppDashboardComponent = /** @class */ (function () {
    function AppDashboardComponent() {
        this.admissionLink = src_app_constant_admission_constant__WEBPACK_IMPORTED_MODULE_2__["admissionLink"];
        this.cards = [
            { title: 'Card 1', cols: 2, rows: 1 },
            { title: 'Card 2', cols: 1, rows: 1 }
        ];
        this.imporatantLinks = _constant_importantLinks_constant__WEBPACK_IMPORTED_MODULE_1__["importantLinks"];
    }
    AppDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./app-dashboard.component.html */ "./src/app/component/app-dashboard/app-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./app-dashboard.component.css */ "./src/app/component/app-dashboard/app-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppDashboardComponent);
    return AppDashboardComponent;
}());



/***/ }),

/***/ "./src/app/component/header-flag/header-flag.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/header-flag/header-flag.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headerName{\r\n    border-left: 15px solid yellow;\r\n}"

/***/ }),

/***/ "./src/app/component/header-flag/header-flag.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/header-flag/header-flag.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\r\n  <div class=\"\">\r\n    <div class=\"col-lg-12 headerName\">\r\n      <h6>{{firstMessage}}</h6>\r\n      <h4>{{secondMessage}}</h4>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/header-flag/header-flag.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/header-flag/header-flag.component.ts ***!
  \****************************************************************/
/*! exports provided: HeaderFlagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFlagComponent", function() { return HeaderFlagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderFlagComponent = /** @class */ (function () {
    function HeaderFlagComponent() {
        this.firstMessage = 'erter';
        this.secondMessage = 'fgdf';
    }
    HeaderFlagComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderFlagComponent.prototype, "firstMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderFlagComponent.prototype, "secondMessage", void 0);
    HeaderFlagComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-flag',
            template: __webpack_require__(/*! ./header-flag.component.html */ "./src/app/component/header-flag/header-flag.component.html"),
            styles: [__webpack_require__(/*! ./header-flag.component.css */ "./src/app/component/header-flag/header-flag.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderFlagComponent);
    return HeaderFlagComponent;
}());



/***/ }),

/***/ "./src/app/component/mainContent/aboutus/aboutus.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/component/mainContent/aboutus/aboutus.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/mainContent/aboutus/aboutus.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/component/mainContent/aboutus/aboutus.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"s_content\">\r\n    <h1 class=\"s_ribbon\">About Us</h1>\r\n    <hr>\r\n    <div class=\"row\" style=\"border: none;\">\r\n\r\n      <div class=\"panel col-lg-4  text-center center-block\" style=\"background:none;\">\r\n        <img alt=\"Founder\" src=\"./assets/img/college/Maharshi.jpg\" class=\"img-responsive\"\r\n          style=\"max-height:134px;margin: 0 auto;border-radius: 0px 10px;border: 2px solid;box-shadow: 0px 0px 10px;\">\r\n        <p>\r\n          <strong class=\"text-info\">Late Shri. Shankarrao Mohite-Patil</strong>\r\n          <br>\r\n          <small>Founder,</small>\r\n          <br>\r\n          <small>Shikshan Prasarak Mandal, Akluj.</small>\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"panel col-lg-4 text-center center-block\" style=\"background:none;\">\r\n        <img alt=\"Founder\" src=\"./assets/img/college/logo.png\" class=\"img-responsive\"\r\n          style=\"max-height:134px;margin: 0 auto;border-radius: 0px 10px;border: 2px solid;box-shadow: 0px 0px 10px;\">\r\n        <p>\r\n          <br>\r\n          <strong class=\"text-info\">Shikshan Prasarak Mandal, Akluj</strong>\r\n          <br>\r\n\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"panel col-lg-4  text-center\" style=\"background:none;\">\r\n        <img alt=\"Founder\" src=\"./assets/img/college/president.png\" class=\"img-responsive\"\r\n          style=\"max-height:134px;margin: 0 auto;border-radius: 0px 10px;border: 2px solid;box-shadow: 0px 0px 10px;\">\r\n        <p>\r\n          <strong class=\"text-info\">Hon. Shri Jaysinh Mohite-Patil</strong>\r\n          <br>\r\n          <small>President,</small>\r\n          <br>\r\n          <small>Shikshan Prasarak Mandal, Akluj.</small>\r\n        </p>\r\n      </div>\r\n      <br><br>\r\n      <div class=\"col-lg-12 text-justify \">\r\n        <p>\r\n          Late Sahakar Maharshi Shankarrao Mohite-Patil founder member established Shikshan Prasarak MandaL Akluj in\r\n          1948 with the\r\n          view changing the standards of society in all respects through education. Shikshan Prasarak MandaL Akluj was\r\n          started\r\n          College of Pharmacy in 2008. Now this institute is one of the leading pharmacy educationalinstitute in\r\n          Maharashtra.\r\n        </p>\r\n\r\n        <p>Shikshan Prasarak Mandal (SPM) is one of the leading educational institutions in Maharashtra. It was founded\r\n          by a dedicated\r\n          and committed Late Shankarrao Mohite-Patil in 1948. The institution has evolved and made a mark in the arena\r\n          of education\r\n          allover Maharashtra due to the ceaseless efforts of the teaching and administrative staff and the foresight of\r\n          the\r\n          management.\r\n        </p>\r\n        <p>\r\n          SPM runs different educational institutions, which include Preprimary, Primary, Secondary, higher Secondary\r\n          education and\r\n          technical courses covering pharmacy, agriculture and engineering.</p>\r\n        <p>\r\n          SPM has made rapid progress under the foresighted leadership of its Chairman Mr. Jaysinh S. Mohite-Patil.\r\n          SPM's College of\r\n          Pharmacy, Akluj was started in the year 2008 by our beloved chairman Mr.Jaysinh S. Mohite-Patil. </p>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <!-- <app-header-flag [firstMessage]=\"About\" [secondMessage]=\"Us\"> </app-header-flag> -->\r\n\r\n  <br>\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/component/mainContent/aboutus/aboutus.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/mainContent/aboutus/aboutus.component.ts ***!
  \********************************************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/component/mainContent/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.css */ "./src/app/component/mainContent/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/component/mainContent/aboutus/contact/contact.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/component/mainContent/aboutus/contact/contact.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/mainContent/aboutus/contact/contact.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/component/mainContent/aboutus/contact/contact.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!-- <script>\r\n   App.controller('GMapController', function($scope, $timeout){\r\n     $scope.mapLoading = true;\r\n     $timeout(function(){\r\n       $scope.mapAddress = \"Shikshan Prasarak Mandal’s College of Pharmacy\";\r\n       $scope.mapLoading = false;\r\n     }, 2000);\r\n   });\r\n</script> -->\r\n<div class=\"container\">\r\n\r\n    <div class=\"s_content\">\r\n        <h1 class=\"s_ribbon\">Contact us</h1>\r\n        <hr>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 portfolio-item\">\r\n              <div class=\"card h-100\">\r\n        \r\n                <div class=\"card-body\">\r\n                  <h4 class=\"card-title\">\r\n                    <a>Address</a>\r\n                  </h4>\r\n                  <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.1850740970895!2d75.02559821440798!3d17.87679759321151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc4745715555555%3A0x1f3bb9b1b1b72ecb!2sShikshan+Prasarak+Mandal%E2%80%99s+College+of+Pharmacy!5e0!3m2!1sen!2sin!4v1472680781658\"\r\n                    width=\"100%\" height=\"auto\" frameborder=\"0\" style=\"border:0;min-height:300px\" allowfullscreen></iframe>\r\n                  <div class=\"card-text\">\r\n                    <address>\r\n                      College of Pharmacy, Akluj\r\n                      <br/> Sangola Road, Malewadi-Akluj Tal. Malshiras Dist. Solapur\r\n                    </address>\r\n                    <address>\r\n                      <em class=\"fa fa-phone text-danger\"></em>\r\n                      <b>Ph. No: </b> (02185) 224243\r\n                      <em class=\"icon-envelope text-danger\"></em>\r\n                      <b> Email: </b> copakluj@gmail.com\r\n                    </address>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-6 portfolio-item\">\r\n              <div class=\"card h-100\">\r\n                <div class=\"card-body\">\r\n                  <h4 class=\"card-title\">\r\n                    <a >Send us Message</a>\r\n                  </h4>\r\n                  <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\">\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Phone\">\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <textarea name=\"\" id=\"message\" cols=\"30\" rows=\"7\" class=\"form-control\" placeholder=\"Message\"></textarea>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <input type=\"submit\" class=\"btn btn-primary btn-md\" value=\"Send Message\">\r\n                  </div>\r\n        \r\n        \r\n                </div>\r\n              </div>\r\n            </div>\r\n        \r\n          </div>\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/component/mainContent/aboutus/contact/contact.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/component/mainContent/aboutus/contact/contact.component.ts ***!
  \****************************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/component/mainContent/aboutus/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/component/mainContent/aboutus/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/component/mainContent/aboutus/faculty/faculty.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/component/mainContent/aboutus/faculty/faculty.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile{\r\n    margin-bottom:10px;\r\n}\r\n..card-subtitle{\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    max-width: 50%;\r\n}"

/***/ }),

/***/ "./src/app/component/mainContent/aboutus/faculty/faculty.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/component/mainContent/aboutus/faculty/faculty.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"container\">\r\n        <div class=\"s_content\">\r\n            <h1 class=\"s_ribbon\">Faculty</h1>\r\n            <hr>\r\n \r\n<div class=\"row\">\r\n\r\n  <div class=\"col-sm-4 profile\" *ngFor=\"let faculty of facultyDetails \">\r\n    <p-card styleClass=\"ui-card-shadow\">\r\n      <p-header>\r\n        <img src=\"Card\" src=\"{{faculty.image}}\">\r\n      </p-header>\r\n\r\n      <h5 class=\"mb-0\">{{faculty.name}}</h5> <br>\r\n      <p class=\"card-subtitle mb-2 text-muted\">Designation: {{faculty.designation}}</p>\r\n      <p class=\"card-subtitle mb-2 text-muted\">Qualification: {{faculty.Qualification}}</p>\r\n      <p class=\"card-subtitle mb-2 text-muted\">Specialization: {{faculty.specialization}}</p>\r\n      <p class=\"card-subtitle mb-2 text-muted\">Experience: {{faculty.experience}}</p>\r\n      <p class=\"card-subtitle mb-2 text-muted\">Email:\r\n        <a href=\"mailTo://{{faculty.email}}\" >{{faculty.email}}</a>\r\n      </p>\r\n    </p-card>\r\n  </div>\r\n</div>\r\n</div></div>"

/***/ }),

/***/ "./src/app/component/mainContent/aboutus/faculty/faculty.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/component/mainContent/aboutus/faculty/faculty.component.ts ***!
  \****************************************************************************/
/*! exports provided: FacultyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyComponent", function() { return FacultyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constant_applicationDetails_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../constant/applicationDetails.constant */ "./src/app/constant/applicationDetails.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FacultyComponent = /** @class */ (function () {
    function FacultyComponent() {
        this.facultyDetails = _constant_applicationDetails_constant__WEBPACK_IMPORTED_MODULE_1__["facultyDetails"];
    }
    FacultyComponent.prototype.ngOnInit = function () {
    };
    FacultyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faculty',
            template: __webpack_require__(/*! ./faculty.component.html */ "./src/app/component/mainContent/aboutus/faculty/faculty.component.html"),
            styles: [__webpack_require__(/*! ./faculty.component.css */ "./src/app/component/mainContent/aboutus/faculty/faculty.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FacultyComponent);
    return FacultyComponent;
}());



/***/ }),

/***/ "./src/app/component/mainContent/aboutus/principal/principal.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/component/mainContent/aboutus/principal/principal.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/mainContent/aboutus/principal/principal.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/component/mainContent/aboutus/principal/principal.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"s_content\">\r\n        <h1 class=\"s_ribbon\">Principal's Desk</h1>\r\n        <hr></div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/mainContent/aboutus/principal/principal.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/component/mainContent/aboutus/principal/principal.component.ts ***!
  \********************************************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrincipalComponent = /** @class */ (function () {
    function PrincipalComponent() {
    }
    PrincipalComponent.prototype.ngOnInit = function () {
    };
    PrincipalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-principal',
            template: __webpack_require__(/*! ./principal.component.html */ "./src/app/component/mainContent/aboutus/principal/principal.component.html"),
            styles: [__webpack_require__(/*! ./principal.component.css */ "./src/app/component/mainContent/aboutus/principal/principal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrincipalComponent);
    return PrincipalComponent;
}());



/***/ }),

/***/ "./src/app/component/mainContent/academic/academic.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/component/mainContent/academic/academic.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/mainContent/academic/academic.component.html":
/*!************************************************************************!*\
  !*** ./src/app/component/mainContent/academic/academic.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"container\">\r\n    <div class=\"s_content\">\r\n        <h1 class=\"s_ribbon\">Academic Details</h1>\r\n        <hr>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6 portfolio-item\">\r\n            <div class=\"card h-100\">\r\n      \r\n              <div class=\"card-body\">\r\n                <h4 class=\"card-title\">\r\n                  <a>Academic</a>\r\n                </h4>\r\n                No updates found !\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-6 portfolio-item\">\r\n            <div class=\"card h-100\">\r\n              <div class=\"card-body\" style=\"max-height: 500px;\">\r\n                <h4 class=\"card-title\">\r\n                  <!-- <a >Tweeter Notifications</a> -->\r\n                </h4>\r\n                <a class=\"twitter-timeline\" href=\"https://twitter.com/CAkluj?ref_src=twsrc%5Etfw\">Tweets by CAkluj</a> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      \r\n        </div>\r\n      \r\n      </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/mainContent/academic/academic.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/mainContent/academic/academic.component.ts ***!
  \**********************************************************************/
/*! exports provided: AcademicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicComponent", function() { return AcademicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AcademicComponent = /** @class */ (function () {
    function AcademicComponent() {
    }
    AcademicComponent.prototype.ngOnInit = function () {
    };
    AcademicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-academic',
            template: __webpack_require__(/*! ./academic.component.html */ "./src/app/component/mainContent/academic/academic.component.html"),
            styles: [__webpack_require__(/*! ./academic.component.css */ "./src/app/component/mainContent/academic/academic.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AcademicComponent);
    return AcademicComponent;
}());



/***/ }),

/***/ "./src/app/component/mainContent/activities/activities.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/component/mainContent/activities/activities.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/mainContent/activities/activities.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/component/mainContent/activities/activities.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"s_content\">\r\n        <h1 class=\"s_ribbon\">Activities </h1>\r\n        <hr></div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/mainContent/activities/activities.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/mainContent/activities/activities.component.ts ***!
  \**************************************************************************/
/*! exports provided: ActivitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesComponent", function() { return ActivitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivitiesComponent = /** @class */ (function () {
    function ActivitiesComponent() {
    }
    ActivitiesComponent.prototype.ngOnInit = function () {
    };
    ActivitiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activities',
            template: __webpack_require__(/*! ./activities.component.html */ "./src/app/component/mainContent/activities/activities.component.html"),
            styles: [__webpack_require__(/*! ./activities.component.css */ "./src/app/component/mainContent/activities/activities.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ActivitiesComponent);
    return ActivitiesComponent;
}());



/***/ }),

/***/ "./src/app/component/mainContent/admission/admission.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/component/mainContent/admission/admission.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/mainContent/admission/admission.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/component/mainContent/admission/admission.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"s_content\">\r\n        <h1 class=\"s_ribbon\">Admission</h1>\r\n        <hr>\r\n        <div class=\"accordion\" id=\"accordionExample\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingOne\">\r\n                <h5 class=\"mb-0\">\r\n                  <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#Courses\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                    Courses Offered, Affilation and Intake\r\n                  </button>\r\n                </h5>\r\n              </div>\r\n        \r\n              <div id=\"Courses\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\r\n                <div class=\"card-body\">\r\n                  Admission procedure will be as laid down by the Government of Maharashtra, Directorate of Technical Education (www.dte.org.in)\r\n                  & Pravesh Niyantran Samiti (PNS) from time to time.\r\n                  <table class=\"table table-bordered bg-white\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <td>\r\n                          <b> Course Offered </b>\r\n                        </td>\r\n                        <td>\r\n                          B. Pharmacy\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>\r\n                          <b> Duration</b>\r\n                        </td>\r\n                        <td>04 years Semester Pattern (Total- 08 Semester)\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>\r\n                          <b>Affiliation</b>\r\n                        </td>\r\n                        <td>\r\n                          Affiliated to Solapur University, Solapur\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>\r\n                          <b> Intake Capacity</b>\r\n                        </td>\r\n                        <td>\r\n                          60\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n        \r\n        \r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingOne\">\r\n                <h5 class=\"mb-0\">\r\n                  <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#Eligibility\" aria-expanded=\"true\" aria-controls=\"Eligibility\">\r\n                    Eligibility Criteria\r\n                  </button>\r\n                </h5>\r\n              </div>\r\n              <div id=\"Eligibility\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\r\n                <div class=\"card-body\">\r\n                  <strong>Eligibility criteria for admission to First Year of Degree course in Pharmacy</strong>\r\n                  <ol>\r\n                    <li>Candidate should be an Indian National and should have passed the HSC (Std.XII) examination of Maharashtra State\r\n                      Board of Secondary and Higher Secondary Education or its equivalent examination with subjects English, Physics,\r\n                      Chemistry, and Mathematics/ Biology/ Biotechnology/ Technical Vocational subject.</li>\r\n                    <li>Secured minimum 50 % marks (minimum 45 % marks in case of candidates of Backward class categories and Persons\r\n                      with Disability belonging only to Maharashtra State) in the subjects Physics, Chemistry, and Mathematics/ Biology/\r\n                      Biotechnology/ Technical Vocational subject added together (Maximum of marks obtained in Mathematics/ Biology/\r\n                      Biotechnology/ Technical Vocational subject shall be considered for the purpose of addition).</li>\r\n                    <li>Obtained a non-zero score in subjects Physics, Chemistry, and Mathematics/ Biology added together at MHT-CET.</li>\r\n                    <li>Rounding of the percentage of marks for deciding eligibility for admission. In case percentage, marks (converted\r\n                      out of 10) in the subjects Physics, Chemistry, and Biology/ Mathematics/ Biotechnology/ Technical Vocational\r\n                      Subjects added together at HSC (Std.XII), comes in fraction then percentage of marks shall be rounded off as\r\n                      explained in the example for the purpose of deciding the eligibility of the candidate.\r\n                    </li>\r\n                    <li>\r\n                      <b>Ex. </b>If the percentage of marks comes out to be 39.50% to 39.9% then it shall be rounded to 40% and if the\r\n                      percentage of marks comes out to be 39.01% to 39.49% then it shall be rounded to 39%.</li>\r\n                  </ol>\r\n                  <br>\r\n                  <strong>Eligibility criteria of Candidates who have passed/ passing Diploma in Pharmacy and seeking admission to First\r\n                    Year of Pharmacy</strong>\r\n                  <p>\r\n                    If seats remain vacant, Diploma holders who have passed the Diploma course in Pharmacy with minimum of 50% marks( 45% marks\r\n                    in case of candidates of backward class categories) and medium of instruction as English from AICTE, PCI approved\r\n                    Polytechnics can be considered for admission to First Year B. Pharm., as per the government Rules.\r\n                  </p>\r\n                  <br>\r\n                  <strong>Second Year B. Pharmacy</strong>\r\n                  <p>\r\n                    The Candidate must be an Indian National and should have passed Post-SSC or Post-HSC Diploma Course in Pharmacy with at least\r\n                    45.00 % marks (40.00 % marks in case of candidates of Backward class categories belonging only to Maharashtra\r\n                    State) from an AICTE approved Institution with English as the medium of instruction at Diploma level.\r\n        \r\n        \r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingTwo\">\r\n                <h5 class=\"mb-0\">\r\n                  <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#Procedure\" aria-expanded=\"false\"\r\n                    aria-controls=\"collapseTwo\">\r\n                    Admission Procedure\r\n                  </button>\r\n                </h5>\r\n              </div>\r\n              <div id=\"Procedure\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\r\n                <div class=\"card-body\">\r\n                  <strong>F. Y. B. PHARMACY</strong>\r\n                  <p>Out of total admissions at B. Pharm (i.e. 60), about 80% admissions are done through centralised Admission Procedure\r\n                    (CAP) run by State Govt. on the basis of MHT-CET score. The MHT-CET test is conducted by the Directorate of Technical\r\n                    Education, Mumbai. The centralized admissions are done by DTE, Mumbai, having website\r\n                    <a href=\"http://www.dte.org.in\">www.dte.org.in</a> Remaining 20% admissions are done by the Management at the Institute level on the basis of\r\n                    MHT-CET and H.S.C. results.\r\n                    <br>\r\n                    <strong>a) MHT-CET through Govt. Centralised Admission – 48 (80%)</strong>\r\n                    <br>\r\n                    <strong>b) MHT-CET / HSC result through Management – 12 (20%)</strong>\r\n                  </p>\r\n                  <br>\r\n                  <strong>DIRECT SECOND YEAR</strong>\r\n                  <p>\r\n                    Admissions are done through Centralised Admission Procedure run by State Govt. on the basis of Diploma Score. The centralized\r\n                    admissions are done by DTE, Mumbai, having website www.dte.org.in. If seats remains vacant after Centralised\r\n                    Admission Procedure, admissions are done by the Management at the Institute level. Number of seats allotted to\r\n                    CET (State conducted test)\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingThree\">\r\n                <h5 class=\"mb-0\">\r\n                  <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#FeeStructure\" aria-expanded=\"false\"\r\n                    aria-controls=\"collapseThree\">\r\n                    Fee Structure\r\n                  </button>\r\n                </h5>\r\n              </div>\r\n              <div id=\"FeeStructure\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\r\n                <div class=\"card-body\">\r\n                    <p class=\"text-danger\">The Interim Fee to Shikshan Shulka Samiti (M.S) for year 2018-19</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingTwo\">\r\n                <h5 class=\"mb-0\">\r\n                  <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#DocumentsRequired\" aria-expanded=\"false\"\r\n                    aria-controls=\"collapseTwo\">\r\n                    Documents Required\r\n                  </button>\r\n                </h5>\r\n              </div>\r\n              <div id=\"DocumentsRequired\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\r\n                <div class=\"card-body\">\r\n                  <ul>\r\n                    <li>MHT-CET score card</li>\r\n                    <li>HSC Marksheet and Board Certificate / Diploma in Pharmacy Mark sheet (For Diploma students)</li>\r\n                    <li>SSC Mark sheet and Board Certificate</li>\r\n                    <li>Leaving Certificate</li>\r\n                    <li>Age, Domicile Certificate</li>\r\n                    <li>Nationality Certificate</li>\r\n                    <li>Gap certificate\r\n                      <small>(if applicable)</small>\r\n                    </li>\r\n                    <li>Caste Certificate\r\n                      <small>(if applicable)</small>\r\n                    </li>\r\n                    <li>Caste/Tribe Validity Certificate\r\n                      <small>(if applicable)</small>\r\n                    </li>\r\n                    <li>Non Creamy Layer Certificate\r\n                      <small>(if applicable)</small>\r\n                    </li>\r\n                    <li>Defense Service Certificate\r\n                      <small>(if applicable)</small>\r\n                    </li>\r\n                    <li>Physical Handicapped Certificate\r\n                      <small>(if applicable)</small>\r\n                    </li>\r\n                    <li>Passport Size photographs</li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" id=\"headingThree\">\r\n                <h5 class=\"mb-0\">\r\n                  <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#Links\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n                    Important Links\r\n                  </button>\r\n                </h5>\r\n              </div>\r\n              <div id=\"Links\" class=\"collapse\"  aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\r\n                <div class=\"card-body\">\r\n                        <ul>\r\n                       <!--    <li>\r\n                            <a href=\"./assets/documentation/18_19_admission/InstitutelevelAdmissionschedule.pdf\" target=\"_blank\">1. Schedule of First Year B. Pharmacy admission 2018-19 under Institute level quota and Seats remaining after\r\n                              CAP rounds</a>\r\n                          </li>\r\n                          <li>\r\n                            <a href=\"./assets/documentation/18_19_admission/Advertisement18-19.jpg\" target=\"_blank\">2. Advertisement for First Year B. Pharmacy admission 2018-19 under Institute level quota and Seats remaining\r\n                              after CAP rounds</a>\r\n                          </li> -->\r\n                          <li *ngFor=\"let link of admissionLink\">\r\n                              <a href=\"../assets/documentation/admission/19-20/{{link.filename ? link.filename : link.link}}\" target=\"_blank\">{{link.displayText}}</a>\r\n                          </li>\r\n                        </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <h1 class=\"mat-h1\">Admission</h1>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/component/mainContent/admission/admission.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/mainContent/admission/admission.component.ts ***!
  \************************************************************************/
/*! exports provided: AdmissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionComponent", function() { return AdmissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_constant_admission_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constant/admission.constant */ "./src/app/constant/admission.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdmissionComponent = /** @class */ (function () {
    function AdmissionComponent() {
        this.admissionLink = src_app_constant_admission_constant__WEBPACK_IMPORTED_MODULE_1__["admissionLink"];
    }
    AdmissionComponent.prototype.ngOnInit = function () {
    };
    AdmissionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admission',
            template: __webpack_require__(/*! ./admission.component.html */ "./src/app/component/mainContent/admission/admission.component.html"),
            styles: [__webpack_require__(/*! ./admission.component.css */ "./src/app/component/mainContent/admission/admission.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdmissionComponent);
    return AdmissionComponent;
}());



/***/ }),

/***/ "./src/app/component/mainContent/alumni/alumni.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/mainContent/alumni/alumni.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/mainContent/alumni/alumni.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/mainContent/alumni/alumni.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"container\">\r\n        <div class=\"s_content\">\r\n            <h1 class=\"s_ribbon\">Alumni</h1>\r\n            <hr>\r\n          \r\n  <div class=\"row\">\r\n\r\n      <div class=\"col-md-8\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n              Alumni Registration\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <p class=\"card-text\">Please click on the following link to proceed for Registration</p>\r\n            <a href=\"https://docs.google.com/forms/d/e/1FAIpQLSfR04Vx1RDELymjTHsBf6almZXBvIPz7eqRyxI3XorAs-fbkQ/viewform\" target=\"_blank\" class=\"btn btn-primary\">click here</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n              Notifications\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <p>No new notifications found.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n  \r\n  \r\n    </div>\r\n          </div>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/component/mainContent/alumni/alumni.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/mainContent/alumni/alumni.component.ts ***!
  \******************************************************************/
/*! exports provided: AlumniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlumniComponent", function() { return AlumniComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlumniComponent = /** @class */ (function () {
    function AlumniComponent() {
    }
    AlumniComponent.prototype.ngOnInit = function () {
    };
    AlumniComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alumni',
            template: __webpack_require__(/*! ./alumni.component.html */ "./src/app/component/mainContent/alumni/alumni.component.html"),
            styles: [__webpack_require__(/*! ./alumni.component.css */ "./src/app/component/mainContent/alumni/alumni.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlumniComponent);
    return AlumniComponent;
}());



/***/ }),

/***/ "./src/app/component/mainContent/committee/committee.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/component/mainContent/committee/committee.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/mainContent/committee/committee.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/component/mainContent/committee/committee.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"s_content\">\r\n        <h1 class=\"s_ribbon\">Commitee</h1>\r\n        <hr></div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/mainContent/committee/committee.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/mainContent/committee/committee.component.ts ***!
  \************************************************************************/
/*! exports provided: CommitteeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitteeComponent", function() { return CommitteeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommitteeComponent = /** @class */ (function () {
    function CommitteeComponent() {
    }
    CommitteeComponent.prototype.ngOnInit = function () {
    };
    CommitteeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-committee',
            template: __webpack_require__(/*! ./committee.component.html */ "./src/app/component/mainContent/committee/committee.component.html"),
            styles: [__webpack_require__(/*! ./committee.component.css */ "./src/app/component/mainContent/committee/committee.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommitteeComponent);
    return CommitteeComponent;
}());



/***/ }),

/***/ "./src/app/component/mainContent/gallery/gallery.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/component/mainContent/gallery/gallery.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid img{\r\n    width: 100%;\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.grid img:hover{\r\n    cursor: pointer;\r\n    -webkit-filter: grayscale(1.5);\r\n    -moz-filter: grayscale(1.5);\r\n    -o-filter: grayscale(1.5);\r\n    -ms-filter: grayscale(1.5);\r\n    filter: grayscale(1.5);\r\n\r\n    -webkit-transform: scale(1.10);\r\n\r\n            transform: scale(1.10);\r\n    \r\n\r\n    z-index:10;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/mainContent/gallery/gallery.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/component/mainContent/gallery/gallery.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n    <div class=\"s_content\">\r\n        <h1 class=\"s_ribbon\">Gallery</h1>\r\n        <hr>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3\" *ngFor=\"let image of images; let i=index;\">\r\n              <div class=\"grid\" style=\"margin-bottom: 15px;\">\r\n                <img src=\"{{image.source}}\" class=\"img img-responsive\" alt=\"...\" style=\"width:100%\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"\r\n                  (click)=\"setCurrentImage(image);\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n</div>\r\n\r\n\r\n<!-- Button trigger modal -->\r\n  <app-gallery-viewer [header]=\"\" [images]=\"imageReady\"></app-gallery-viewer>"

/***/ }),

/***/ "./src/app/component/mainContent/gallery/gallery.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/mainContent/gallery/gallery.component.ts ***!
  \********************************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
        this.imageReady = [];
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.images = [];
        this.images.push({ source: 'assets/img/gallery/academic/1.jpg', alt: 'Description for Image 1', title: 'Title 1' });
        this.images.push({ source: 'assets/img/gallery/academic/2.jpg', alt: 'Description for Image 2', title: 'Title 2' });
        this.images.push({ source: 'assets/img/gallery/academic/3.jpg', alt: 'Description for Image 3', title: 'Title 3' });
        this.images.push({ source: 'assets/img/gallery/academic/4.jpg', alt: 'Description for Image 4', title: 'Title 4' });
        this.images.push({ source: 'assets/img/gallery/academic/5.jpg', alt: 'Description for Image 5', title: 'Title 5' });
        this.images.push({ source: 'assets/img/gallery/academic/6.jpg', alt: 'Description for Image 6', title: 'Title 6' });
        this.images.push({ source: 'assets/img/gallery/academic/7.jpg', alt: 'Description for Image 7', title: 'Title 7' });
        this.images.push({ source: 'assets/img/gallery/academic/8.jpg', alt: 'Description for Image 8', title: 'Title 8' });
        this.images.push({ source: 'assets/img/gallery/academic/9.jpg', alt: 'Description for Image 9', title: 'Title 9' });
        this.images.push({ source: 'assets/img/gallery/academic/10.jpg', alt: 'Description for Image 10', title: 'Title 10' });
        this.images.push({ source: 'assets/img/gallery/academic/11.jpg', alt: 'Description for Image 11', title: 'Title 11' });
    };
    GalleryComponent.prototype.setCurrentImage = function (selectedImage) {
        this.imageReady = this.images;
        this.imageReady.forEach(function (image) { image.class = image === selectedImage ? 'active' : ''; });
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/component/mainContent/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/component/mainContent/gallery/gallery.component.css")]
        })
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/component/mainContent/grievance/add/add.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/component/mainContent/grievance/add/add.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input:invalid { \r\n    border: 2px solid rgb(241, 202, 202);\r\n}\r\n\r\nselect:invalid { \r\n    border: 2px solid rgb(241, 202, 202);\r\n}"

/***/ }),

/***/ "./src/app/component/mainContent/grievance/add/add.component.html":
/*!************************************************************************!*\
  !*** ./src/app/component/mainContent/grievance/add/add.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\r\n\r\n\r\n\r\n</div>\r\n<form  #uploadForm=\"ngForm\">\r\n    <div class=\"form-row\">\r\n  <div class=\"form-group col-md-8\">\r\n    <label for=\"title\">Grievance Title</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" [(ngModel)]=\"title\" maxlength=\"50\" placeholder=\"Specify the title\"    required>\r\n    <small class=\"text-muted\">Specify the subject line for your grievance.</small>\r\n  </div>\r\n  <div class=\"form-group col-md-4\">\r\n      <label for=\"Type\">Type</label>\r\n      <select class=\"form-control\" id=\"type\" name=\"type\" [(ngModel)]=\"type\" required>\r\n        <option>Academic</option>\r\n        <option>Non-Academic</option>\r\n      </select>\r\n\r\n    </div>\r\n    </div>\r\n  <div class=\"form-row\">\r\n    <div class=\"form-group col-md-4\">\r\n      <label for=\"name\">name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" maxlength=\"25\" [(ngModel)]=\"name\" placeholder=\"Enter Your Name\" required>\r\n      <small class=\"text-muted\">Name length should be upto 25 characters. </small>\r\n    </div>\r\n    <div class=\"form-group col-md-4\">\r\n      <label for=\"contact\">Contact No.</label>\r\n      <input type=\"number\" class=\"form-control\" id=\"contact\" name=\"contact\" [(ngModel)]=\"contact\" minlength=\"10\" placeholder=\"Specify the title\" required>\r\n    <small class=\"text-muted\">contact length must be 10 digits</small>\r\n    </div>\r\n\r\n    <div class=\"form-group col-md-4\">\r\n        <label for=\"reporterType\">Reporter Type</label>\r\n        <select class=\"form-control\" id=\"reporterType\" name=\"reporterType\" [(ngModel)]=\"reporterType\" required>\r\n          <option>Student</option>\r\n          <option>Guardian</option>\r\n          <option>Other</option>\r\n        </select>\r\n        <small class=\"text-muted\">e.g. Student or Guardian etc.</small>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"details\">Describe in details (max. 750 Characters)</label>\r\n    <textarea class=\"form-control\" id=\"details\" name=\"details\" [(ngModel)]=\"details\" rows=\"4\" placeholder=\"Description goes here\" required></textarea>\r\n    <small class=\"text-muted\">Please describe the grievance in details.</small>\r\n  </div>\r\n\r\n  <input type=\"hidden\" name=\"date\" id=\"date\" value=\"{{date | date: 'dd/MMM/yyyy'}}\">\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"insertGrievance();uploadForm.reset()\" \r\n  [disabled]=\"!(uploadForm.valid && uploadForm.touched)\" >Submit</button>\r\n</form>"

/***/ }),

/***/ "./src/app/component/mainContent/grievance/add/add.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/mainContent/grievance/add/add.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constant_app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constant/app.constant */ "./src/app/constant/app.constant.ts");
/* harmony import */ var _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddComponent = /** @class */ (function () {
    function AddComponent(httpClient, ngxSpinner) {
        this.httpClient = httpClient;
        this.ngxSpinner = ngxSpinner;
        this.data = new FormData();
        this.command = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AddComponent.prototype.ngOnInit = function () {
        this.date = new Date();
    };
    AddComponent.prototype.insertGrievance = function () {
        var _this = this;
        this.data.set('title', this.title);
        this.data.append('name', this.name);
        this.data.append('contact', this.contact);
        this.data.append('type', this.type);
        this.data.append('details', this.details);
        this.data.append('date', this.date);
        this.data.append('reporterType', this.reporterType);
        var headers = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/form-data');
        this.ngxSpinner.show();
        this.httpClient.post(_constant_app_constant__WEBPACK_IMPORTED_MODULE_2__["ROOT_URL"] + '/controller/insertGrievance.php', this.data, { headers: headers })
            .subscribe(function (response) {
            _this.command.emit('add');
            alert(response['status'] === 'success' ? 'Data uploaded successfully !' : 'We are facing difficulties to process the data');
            _this.ngxSpinner.hide();
        }, function (error) {
            alert('Error occured while uploading data !');
            _this.ngxSpinner.hide();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('command'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddComponent.prototype, "command", void 0);
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/component/mainContent/grievance/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/component/mainContent/grievance/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/component/mainContent/grievance/grievance.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/component/mainContent/grievance/grievance.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/mainContent/grievance/grievance.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/component/mainContent/grievance/grievance.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\" >\r\n      <h3>Grievance Redressal Portal</h3>\r\n    <div class=\"col-lg-12\">\r\n        <small class=\"text-info\" *ngIf=\"username\">Hi, {{username}}</small>\r\n        <button class=\"btn btn-sm btn-primary pull-right\" style=\"float:right\"  data-toggle=\"modal\" data-target=\"#exampleModal\" *ngIf=\"!username\">Login</button>\r\n        <button class=\"btn btn-sm btn-primary pull-right\" style=\"float:right\"  (click)=\"logout()\" *ngIf=\"username\">Logout</button>\r\n    </div>\r\n\r\n    <div class=\"col-lg-12\">\r\n        <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">My Portal</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" id=\"history-tab\" data-toggle=\"tab\" href=\"#history\" role=\"tab\" aria-controls=\"history\" aria-selected=\"false\">History</a>\r\n            </li>\r\n            \r\n          </ul>\r\n         \r\n          <div class=\"tab-content\" id=\"myTabContent\">\r\n            <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\r\n              <br> \r\n              <div class=\"card\">\r\n                    <h5 class=\"card-header\">Mechanism for Grievances Redressal</h5>\r\n                    <div class=\"card-body\">\r\n                      <!-- <h5 class=\"card-title\">Special title treatment</h5> -->\r\n                      <p class=\"card-text\">\r\n                        College of Pharmacy has created a mechanism for redressal of student's grievances related to academic and non-academic matters, such as assessment, victimization, attendance, charging of fees, conducting of examinations, harassment by colleague students or teachers etc. There are Grievance Redressal Committees at the Institute/University levels to deal with the grievances of the students.\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\r\n              <br>\r\n                <div class=\"card\">\r\n                    <h5 class=\"card-header\">Lodge your Grievance</h5>\r\n                    <div class=\"card-body\">\r\n                        <app-add (command)=\"requestForUpdate($event)\"></app-add>\r\n                    </div>\r\n                  </div>\r\n                \r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"history\" role=\"tabpanel\" aria-labelledby=\"history-tab\">\r\n                <app-student-history [historyList]=\"complaintList\" [isLoggedIn]=\"this.isLoggedIn\" ></app-student-history>\r\n            </div>\r\n            <div class=\"tab-pane fade\" id=\"teacher-profile\" role=\"tabpanel\" aria-labelledby=\"teacher-profile-tab\">teacher-profile</div>\r\n            <div class=\"tab-pane fade\" id=\"report\" role=\"tabpanel\" aria-labelledby=\"report-tab\">report</div>\r\n          </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n  \r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Login</h5>\r\n          <button id=\"popupclose\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n        <app-login (user)=\"manageProfile($event)\"></app-login>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/component/mainContent/grievance/grievance.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/mainContent/grievance/grievance.component.ts ***!
  \************************************************************************/
/*! exports provided: GrievanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrievanceComponent", function() { return GrievanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _grievance_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../grievance-service.service */ "./src/app/grievance-service.service.ts");
/* harmony import */ var _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GrievanceComponent = /** @class */ (function () {
    function GrievanceComponent(grievanceService, ngxSpinner) {
        this.grievanceService = grievanceService;
        this.ngxSpinner = ngxSpinner;
        this.isLoggedIn = false;
        this.setUserProfile();
    }
    GrievanceComponent.prototype.ngOnInit = function () {
        this.fetchGrievanceList();
    };
    GrievanceComponent.prototype.logout = function () {
        sessionStorage.removeItem('userLoggedIn');
        sessionStorage.removeItem('userName');
        sessionStorage.removeItem('email');
        this.setUserProfile();
    };
    GrievanceComponent.prototype.fetchGrievanceList = function () {
        var _this = this;
        this.ngxSpinner.show();
        this.grievanceService.listStudentHistory()
            .subscribe(function (response) {
            _this.complaintList = JSON.parse(JSON.stringify(response));
            _this.ngxSpinner.hide();
        }, function (error) { console.log(error); _this.ngxSpinner.hide(); }, function () { });
    };
    // list to child components to perform synch actions
    GrievanceComponent.prototype.requestForUpdate = function ($event) {
        switch ($event) {
            case 'add':
                this.fetchGrievanceList();
                break;
            default:
                break;
        }
    };
    // Login Form will return the info
    GrievanceComponent.prototype.manageProfile = function (user) {
        sessionStorage.setItem('userLoggedIn', 'Y');
        sessionStorage.setItem('userName', user.name);
        sessionStorage.setItem('email', user.email);
        this.setUserProfile();
    };
    // It will set the userprofile to local storage
    GrievanceComponent.prototype.setUserProfile = function () {
        if (sessionStorage.getItem('userLoggedIn')) {
            this.username = sessionStorage.getItem('userName');
            this.email = sessionStorage.getItem('email');
            this.isLoggedIn = true;
            var loginwindow = document.getElementById('popupclose');
            if (loginwindow) {
                loginwindow.click();
            }
        }
        else {
            this.username = undefined;
            this.email = undefined;
            this.isLoggedIn = false;
        }
    };
    GrievanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grievance',
            template: __webpack_require__(/*! ./grievance.component.html */ "./src/app/component/mainContent/grievance/grievance.component.html"),
            styles: [__webpack_require__(/*! ./grievance.component.css */ "./src/app/component/mainContent/grievance/grievance.component.css")]
        }),
        __metadata("design:paramtypes", [_grievance_service_service__WEBPACK_IMPORTED_MODULE_1__["GrievanceServiceService"], _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], GrievanceComponent);
    return GrievanceComponent;
}());



/***/ }),

/***/ "./src/app/component/mainContent/grievance/login/login.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/component/mainContent/grievance/login/login.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/mainContent/grievance/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/component/mainContent/grievance/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <form id=\"loginForm\">\r\n    <div class=\"form-group\">\r\n      <small class=\"text-muted\">{{responsetext}}<br></small>\r\n      <label for=\"userEmail\">Email</label>\r\n      <input type=\"email\" [(ngModel)]=\"username \" name=\"email\" class=\"form-control\" id=\"userEmail\" aria-describedby=\"emailHelp\"\r\n        placeholder=\"Enter email\">\r\n      <small id=\"emailHelp\" class=\"form-text text-muted\">Email address is your username</small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputPassword1\">Password</label>\r\n      <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\">\r\n    </div>\r\n    <small class=\"text-info\">** Login portal is available for institute admin</small>\r\n    <button type=\"button\" (click)=\"loginUser()\" class=\"btn btn-primary\" style=\"float: right;\"[disabled]=\"loginButtondisabled\">Submit</button>\r\n  </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/mainContent/grievance/login/login.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/mainContent/grievance/login/login.component.ts ***!
  \**************************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constant_app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constant/app.constant */ "./src/app/constant/app.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(httpClient) {
        this.httpClient = httpClient;
        this.responsetext = '';
        this.user = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.data = new FormData();
        this.loginButtondisabled = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        // disable Login Button
        this.loginButtondisabled = true;
        // 1. set values to formdata
        this.data.set('username', this.username);
        this.data.append('password', btoa(this.password));
        //2. set formdata header
        var headers = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/form-data');
        // 3. send post request and fetch user data
        this.httpClient.post(_constant_app_constant__WEBPACK_IMPORTED_MODULE_2__["ROOT_URL"] + '/controller/Login.php', this.data, { headers: headers })
            .subscribe(function (response) {
            //console.log(response)
            _this.responsetext = 'Login Successful !';
            _this.user.emit(response);
            _this.loginButtondisabled = false;
        }, function (error) {
            _this.responsetext = 'Invalid details, please enter valid credentials !';
            console.log(error);
            _this.loginButtondisabled = false;
        }, function () {
            var fomr = document.getElementById('loginForm');
            _this.responsetext = '';
            fomr.reset();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('user'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LoginComponent.prototype, "user", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/component/mainContent/grievance/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/component/mainContent/grievance/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/component/mainContent/grievance/student-history/student-history.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/component/mainContent/grievance/student-history/student-history.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td>p{\r\n    height: 70px;\r\n    overflow-y: scroll;\r\n    line-height: 1;\r\n    width:250px;\r\n}\r\ntd{\r\n    font-size: 80%;\r\n    font-weight: 400;\r\n}\r\ntextarea{\r\n    white-space: inherit;\r\n}"

/***/ }),

/***/ "./src/app/component/mainContent/grievance/student-history/student-history.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/component/mainContent/grievance/student-history/student-history.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"height: 75vh;overflow-y: scroll;\">\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">No</th>\r\n        <th scope=\"col\">Title</th>\r\n        <th scope=\"col\">Reporter</th>\r\n        <th scope=\"col\">Status</th>\r\n        <th scope=\"col\"  *ngIf=\"isLoggedIn\">Details</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of historyList; index as i;\">\r\n        <td>{{item.grNo}}</td>\r\n        <td>{{item.gr_title}}</td>\r\n        <td>{{item.name}}</td>\r\n        <td>{{item.gr_status}}</td>\r\n        <td *ngIf=\"isLoggedIn\">\r\n          <button class=\"btn btn-sm btn-primary\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\" (click)=\"viewDetailsofGrievance(i)\">View Details</button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n\r\n      <div class=\"modal-content\" *ngIf=\"activeGrievance\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">{{activeGrievance.gr_title}}</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          \r\n          <div class=\"form-group row\">\r\n          <div class=\"col-md-6\" >\r\n              <Label>Reporter</Label>\r\n              <pre>{{activeGrievance.name}}</pre>\r\n          </div>\r\n          <div class=\" col-md-6\">\r\n              <Label>Contact No</Label>\r\n              <pre>{{activeGrievance.contact}}</pre>\r\n          </div>\r\n        </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"details\">Details</label>\r\n            <textarea name=\"details\" id=\"details\"  class=\"form-control\" disabled>\r\n                  {{activeGrievance.gr_details}}\r\n            </textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"Comments\">Comments</label>\r\n            <textarea name=\"Comments\" id=\"Comments\"  class=\"form-control\">\r\n                {{activeGrievance.gr_comments}}\r\n            </textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"status\">Status</label>\r\n            <select id=\"status\" class=\"form-control\" >\r\n              <option value=\"PENDING\">PENDING</option>\r\n              <option value=\"RESOLVED\">RESOLVED</option>\r\n            </select>\r\n          </div>\r\n          <small class=\"text-muted\">Created on: {{activeGrievance.gr_create_date | date:'dd/MMM/yyyy'}}</small>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/mainContent/grievance/student-history/student-history.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/component/mainContent/grievance/student-history/student-history.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: StudentHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentHistoryComponent", function() { return StudentHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _grievance_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../grievance-service.service */ "./src/app/grievance-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentHistoryComponent = /** @class */ (function () {
    function StudentHistoryComponent(httpClient, grievanceService) {
        this.httpClient = httpClient;
        this.grievanceService = grievanceService;
    }
    StudentHistoryComponent.prototype.ngOnInit = function () {
    };
    StudentHistoryComponent.prototype.viewDetailsofGrievance = function (index) {
        this.activeGrievance = this.historyList[index];
        // console.log(this.activeGrievance);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('historyList'),
        __metadata("design:type", Object)
    ], StudentHistoryComponent.prototype, "historyList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isLoggedIn'),
        __metadata("design:type", Boolean)
    ], StudentHistoryComponent.prototype, "isLoggedIn", void 0);
    StudentHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-history',
            template: __webpack_require__(/*! ./student-history.component.html */ "./src/app/component/mainContent/grievance/student-history/student-history.component.html"),
            styles: [__webpack_require__(/*! ./student-history.component.css */ "./src/app/component/mainContent/grievance/student-history/student-history.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _grievance_service_service__WEBPACK_IMPORTED_MODULE_2__["GrievanceServiceService"]])
    ], StudentHistoryComponent);
    return StudentHistoryComponent;
}());



/***/ }),

/***/ "./src/app/component/mainContent/student/student-details/student-details.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/component/mainContent/student/student-details/student-details.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/mainContent/student/student-details/student-details.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/component/mainContent/student/student-details/student-details.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \r\n  1. Time able\r\n  2. Syllabus\r\n -->\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-8 col-lg-6\" >\r\n    <table class=\"table table-sm\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">#</th>\r\n          <th scope=\"col\">Monday</th>\r\n          <th scope=\"col\">Tuesday</th>\r\n          <th scope=\"col\">Wednsday</th>\r\n          <th scope=\"col\">Thusday</th>\r\n          <th scope=\"col\">Friday</th>\r\n          <th scope=\"col\">Saturday</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <th scope=\"row\">1</th>\r\n          <td>Mark</td>\r\n          <td>Otto</td>\r\n          <td>@mdo</td>\r\n          <td>Mark</td>\r\n          <td>Otto</td>\r\n          <td>@mdo</td>\r\n        </tr>\r\n        <tr>\r\n          <th scope=\"row\">2</th>\r\n          <td>Jacob</td>\r\n          <td>Thornton</td>\r\n          <td>@fat</td>\r\n          <td>Mark</td>\r\n          <td>Otto</td>\r\n          <td>@mdo</td>\r\n        </tr>\r\n        <tr>\r\n          <th scope=\"row\">3</th>\r\n          <td colspan=\"2\">Larry the Bird</td>\r\n          <td>@twitter</td>\r\n          <td>Mark</td>\r\n          <td>Otto</td>\r\n          <td>@mdo</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/mainContent/student/student-details/student-details.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/component/mainContent/student/student-details/student-details.component.ts ***!
  \********************************************************************************************/
/*! exports provided: StudentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDetailsComponent", function() { return StudentDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentDetailsComponent = /** @class */ (function () {
    function StudentDetailsComponent() {
    }
    StudentDetailsComponent.prototype.ngOnInit = function () {
    };
    StudentDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-details',
            template: __webpack_require__(/*! ./student-details.component.html */ "./src/app/component/mainContent/student/student-details/student-details.component.html"),
            styles: [__webpack_require__(/*! ./student-details.component.css */ "./src/app/component/mainContent/student/student-details/student-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentDetailsComponent);
    return StudentDetailsComponent;
}());



/***/ }),

/***/ "./src/app/component/mainContent/student/student.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/component/mainContent/student/student.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feedbackframe{\r\n    width: 100%;\r\n    height:95vh;\r\n}\r\n\r\n.freebirdFormviewerViewCenteredContent{\r\n    width:100% !important;\r\n}"

/***/ }),

/***/ "./src/app/component/mainContent/student/student.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/component/mainContent/student/student.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n <!--  <h1 class=\"mat-h1\">Student Corner</h1> -->\r\n\r\n  <iframe class=\"feedbackframe\" src=\"https://docs.google.com/forms/d/e/1FAIpQLSeaQxCRAnxXH_TlmLBlRNa3pw2W30jI42-QMm4ySmRXKXftpw/viewform?embedded=true\"\r\n     frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading...</iframe>\r\n</div>"

/***/ }),

/***/ "./src/app/component/mainContent/student/student.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/mainContent/student/student.component.ts ***!
  \********************************************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentComponent = /** @class */ (function () {
    function StudentComponent() {
    }
    StudentComponent.prototype.ngOnInit = function () {
    };
    StudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/component/mainContent/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/component/mainContent/student/student.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentComponent);
    return StudentComponent;
}());



/***/ }),

/***/ "./src/app/component/mainContent/tn-pcell/tn-pcell.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/component/mainContent/tn-pcell/tn-pcell.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/mainContent/tn-pcell/tn-pcell.component.html":
/*!************************************************************************!*\
  !*** ./src/app/component/mainContent/tn-pcell/tn-pcell.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"s_content\">\r\n        <h1 class=\"s_ribbon\">Training and Placement </h1>\r\n        <hr>\r\n      \r\n                  <!-- Main Content Begin -->\r\n\r\n\r\n  <div class=\"panel\">\r\n      <div class=\" panel-heading\">\r\n        \r\n      </div>\r\n      <div class=\"panel-body\">\r\n        The training and placement facilities is the process of placement of student passing out from the institute besides collaborating\r\n        with leading organization and institute in setting up of internship and training program of student. The cell acts\r\n        as contact point for all Pharma and non Pharma industries that which to recruit student of Shikshan Prasarak Mandals\r\n        college of Pharmacy, Akluj. It entails collecting resumes, telephone numbers and emails of the students and forwarding\r\n        it to HR department of Pharma and non Pharma industries. Pre placement talks are also conducted in this regard as per\r\n        mutual convenience. Job offers, date of interview, selection of the candidates etc are announced through the training\r\n        and placement cell.\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"panel\">\r\n      <div class=\" panel-heading\">\r\n        <h4 class=\"heading \" style=\"text-align:left;margin-bottom:10px !important;\">Placed Students</h4>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        Following is the list of B.Pharm Candidates selected through Placement cell at various Pharmaceutical Industries\r\n        <div class=\"panel-body\">\r\n          <strong class=\"text-success\">Academic Year 2015-16</strong>\r\n          <table class=\"table table-bordered table-sm\">\r\n            <thead>\r\n              <tr>\r\n                <th>SrNo</th>\r\n                <th>Student Name</th>\r\n                <th>Company Name</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>1</td>\r\n                <td>Yadav Shubhangi Audumbar</td>\r\n                <td>Tata consultancy services </td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td>Shinde Ashlesha Shashikant</td>\r\n                <td>Tata consultancy services </td>\r\n              </tr>\r\n              <tr>\r\n                <td>3</td>\r\n                <td>Patil Akshay Hanumant</td>\r\n                <td>Tata consultancy services </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n  \r\n        <div class=\"panel-body\">\r\n          <strong class=\"text-success\">Academic Year 2014-15</strong>\r\n          <table class=\"table table-bordered table-sms\">\r\n            <thead>\r\n              <tr>\r\n                <th>SrNo</th>\r\n                <th>Student Name</th>\r\n                <th>Company Name</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>1</td>\r\n                <td>Wagh Snehal Shahaji</td>\r\n                <td>Tata consultancy services </td>\r\n              </tr>\r\n              <tr>\r\n                <td>2</td>\r\n                <td>Shinde Neha Naganath</td>\r\n                <td>Tata consultancy services </td>\r\n              </tr>\r\n              <tr>\r\n                <td>3</td>\r\n                <td>Jadhav Sujata Yashvant</td>\r\n                <td>Tata consultancy services </td>\r\n              </tr>\r\n              <tr>\r\n                <td>4</td>\r\n                <td>Bora Pritam Pravin</td>\r\n                <td>Tata consultancy services </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n  \r\n      </div>\r\n    </div>\r\n    <!-- Main Content End -->\r\n      </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/mainContent/tn-pcell/tn-pcell.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/mainContent/tn-pcell/tn-pcell.component.ts ***!
  \**********************************************************************/
/*! exports provided: TnPcellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TnPcellComponent", function() { return TnPcellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TnPcellComponent = /** @class */ (function () {
    function TnPcellComponent() {
    }
    TnPcellComponent.prototype.ngOnInit = function () {
    };
    TnPcellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tn-pcell',
            template: __webpack_require__(/*! ./tn-pcell.component.html */ "./src/app/component/mainContent/tn-pcell/tn-pcell.component.html"),
            styles: [__webpack_require__(/*! ./tn-pcell.component.css */ "./src/app/component/mainContent/tn-pcell/tn-pcell.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TnPcellComponent);
    return TnPcellComponent;
}());



/***/ }),

/***/ "./src/app/component/my-nav/my-nav.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/my-nav/my-nav.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\r\n  height: 100%;\r\n}\r\n\r\n.sidenav {\r\n  width: 200px;\r\n  box-shadow: 3px 0 6px rgba(0,0,0,.24);\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/my-nav/my-nav.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/my-nav/my-nav.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\" [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\" [opened]=\"false\">\r\n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\r\n    <mat-nav-list>\r\n      <a mat-list-item *ngFor=\"let menu of menuList\" [routerLink]=\"menu.link ? menu.link : '' \" (click)=\"menu.subMenu ? drawer.open() :drawer.toggle()\">{{menu.name}}\r\n        <div *ngIf=\"menu.subMenu\">\r\n          \r\n           <button mat-button [matMenuTriggerFor]=\"menux\">\r\n              <mat-icon >play_arrow</mat-icon>\r\n          </button> \r\n          <mat-menu #menux=\"matMenu\">\r\n            <a mat-menu-item *ngFor=\"let submenu of menu.subMenu\" [routerLink]=\"submenu.link\" (click)=\"drawer.toggle()\">{{submenu.name}}</a>\r\n          </mat-menu>\r\n        </div>\r\n      </a>\r\n    </mat-nav-list>\r\n\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"primary\">\r\n      <!-- *ngIf=\"isHandset$ | async\" -->\r\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      <span>{{applicationName}}</span>\r\n    </mat-toolbar>\r\n  </mat-sidenav-content>\r\n\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/component/my-nav/my-nav.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/my-nav/my-nav.component.ts ***!
  \******************************************************/
/*! exports provided: MyNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNavComponent", function() { return MyNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _constant_menu_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constant/menu.constant */ "./src/app/constant/menu.constant.ts");
/* harmony import */ var _constant_applicationDetails_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constant/applicationDetails.constant */ "./src/app/constant/applicationDetails.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyNavComponent = /** @class */ (function () {
    function MyNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.menuList = [];
        this.applicationName = _constant_applicationDetails_constant__WEBPACK_IMPORTED_MODULE_4__["applicationName"];
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
        this.menuList = _constant_menu_constant__WEBPACK_IMPORTED_MODULE_3__["menuItems"];
    }
    MyNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-nav',
            template: __webpack_require__(/*! ./my-nav.component.html */ "./src/app/component/my-nav/my-nav.component.html"),
            styles: [__webpack_require__(/*! ./my-nav.component.css */ "./src/app/component/my-nav/my-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], MyNavComponent);
    return MyNavComponent;
}());



/***/ }),

/***/ "./src/app/constant/admission.constant.ts":
/*!************************************************!*\
  !*** ./src/app/constant/admission.constant.ts ***!
  \************************************************/
/*! exports provided: admissionLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "admissionLink", function() { return admissionLink; });
var admissionLink = [
    { displayText: 'Admission Notification 2019-20 (First Year B. Pharmacy)', filename: 'Admission_Notification_2019-20.PDF', link: '' },
];


/***/ }),

/***/ "./src/app/constant/app.constant.ts":
/*!******************************************!*\
  !*** ./src/app/constant/app.constant.ts ***!
  \******************************************/
/*! exports provided: ROOT_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROOT_URL", function() { return ROOT_URL; });
var ROOT_URL = "http://www.copakluj.org";


/***/ }),

/***/ "./src/app/constant/applicationDetails.constant.ts":
/*!*********************************************************!*\
  !*** ./src/app/constant/applicationDetails.constant.ts ***!
  \*********************************************************/
/*! exports provided: applicationName, facultyDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applicationName", function() { return applicationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facultyDetails", function() { return facultyDetails; });
var applicationName = 'My test Application'; // 'College of Pharmacy, Akluj';
var facultyDetails = [{
        'name': 'Dr. P. V. Bodhe',
        'designation': 'Principal',
        'Qualification': 'M.Pharm, Ph. D.',
        'specialization': 'Pharmacology',
        'experience': 'Teaching …..',
        'email': 'prashantbodhe6399@gmail.com'
    },
    {
        'name': 'Mr. A. S. Bhanawase',
        'designation': 'Asst. Prof.',
        'Qualification': 'M.Pharm.',
        'specialization': 'Pharmaceutical Chemistry',
        'experience': 'Teaching',
        'email': 'anil.bhanawase@gmail.com'
    },
    {
        'name': 'Mr. S. A. Khedkar',
        'designation': 'Asst. Prof.',
        'Qualification': 'M.Pharm.',
        'specialization': 'Pharmaceutical Chemistry',
        'experience': 'Teaching 8 yrs',
        'email': 'samratkhedkar@yahoo.in'
    },
    {
        'name': 'Mrs. N. S. Kajale',
        'designation': 'Asst. Prof.',
        'Qualification': 'M.Pharm.',
        'specialization': 'Pharmaceutics',
        'experience': 'Teaching 6.3 yrs',
        'email': 'cssgrs@gmail.com'
    },
    {
        'name': 'Mrs. R. R. Sayyad',
        'designation': 'Asst. Prof.',
        'Qualification': 'M.Pharm.',
        'specialization': 'Pharmacology',
        'experience': 'Teaching 6 yrs',
        'email': 'raziya.shaikh2010@rediffmail.com'
    },
    {
        'name': 'Mr. S. R. Nazarkar',
        'designation': 'Asst. Prof.',
        'Qualification': 'M.Pharm.',
        'specialization': 'Quality Assurance',
        'experience': 'Teaching 6 yrs',
        'email': 'nazarkarswapnil@gmail.com'
    },
    {
        'name': 'Miss. P. G. Shinde',
        'designation': 'Asst. Prof.',
        'Qualification': 'M.Pharm.',
        'specialization': 'Pharmaceutical Chemistry',
        'experience': 'Teaching 6 yrs',
        'email': 'prashali.shinde@gmail.com'
    },
    {
        'name': 'Mr. P. A. Vedpathak',
        'designation': 'Asst. Prof.',
        'Qualification': 'M.Pharm.',
        'specialization': 'Pharmaceutics',
        'experience': 'Teaching 5 yrs',
        'email': 'prasad5605@gmail.com'
    },
    {
        'name': 'Mr. S. V. Kanhere',
        'designation': 'Asst. Prof.',
        'Qualification': 'M.Pharm.',
        'specialization': 'Pharmacology',
        'experience': 'Teaching 4 yrs',
        'email': 'sampatpharma@gmail.com'
    },
    {
        'name': 'Miss. P. N. Shinde',
        'designation': 'Asst. Prof.',
        'Qualification': 'M.Pharm.',
        'specialization': 'Pharmaceutical Chemistry',
        'experience': 'Teaching 4 yrs',
        'email': 'devishree.shinde7@gmail.com'
    },
    {
        'name': 'Miss. R. V. Manedeshmukh',
        'designation': 'Asst. Prof.',
        'Qualification': 'M.Pharm.',
        'specialization': 'Pharmacology',
        'experience': 'Teaching 4 yrs',
        'email': 'manedeshmukh.reshma@gmail.com'
    },
    {
        'name': 'Mr. S. I. Medli',
        'designation': 'Asst. Prof.',
        'Qualification': 'M.Pharm.',
        'specialization': 'Pharmacognocy',
        'experience': 'Teaching 1 yrs',
        'email': 'sanj.mady@gmail.com'
    },
    {
        'name': 'Miss. S. V. Sawant',
        'designation': 'Asst. Prof.',
        'Qualification': 'M.Pharm.',
        'specialization': 'Pharmaceutics',
        'experience': 'Teaching 8 months',
        'email': 'sanjivanivsawant@gmail.com'
    },
    {
        'name': 'Mr. M. M. Gade',
        'designation': 'Asst. Prof.',
        'Qualification': 'M.Pharm.',
        'specialization': 'Pharmaceutics',
        'experience': 'Teaching 6 Months',
        'email': 'mukundgade09@gmail.com'
    },
    {
        'name': 'Miss. U. S. Hon',
        'designation': 'Asst. Prof.',
        'Qualification': 'M.Pharm.',
        'specialization': 'Pharmacognocy',
        'experience': 'Teaching 6 Months',
        'email': ''
    }];


/***/ }),

/***/ "./src/app/constant/importantLinks.constant.ts":
/*!*****************************************************!*\
  !*** ./src/app/constant/importantLinks.constant.ts ***!
  \*****************************************************/
/*! exports provided: importantLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importantLinks", function() { return importantLinks; });
var importantLinks = [
    { displayText: 'Prospectus', filename: './assets/documentation/imp/prospectus.pdf', link: '' },
    { displayText: 'NIRF-2018', filename: './assets/documentation/imp/allReportMHRD.pdf', link: '' },
    { displayText: 'National Academy Depository', filename: '', link: 'http://www.nad.gov.in' },
    { displayText: 'NAD - Students User Guide', filename: '', link: '' },
    { displayText: 'Mandatory Disclosure', filename: './assets/documentation/imp/Mandatory Disclosure.pdf', link: '' },
];


/***/ }),

/***/ "./src/app/constant/menu.constant.ts":
/*!*******************************************!*\
  !*** ./src/app/constant/menu.constant.ts ***!
  \*******************************************/
/*! exports provided: menuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuItems", function() { return menuItems; });
var menuItems = [
    { name: "Home", icon: "", link: "/" },
    {
        name: "About Us", icon: "", link: "",
        subMenu: [
            { name: "Institute", link: "/aboutus" },
            { name: "Principal's Desk", link: '/principal' },
            { name: "Faculty", link: '/faculty' }
        ]
    },
    { name: "Academic", icon: "", link: "/academic" },
    { name: "Admission", icon: "", link: "/admission" },
    { name: "Activities", icon: "", link: "/activities" },
    { name: "Student Corner", icon: "", link: "/student" },
    { name: "Training & Placement", icon: "", link: "/TnPcell" },
    { name: "Grievance Portal", icon: "", link: "/grievance" },
    { name: "Alumni", icon: "", link: "/alumni" },
    { name: "Committee", icon: "", link: "/committee" },
    { name: "Gallery", icon: "", link: "/gallery" },
    { name: "Contact us", icon: "", link: "/contact" }
];


/***/ }),

/***/ "./src/app/grievance-service.service.ts":
/*!**********************************************!*\
  !*** ./src/app/grievance-service.service.ts ***!
  \**********************************************/
/*! exports provided: GrievanceServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrievanceServiceService", function() { return GrievanceServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constant_app_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant/app.constant */ "./src/app/constant/app.constant.ts");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GrievanceServiceService = /** @class */ (function () {
    function GrievanceServiceService(httpClient) {
        this.httpClient = httpClient;
    }
    GrievanceServiceService.prototype.listStudentHistory = function () {
        return this.httpClient.get(_constant_app_constant__WEBPACK_IMPORTED_MODULE_1__["ROOT_URL"] + '/controller/Config.php');
    };
    GrievanceServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GrievanceServiceService);
    return GrievanceServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Project-From_Scratch\PrimeNG-Example\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map