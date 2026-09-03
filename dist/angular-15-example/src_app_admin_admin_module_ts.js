"use strict";
(self["webpackChunkangular_15_example"] = self["webpackChunkangular_15_example"] || []).push([["src_app_admin_admin_module_ts"],{

/***/ 3176:
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminRoutingModule": () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _subnav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subnav.component */ 2606);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.component */ 4636);
/* harmony import */ var _overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overview.component */ 4244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const accountsModule = () => __webpack_require__.e(/*! import() */ "src_app_admin_accounts_accounts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./accounts/accounts.module */ 5125)).then(x => x.AccountsModule);
const routes = [{
  path: '',
  component: _subnav_component__WEBPACK_IMPORTED_MODULE_0__.SubNavComponent,
  outlet: 'subnav'
}, {
  path: '',
  component: _layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent,
  children: [{
    path: '',
    component: _overview_component__WEBPACK_IMPORTED_MODULE_2__.OverviewComponent
  }, {
    path: 'accounts',
    loadChildren: accountsModule
  }]
}];
class AdminRoutingModule {}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) {
  return new (t || AdminRoutingModule)();
};
AdminRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AdminRoutingModule
});
AdminRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 7095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 3176);
/* harmony import */ var _subnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subnav.component */ 2606);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ 4636);
/* harmony import */ var _overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overview.component */ 4244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







class AdminModule {}
AdminModule.ɵfac = function AdminModule_Factory(t) {
  return new (t || AdminModule)();
};
AdminModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AdminModule
});
AdminModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AdminModule, {
    declarations: [_subnav_component__WEBPACK_IMPORTED_MODULE_1__.SubNavComponent, _layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent, _overview_component__WEBPACK_IMPORTED_MODULE_3__.OverviewComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule]
  });
})();

/***/ }),

/***/ 4636:
/*!*******************************************!*\
  !*** ./src/app/admin/layout.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class LayoutComponent {}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
  return new (t || LayoutComponent)();
};
LayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LayoutComponent,
  selectors: [["ng-component"]],
  decls: 3,
  vars: 0,
  consts: [[1, "p-4"], [1, "container"]],
  template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  encapsulation: 2
});

/***/ }),

/***/ 4244:
/*!*********************************************!*\
  !*** ./src/app/admin/overview.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverviewComponent": () => (/* binding */ OverviewComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/_services */ 9949);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);






function OverviewComponent_tr_67_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const order_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", order_r1.Rider.firstName, " ", order_r1.Rider.lastName, " ");
  }
}
function OverviewComponent_tr_67_select_21_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", r_r8.AccountId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", r_r8.firstName, " ", r_r8.lastName, "");
  }
}
function OverviewComponent_tr_67_select_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function OverviewComponent_tr_67_select_21_Template_select_change_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      const order_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.assignRiderToOrder(order_r1.OrderId, _r6.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Assign Rider...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, OverviewComponent_tr_67_select_21_option_4_Template, 2, 3, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.riders);
  }
}
function OverviewComponent_tr_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td")(4, "strong", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td")(14, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td")(17, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, OverviewComponent_tr_67_span_20_Template, 3, 2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, OverviewComponent_tr_67_select_21_Template, 5, 1, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td")(23, "select", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function OverviewComponent_tr_67_Template_select_change_23_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const order_r1 = restoredCtx.$implicit;
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.updateStatus(order_r1.OrderId, _r4.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Confirmed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Preparing");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Ready for Pickup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Picked Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Out for Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Delivered");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", order_r1.OrderId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", order_r1.Customer == null ? null : order_r1.Customer.firstName, " ", order_r1.Customer == null ? null : order_r1.Customer.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r1.contactPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r1.Restaurant == null ? null : order_r1.Restaurant.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B1", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](12, 17, order_r1.totalAmount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r1.Payment == null ? null : order_r1.Payment.paymentMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-warning", order_r1.status === "Pending" || order_r1.status === "Preparing")("bg-info", order_r1.status === "Picked Up" || order_r1.status === "Out for Delivery")("bg-success", order_r1.status === "Delivered");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", order_r1.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", order_r1.Rider);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !order_r1.Rider);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", order_r1.status);
  }
}
class OverviewComponent {
  constructor(orderService, accountService, restaurantService, alertService) {
    this.orderService = orderService;
    this.accountService = accountService;
    this.restaurantService = restaurantService;
    this.alertService = alertService;
    this.orders = [];
    this.accounts = [];
    this.restaurants = [];
    this.riders = [];
    this.loading = false;
    this.totalRevenue = 0;
  }
  ngOnInit() {
    this.loadAdminMetrics();
  }
  loadAdminMetrics() {
    this.loading = true;
    this.orderService.getAll().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe({
      next: orders => {
        this.orders = orders;
        this.totalRevenue = orders.reduce((sum, o) => sum + Number(o.totalAmount || 0), 0);
        this.loading = false;
      }
    });
    this.accountService.getAll().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe({
      next: accounts => {
        this.accounts = accounts;
        this.riders = accounts.filter(a => a.role === 'Rider');
      }
    });
    this.restaurantService.getAll().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe({
      next: res => this.restaurants = res
    });
  }
  assignRiderToOrder(orderId, riderIdStr) {
    const riderId = Number(riderIdStr);
    if (!riderId) return;
    this.orderService.assignRider(orderId, riderId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe({
      next: () => {
        this.alertService.success(`Rider assigned to Order #${orderId}`);
        this.loadAdminMetrics();
      },
      error: err => this.alertService.error(err)
    });
  }
  updateStatus(orderId, status) {
    this.orderService.updateStatus(orderId, status).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe({
      next: () => {
        this.alertService.success(`Order #${orderId} status updated to ${status}`);
        this.loadAdminMetrics();
      }
    });
  }
}
OverviewComponent.ɵfac = function OverviewComponent_Factory(t) {
  return new (t || OverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.RestaurantService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.AlertService));
};
OverviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: OverviewComponent,
  selectors: [["ng-component"]],
  decls: 68,
  vars: 8,
  consts: [[1, "p-4"], [1, "container"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4", "border-bottom", "pb-3"], [1, "fw-bold", "mb-1"], [1, "bi", "bi-shield-lock-fill", "text-danger", "me-2"], [1, "text-muted", "mb-0"], ["routerLink", "accounts", 1, "btn", "btn-outline-danger", "font-weight-bold"], [1, "bi", "bi-people-fill", "me-1"], [1, "row", "g-3", "mb-4"], [1, "col-md-3"], [1, "card", "border-0", "shadow-sm", "rounded-3", "p-3", "bg-gradient", "bg-primary", "text-white"], [1, "text-white-50", "text-uppercase", "mb-1", "small", "fw-bold"], [1, "fw-bold", "mb-0"], [1, "card", "border-0", "shadow-sm", "rounded-3", "p-3", "bg-gradient", "bg-success", "text-white"], [1, "card", "border-0", "shadow-sm", "rounded-3", "p-3", "bg-gradient", "bg-warning", "text-dark"], [1, "text-dark-50", "text-uppercase", "mb-1", "small", "fw-bold"], [1, "card", "border-0", "shadow-sm", "rounded-3", "p-3", "bg-gradient", "bg-dark", "text-white"], [1, "card", "border-0", "shadow-sm", "rounded-3", "mb-4"], [1, "card-header", "bg-white", "py-3", "d-flex", "justify-content-between", "align-items-center"], [1, "bi", "bi-list-task", "me-2", "text-danger"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "card-body", "p-0"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0"], [1, "table-light"], [4, "ngFor", "ngForOf"], [1, "fw-bold"], [1, "d-block"], [1, "text-muted"], [1, "fw-bold", "text-danger"], [1, "badge", "bg-light", "text-dark", "border"], [1, "badge"], ["class", "badge bg-success", 4, "ngIf"], ["class", "form-select form-select-sm", 3, "change", 4, "ngIf"], [1, "form-select", "form-select-sm", 3, "value", "change"], ["statusSelect", ""], ["value", "Pending"], ["value", "Confirmed"], ["value", "Preparing"], ["value", "Ready for Pickup"], ["value", "Picked Up"], ["value", "Out for Delivery"], ["value", "Delivered"], ["value", "Cancelled"], [1, "badge", "bg-success"], [1, "bi", "bi-bicycle", "me-1"], [1, "form-select", "form-select-sm", 3, "change"], ["riderSelect", ""], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
  template: function OverviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "KaOnline Admin Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "System Overview, Revenue Analytics, Deliveries & Account Permissions");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Manage All Accounts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "h6", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Total Platform Revenue");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h3", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9)(21, "div", 13)(22, "h6", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Total Orders Placed");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h3", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9)(27, "div", 14)(28, "h6", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Registered Restaurants");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h3", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 9)(33, "div", 16)(34, "h6", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Active Delivery Riders");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h3", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 17)(39, "div", 18)(40, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "System Master Orders & Delivery Pipeline");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OverviewComponent_Template_button_click_43_listener() {
        return ctx.loadAdminMetrics();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Refresh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 21)(46, "div", 22)(47, "table", 23)(48, "thead", 24)(49, "tr")(50, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Order #");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Customer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Restaurant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Payment");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Rider Assignment");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, OverviewComponent_tr_67_Template, 41, 20, "tr", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B1", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](19, 5, ctx.totalRevenue, "1.2-2"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.orders.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.restaurants.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.riders.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orders);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe],
  encapsulation: 2
});

/***/ }),

/***/ 2606:
/*!*******************************************!*\
  !*** ./src/app/admin/subnav.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubNavComponent": () => (/* binding */ SubNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class SubNavComponent {}
SubNavComponent.ɵfac = function SubNavComponent_Factory(t) {
  return new (t || SubNavComponent)();
};
SubNavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SubNavComponent,
  selectors: [["ng-component"]],
  decls: 4,
  vars: 0,
  consts: [[1, "admin-nav", "navbar", "navbar-expand", "navbar-light", "px-3"], [1, "navbar-nav"], ["routerLink", "accounts", "routerLinkActive", "active", 1, "nav-item", "nav-link"]],
  template: function SubNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Accounts");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
  encapsulation: 2
});

/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin_module_ts.js.map