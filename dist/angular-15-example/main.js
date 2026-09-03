"use strict";
(self["webpackChunkangular_15_example"] = self["webpackChunkangular_15_example"] || []).push([["main"],{

/***/ 3041:
/*!************************************************!*\
  !*** ./src/app/_components/alert.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/_models */ 3027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services */ 9949);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function AlertComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AlertComponent_div_0_div_2_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const alert_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.removeAlert(alert_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const alert_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r1.cssClasses(alert_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", alert_r2.message, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function AlertComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AlertComponent_div_0_div_2_Template, 3, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.alerts);
  }
}
class AlertComponent {
  constructor(router, alertService) {
    this.router = router;
    this.alertService = alertService;
    this.id = 'default-alert';
    this.fade = true;
    this.alerts = [];
  }
  ngOnInit() {
    // subscribe to new alert notifications
    this.alertSubscription = this.alertService.onAlert(this.id).subscribe(alert => {
      // clear alerts when an empty alert is received
      if (!alert.message) {
        // filter out alerts without 'keepAfterRouteChange' flag
        this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);
        // remove 'keepAfterRouteChange' flag on the rest
        this.alerts.forEach(x => delete x.keepAfterRouteChange);
        return;
      }
      // add alert to array
      this.alerts.push(alert);
      // auto close alert if required
      if (alert.autoClose) {
        setTimeout(() => this.removeAlert(alert), 3000);
      }
    });
    // clear alerts on location change
    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationStart) {
        this.alertService.clear(this.id);
      }
    });
  }
  ngOnDestroy() {
    // unsubscribe to avoid memory leaks
    this.alertSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }
  removeAlert(alert) {
    // check if already removed to prevent error on auto close
    if (!this.alerts.includes(alert)) return;
    if (this.fade) {
      // fade out alert
      alert.fade = true;
      // remove alert after faded out
      setTimeout(() => {
        this.alerts = this.alerts.filter(x => x !== alert);
      }, 250);
    } else {
      // remove alert
      this.alerts = this.alerts.filter(x => x !== alert);
    }
  }
  cssClasses(alert) {
    if (!alert) return;
    const classes = ['alert', 'alert-dismissible', 'mt-4', 'container'];
    const alertTypeClass = {
      [_app_models__WEBPACK_IMPORTED_MODULE_0__.AlertType.Success]: 'alert-success',
      [_app_models__WEBPACK_IMPORTED_MODULE_0__.AlertType.Error]: 'alert-danger',
      [_app_models__WEBPACK_IMPORTED_MODULE_0__.AlertType.Info]: 'alert-info',
      [_app_models__WEBPACK_IMPORTED_MODULE_0__.AlertType.Warning]: 'alert-warning'
    };
    if (alert.type !== undefined) {
      classes.push(alertTypeClass[alert.type]);
    }
    if (alert.fade) {
      classes.push('fade');
    }
    return classes.join(' ');
  }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) {
  return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_1__.AlertService));
};
AlertComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AlertComponent,
  selectors: [["alert"]],
  inputs: {
    id: "id",
    fade: "fade"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "m-3"], [3, "class", 4, "ngFor", "ngForOf"], [3, "innerHTML"], [1, "btn-close", 3, "click"]],
  template: function AlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 3, 1, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.alerts.length);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
  encapsulation: 2
});

/***/ }),

/***/ 3130:
/*!**************************************!*\
  !*** ./src/app/_components/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* reexport safe */ _alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent)
/* harmony export */ });
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ 3041);


/***/ }),

/***/ 3402:
/*!*********************************************!*\
  !*** ./src/app/_helpers/app.initializer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appInitializer": () => (/* binding */ appInitializer)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 745);

function appInitializer(accountService) {
  return () => accountService.refreshToken().pipe(
  // catch error to start app on success or failure
  (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)()));
}

/***/ }),

/***/ 5197:
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/_services */ 9949);



class AuthGuard {
  constructor(router, accountService) {
    this.router = router;
    this.accountService = accountService;
  }
  canActivate(route, state) {
    const account = this.accountService.accountValue;
    if (account) {
      // check if route is restricted by role
      if (route.data.roles && !route.data.roles.includes(account.role)) {
        // role not authorized so redirect to home page
        this.router.navigate(['/']);
        return false;
      }
      // authorized so return true
      return true;
    }
    // not logged in so redirect to login page with the return url 
    this.router.navigate(['/account/login'], {
      queryParams: {
        returnUrl: state.url
      }
    });
    return false;
  }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.AccountService));
};
AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7901:
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/_services */ 9949);




class ErrorInterceptor {
  constructor(accountService) {
    this.accountService = accountService;
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
      if ([401, 403].includes(err.status) && this.accountService.accountValue) {
        // auto logout if 401 or 403 response returned from api
        this.accountService.logout();
      }
      const error = err && err.error && err.error.message || err.statusText;
      console.error(err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
  return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.AccountService));
};
ErrorInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ErrorInterceptor,
  factory: ErrorInterceptor.ɵfac
});

/***/ }),

/***/ 4922:
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FakeBackendInterceptor": () => (/* binding */ FakeBackendInterceptor),
/* harmony export */   "fakeBackendProvider": () => (/* binding */ fakeBackendProvider)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1339);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3154);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 332);
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/_models */ 3027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services */ 9949);






// array in local storage for accounts
const accountsKey = 'angular-15-signup-verification-boilerplate-accounts';
let accounts = JSON.parse(localStorage.getItem(accountsKey)) || [];
class FakeBackendInterceptor {
  constructor(alertService) {
    this.alertService = alertService;
  }
  intercept(request, next) {
    const {
      url,
      method,
      headers,
      body
    } = request;
    const alertService = this.alertService;
    return handleRoute();
    function handleRoute() {
      switch (true) {
        case url.endsWith('/accounts/authenticate') && method === 'POST':
          return authenticate();
        case url.endsWith('/accounts/refresh-token') && method === 'POST':
          return refreshToken();
        case url.endsWith('/accounts/revoke-token') && method === 'POST':
          return revokeToken();
        case url.endsWith('/accounts/register') && method === 'POST':
          return register();
        case url.endsWith('/accounts/verify-email') && method === 'POST':
          return verifyEmail();
        case url.endsWith('/accounts/forgot-password') && method === 'POST':
          return forgotPassword();
        case url.endsWith('/accounts/validate-reset-token') && method === 'POST':
          return validateResetToken();
        case url.endsWith('/accounts/reset-password') && method === 'POST':
          return resetPassword();
        case url.endsWith('/accounts') && method === 'GET':
          return getAccounts();
        case url.match(/\/accounts\/\d+$/) && method === 'GET':
          return getAccountById();
        case url.endsWith('/accounts') && method === 'POST':
          return createAccount();
        case url.match(/\/accounts\/\d+$/) && method === 'PUT':
          return updateAccount();
        case url.match(/\/accounts\/\d+$/) && method === 'DELETE':
          return deleteAccount();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }
    // route functions
    function authenticate() {
      const {
        email,
        password
      } = body;
      const account = accounts.find(x => x.email === email && x.password === password && x.isVerified);
      if (!account) return error('Email or password is incorrect');
      // add refresh token to account
      account.refreshTokens.push(generateRefreshToken());
      localStorage.setItem(accountsKey, JSON.stringify(accounts));
      return ok({
        ...basicDetails(account),
        jwtToken: generateJwtToken(account)
      });
    }
    function refreshToken() {
      const refreshToken = getRefreshToken();
      if (!refreshToken) return unauthorized();
      const account = accounts.find(x => x.refreshTokens.includes(refreshToken));
      if (!account) return unauthorized();
      // replace old refresh token with a new one and save
      account.refreshTokens = account.refreshTokens.filter(x => x !== refreshToken);
      account.refreshTokens.push(generateRefreshToken());
      localStorage.setItem(accountsKey, JSON.stringify(accounts));
      return ok({
        ...basicDetails(account),
        jwtToken: generateJwtToken(account)
      });
    }
    function revokeToken() {
      if (!isAuthenticated()) return unauthorized();
      const refreshToken = getRefreshToken();
      const account = accounts.find(x => x.refreshTokens.includes(refreshToken));
      // revoke token and save
      account.refreshTokens = account.refreshTokens.filter(x => x !== refreshToken);
      localStorage.setItem(accountsKey, JSON.stringify(accounts));
      return ok();
    }
    function register() {
      const account = body;
      if (accounts.find(x => x.email === account.email)) {
        // display email already registered "email" in alert
        setTimeout(() => {
          alertService.info(`
                        <h4>Email Already Registered</h4>
                        <p>Your email ${account.email} is already registered.</p>
                        <p>If you don't know your password please visit the <a href="${location.origin}/account/forgot-password">forgot password</a> page.</p>
                        <div><strong>NOTE:</strong> The fake backend displayed this "email" so you can test without an api. A real backend would send a real email.</div>
                    `, {
            autoClose: false
          });
        }, 1000);
        // always return ok() response to prevent email enumeration
        return ok();
      }
      // assign account id and a few other properties then save
      account.id = newAccountId();
      if (account.id === 1) {
        // first registered account is an admin
        account.role = _app_models__WEBPACK_IMPORTED_MODULE_0__.Role.Admin;
      } else {
        account.role = _app_models__WEBPACK_IMPORTED_MODULE_0__.Role.User;
      }
      account.dateCreated = new Date().toISOString();
      account.verificationToken = new Date().getTime().toString();
      account.isVerified = false;
      account.refreshTokens = [];
      delete account.confirmPassword;
      accounts.push(account);
      localStorage.setItem(accountsKey, JSON.stringify(accounts));
      // display verification email in alert
      setTimeout(() => {
        const verifyUrl = `${location.origin}/account/verify-email?token=${account.verificationToken}`;
        alertService.info(`
                    <h4>Verification Email</h4>
                    <p>Thanks for registering!</p>
                    <p>Please click the below link to verify your email address:</p>
                    <p><a href="${verifyUrl}">${verifyUrl}</a></p>
                    <div><strong>NOTE:</strong> The fake backend displayed this "email" so you can test without an api. A real backend would send a real email.</div>
                `, {
          autoClose: false
        });
      }, 1000);
      return ok();
    }
    function verifyEmail() {
      const {
        token
      } = body;
      const account = accounts.find(x => !!x.verificationToken && x.verificationToken === token);
      if (!account) return error('Verification failed');
      // set is verified flag to true if token is valid
      account.isVerified = true;
      localStorage.setItem(accountsKey, JSON.stringify(accounts));
      return ok();
    }
    function forgotPassword() {
      const {
        email
      } = body;
      const account = accounts.find(x => x.email === email);
      // always return ok() response to prevent email enumeration
      if (!account) return ok();
      // create reset token that expires after 24 hours
      account.resetToken = new Date().getTime().toString();
      account.resetTokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
      localStorage.setItem(accountsKey, JSON.stringify(accounts));
      // display password reset email in alert
      setTimeout(() => {
        const resetUrl = `${location.origin}/account/reset-password?token=${account.resetToken}`;
        alertService.info(`
                    <h4>Reset Password Email</h4>
                    <p>Please click the below link to reset your password, the link will be valid for 1 day:</p>
                    <p><a href="${resetUrl}">${resetUrl}</a></p>
                    <div><strong>NOTE:</strong> The fake backend displayed this "email" so you can test without an api. A real backend would send a real email.</div>
                `, {
          autoClose: false
        });
      }, 1000);
      return ok();
    }
    function validateResetToken() {
      const {
        token
      } = body;
      const account = accounts.find(x => !!x.resetToken && x.resetToken === token && new Date() < new Date(x.resetTokenExpires));
      if (!account) return error('Invalid token');
      return ok();
    }
    function resetPassword() {
      const {
        token,
        password
      } = body;
      const account = accounts.find(x => !!x.resetToken && x.resetToken === token && new Date() < new Date(x.resetTokenExpires));
      if (!account) return error('Invalid token');
      // update password and remove reset token
      account.password = password;
      account.isVerified = true;
      delete account.resetToken;
      delete account.resetTokenExpires;
      localStorage.setItem(accountsKey, JSON.stringify(accounts));
      return ok();
    }
    function getAccounts() {
      if (!isAuthenticated()) return unauthorized();
      return ok(accounts.map(x => basicDetails(x)));
    }
    function getAccountById() {
      if (!isAuthenticated()) return unauthorized();
      let account = accounts.find(x => x.id === idFromUrl());
      // user accounts can get own profile and admin accounts can get all profiles
      if (account.id !== currentAccount().id && !isAuthorized(_app_models__WEBPACK_IMPORTED_MODULE_0__.Role.Admin)) {
        return unauthorized();
      }
      return ok(basicDetails(account));
    }
    function createAccount() {
      if (!isAuthorized(_app_models__WEBPACK_IMPORTED_MODULE_0__.Role.Admin)) return unauthorized();
      const account = body;
      if (accounts.find(x => x.email === account.email)) {
        return error(`Email ${account.email} is already registered`);
      }
      // assign account id and a few other properties then save
      account.id = newAccountId();
      account.dateCreated = new Date().toISOString();
      account.isVerified = true;
      account.refreshTokens = [];
      delete account.confirmPassword;
      accounts.push(account);
      localStorage.setItem(accountsKey, JSON.stringify(accounts));
      return ok();
    }
    function updateAccount() {
      if (!isAuthenticated()) return unauthorized();
      let params = body;
      let account = accounts.find(x => x.id === idFromUrl());
      // user accounts can update own profile and admin accounts can update all profiles
      if (account.id !== currentAccount().id && !isAuthorized(_app_models__WEBPACK_IMPORTED_MODULE_0__.Role.Admin)) {
        return unauthorized();
      }
      // only update password if included
      if (!params.password) {
        delete params.password;
      }
      // don't save confirm password
      delete params.confirmPassword;
      // update and save account
      Object.assign(account, params);
      localStorage.setItem(accountsKey, JSON.stringify(accounts));
      return ok(basicDetails(account));
    }
    function deleteAccount() {
      if (!isAuthenticated()) return unauthorized();
      let account = accounts.find(x => x.id === idFromUrl());
      // user accounts can delete own account and admin accounts can delete any account
      if (account.id !== currentAccount().id && !isAuthorized(_app_models__WEBPACK_IMPORTED_MODULE_0__.Role.Admin)) {
        return unauthorized();
      }
      // delete account then save
      accounts = accounts.filter(x => x.id !== idFromUrl());
      localStorage.setItem(accountsKey, JSON.stringify(accounts));
      return ok();
    }
    // helper functions
    function ok(body) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
        status: 200,
        body
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(500)); // delay observable to simulate server api call
    }

    function error(message) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => ({
        error: {
          message
        }
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.materialize)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.dematerialize)()); // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648);
    }

    function unauthorized() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => ({
        status: 401,
        error: {
          message: 'Unauthorized'
        }
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.materialize)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.dematerialize)());
    }
    function basicDetails(account) {
      const {
        id,
        title,
        firstName,
        lastName,
        email,
        role,
        dateCreated,
        isVerified
      } = account;
      return {
        id,
        title,
        firstName,
        lastName,
        email,
        role,
        dateCreated,
        isVerified
      };
    }
    function isAuthenticated() {
      return !!currentAccount();
    }
    function isAuthorized(role) {
      const account = currentAccount();
      if (!account) return false;
      return account.role === role;
    }
    function idFromUrl() {
      const urlParts = url.split('/');
      return parseInt(urlParts[urlParts.length - 1]);
    }
    function newAccountId() {
      return accounts.length ? Math.max(...accounts.map(x => x.id)) + 1 : 1;
    }
    function currentAccount() {
      // check if jwt token is in auth header
      const authHeader = headers.get('Authorization');
      if (!authHeader?.startsWith('Bearer fake-jwt-token')) return;
      // check if token is expired
      const jwtToken = JSON.parse(atob(authHeader.split('.')[1]));
      const tokenExpired = Date.now() > jwtToken.exp * 1000;
      if (tokenExpired) return;
      const account = accounts.find(x => x.id === jwtToken.id);
      return account;
    }
    function generateJwtToken(account) {
      // create token that expires in 15 minutes
      const tokenPayload = {
        exp: Math.round(new Date(Date.now() + 15 * 60 * 1000).getTime() / 1000),
        id: account.id
      };
      return `fake-jwt-token.${btoa(JSON.stringify(tokenPayload))}`;
    }
    function generateRefreshToken() {
      const token = new Date().getTime().toString();
      // add token cookie that expires in 7 days
      const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();
      document.cookie = `fakeRefreshToken=${token}; expires=${expires}; path=/`;
      return token;
    }
    function getRefreshToken() {
      // get refresh token from cookie
      return (document.cookie.split(';').find(x => x.includes('fakeRefreshToken')) || '=').split('=')[1];
    }
  }
}
FakeBackendInterceptor.ɵfac = function FakeBackendInterceptor_Factory(t) {
  return new (t || FakeBackendInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_1__.AlertService));
};
FakeBackendInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: FakeBackendInterceptor,
  factory: FakeBackendInterceptor.ɵfac
});
let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};

/***/ }),

/***/ 9067:
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* reexport safe */ _auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard),
/* harmony export */   "ErrorInterceptor": () => (/* reexport safe */ _error_interceptor__WEBPACK_IMPORTED_MODULE_2__.ErrorInterceptor),
/* harmony export */   "FakeBackendInterceptor": () => (/* reexport safe */ _fake_backend__WEBPACK_IMPORTED_MODULE_3__.FakeBackendInterceptor),
/* harmony export */   "JwtInterceptor": () => (/* reexport safe */ _jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__.JwtInterceptor),
/* harmony export */   "MustMatch": () => (/* reexport safe */ _must_match_validator__WEBPACK_IMPORTED_MODULE_5__.MustMatch),
/* harmony export */   "appInitializer": () => (/* reexport safe */ _app_initializer__WEBPACK_IMPORTED_MODULE_0__.appInitializer),
/* harmony export */   "fakeBackendProvider": () => (/* reexport safe */ _fake_backend__WEBPACK_IMPORTED_MODULE_3__.fakeBackendProvider)
/* harmony export */ });
/* harmony import */ var _app_initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.initializer */ 3402);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ 5197);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.interceptor */ 7901);
/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fake-backend */ 4922);
/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt.interceptor */ 1084);
/* harmony import */ var _must_match_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./must-match.validator */ 496);







/***/ }),

/***/ 1084:
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services */ 9949);



class JwtInterceptor {
  constructor(accountService) {
    this.accountService = accountService;
  }
  intercept(request, next) {
    // add auth header with jwt if account is logged in and request is to the api url
    const account = this.accountService.accountValue;
    const isLoggedIn = account && account.jwtToken;
    const isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${account.jwtToken}`
        }
      });
    }
    return next.handle(request);
  }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
  return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_1__.AccountService));
};
JwtInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: JwtInterceptor,
  factory: JwtInterceptor.ɵfac
});

/***/ }),

/***/ 496:
/*!**************************************************!*\
  !*** ./src/app/_helpers/must-match.validator.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MustMatch": () => (/* binding */ MustMatch)
/* harmony export */ });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
  return group => {
    const control = group.get(controlName);
    const matchingControl = group.get(matchingControlName);
    if (!control || !matchingControl) {
      return null;
    }
    // return if another validator has already found an error on the matchingControl
    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return null;
    }
    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({
        mustMatch: true
      });
    } else {
      matchingControl.setErrors(null);
    }
    return null;
  };
}

/***/ }),

/***/ 9469:
/*!************************************!*\
  !*** ./src/app/_models/account.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Account": () => (/* binding */ Account)
/* harmony export */ });
class Account {}

/***/ }),

/***/ 4653:
/*!**********************************!*\
  !*** ./src/app/_models/alert.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Alert": () => (/* binding */ Alert),
/* harmony export */   "AlertOptions": () => (/* binding */ AlertOptions),
/* harmony export */   "AlertType": () => (/* binding */ AlertType)
/* harmony export */ });
class Alert {
  constructor(init) {
    Object.assign(this, init);
  }
}
var AlertType;
(function (AlertType) {
  AlertType[AlertType["Success"] = 0] = "Success";
  AlertType[AlertType["Error"] = 1] = "Error";
  AlertType[AlertType["Info"] = 2] = "Info";
  AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
class AlertOptions {}

/***/ }),

/***/ 3027:
/*!**********************************!*\
  !*** ./src/app/_models/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Account": () => (/* reexport safe */ _account__WEBPACK_IMPORTED_MODULE_0__.Account),
/* harmony export */   "Alert": () => (/* reexport safe */ _alert__WEBPACK_IMPORTED_MODULE_1__.Alert),
/* harmony export */   "AlertOptions": () => (/* reexport safe */ _alert__WEBPACK_IMPORTED_MODULE_1__.AlertOptions),
/* harmony export */   "AlertType": () => (/* reexport safe */ _alert__WEBPACK_IMPORTED_MODULE_1__.AlertType),
/* harmony export */   "Role": () => (/* reexport safe */ _role__WEBPACK_IMPORTED_MODULE_2__.Role)
/* harmony export */ });
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account */ 9469);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert */ 4653);
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role */ 3224);
/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restaurant */ 3652);
/* harmony import */ var _menu_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-item */ 6591);
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order */ 3237);







/***/ }),

/***/ 6591:
/*!**************************************!*\
  !*** ./src/app/_models/menu-item.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3237:
/*!**********************************!*\
  !*** ./src/app/_models/order.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3652:
/*!***************************************!*\
  !*** ./src/app/_models/restaurant.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3224:
/*!*********************************!*\
  !*** ./src/app/_models/role.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Role": () => (/* binding */ Role)
/* harmony export */ });
var Role;
(function (Role) {
  Role["User"] = "User";
  Role["Customer"] = "Customer";
  Role["Restaurant"] = "Restaurant";
  Role["Rider"] = "Rider";
  Role["Admin"] = "Admin";
})(Role || (Role = {}));

/***/ }),

/***/ 7110:
/*!**********************************************!*\
  !*** ./src/app/_services/account.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2313);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);






const baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/accounts`;
class AccountService {
  constructor(router, http) {
    this.router = router;
    this.http = http;
    this.accountSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.account = this.accountSubject.asObservable();
  }
  get accountValue() {
    return this.accountSubject.value;
  }
  login(email, password) {
    return this.http.post(`${baseUrl}/authenticate`, {
      email,
      password
    }, {
      withCredentials: true
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(account => {
      this.accountSubject.next(account);
      this.startRefreshTokenTimer();
      return account;
    }));
  }
  logout() {
    this.http.post(`${baseUrl}/revoke-token`, {}, {
      withCredentials: true
    }).subscribe();
    this.stopRefreshTokenTimer();
    this.accountSubject.next(null);
    this.router.navigate(['/account/login']);
  }
  refreshToken() {
    return this.http.post(`${baseUrl}/refresh-token`, {}, {
      withCredentials: true
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(account => {
      this.accountSubject.next(account);
      this.startRefreshTokenTimer();
      return account;
    }));
  }
  register(account) {
    return this.http.post(`${baseUrl}/register`, account);
  }
  verifyEmail(token) {
    return this.http.post(`${baseUrl}/verify-email`, {
      token
    });
  }
  forgotPassword(email) {
    return this.http.post(`${baseUrl}/forgot-password`, {
      email
    });
  }
  validateResetToken(token) {
    return this.http.post(`${baseUrl}/validate-reset-token`, {
      token
    });
  }
  resetPassword(token, password, confirmPassword) {
    return this.http.post(`${baseUrl}/reset-password`, {
      token,
      password,
      confirmPassword
    });
  }
  getAll() {
    return this.http.get(baseUrl);
  }
  getById(AccountId) {
    return this.http.get(`${baseUrl}/${AccountId}`);
  }
  create(params) {
    return this.http.post(baseUrl, params);
  }
  update(AccountId, params) {
    return this.http.put(`${baseUrl}/${AccountId}`, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(account => {
      // update the current account if it was updated
      if (account.AccountId === this.accountValue?.AccountId) {
        // publish updated account to subscribers
        account = {
          ...this.accountValue,
          ...account
        };
        this.accountSubject.next(account);
      }
      return account;
    }));
  }
  delete(AccountId) {
    return this.http.delete(`${baseUrl}/${AccountId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => {
      // auto logout if the logged in account was deleted
      if (AccountId === this.accountValue?.AccountId) this.logout();
    }));
  }
  startRefreshTokenTimer() {
    // parse json object from base64 encoded jwt token
    const jwtBase64 = this.accountValue.jwtToken.split('.')[1];
    const jwtToken = JSON.parse(atob(jwtBase64));
    // set a timeout to refresh the token a minute before it expires
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - 60 * 1000;
    this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
  }
  stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
}
AccountService.ɵfac = function AccountService_Factory(t) {
  return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
};
AccountService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: AccountService,
  factory: AccountService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1585:
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/_models */ 3027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




class AlertService {
  constructor() {
    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.defaultId = 'default-alert';
  }
  // enable subscribing to alerts observable
  onAlert(id = this.defaultId) {
    return this.subject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(x => x && x.id === id));
  }
  // convenience methods
  success(message, options) {
    this.alert(new _app_models__WEBPACK_IMPORTED_MODULE_0__.Alert({
      ...options,
      type: _app_models__WEBPACK_IMPORTED_MODULE_0__.AlertType.Success,
      message
    }));
  }
  error(message, options) {
    this.alert(new _app_models__WEBPACK_IMPORTED_MODULE_0__.Alert({
      ...options,
      type: _app_models__WEBPACK_IMPORTED_MODULE_0__.AlertType.Error,
      message
    }));
  }
  info(message, options) {
    this.alert(new _app_models__WEBPACK_IMPORTED_MODULE_0__.Alert({
      ...options,
      type: _app_models__WEBPACK_IMPORTED_MODULE_0__.AlertType.Info,
      message
    }));
  }
  warn(message, options) {
    this.alert(new _app_models__WEBPACK_IMPORTED_MODULE_0__.Alert({
      ...options,
      type: _app_models__WEBPACK_IMPORTED_MODULE_0__.AlertType.Warning,
      message
    }));
  }
  // core alert method
  alert(alert) {
    alert.id = alert.id || this.defaultId;
    alert.autoClose = alert.autoClose === undefined ? true : alert.autoClose;
    this.subject.next(alert);
  }
  // clear alerts
  clear(id = this.defaultId) {
    this.subject.next(new _app_models__WEBPACK_IMPORTED_MODULE_0__.Alert({
      id
    }));
  }
}
AlertService.ɵfac = function AlertService_Factory(t) {
  return new (t || AlertService)();
};
AlertService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AlertService,
  factory: AlertService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2728:
/*!***********************************************!*\
  !*** ./src/app/_services/delivery.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryService": () => (/* binding */ DeliveryService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



const baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/deliveries`;
class DeliveryService {
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(baseUrl);
  }
  getByOrderId(orderId) {
    return this.http.get(`${baseUrl}/order/${orderId}`);
  }
  update(id, params) {
    return this.http.put(`${baseUrl}/${id}`, params);
  }
}
DeliveryService.ɵfac = function DeliveryService_Factory(t) {
  return new (t || DeliveryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
DeliveryService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: DeliveryService,
  factory: DeliveryService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9949:
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* reexport safe */ _account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService),
/* harmony export */   "AlertService": () => (/* reexport safe */ _alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService),
/* harmony export */   "DeliveryService": () => (/* reexport safe */ _delivery_service__WEBPACK_IMPORTED_MODULE_4__.DeliveryService),
/* harmony export */   "OrderService": () => (/* reexport safe */ _order_service__WEBPACK_IMPORTED_MODULE_3__.OrderService),
/* harmony export */   "PaymentService": () => (/* reexport safe */ _payment_service__WEBPACK_IMPORTED_MODULE_5__.PaymentService),
/* harmony export */   "RestaurantService": () => (/* reexport safe */ _restaurant_service__WEBPACK_IMPORTED_MODULE_2__.RestaurantService)
/* harmony export */ });
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.service */ 7110);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ 1585);
/* harmony import */ var _restaurant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant.service */ 5496);
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.service */ 1971);
/* harmony import */ var _delivery_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delivery.service */ 2728);
/* harmony import */ var _payment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment.service */ 2632);







/***/ }),

/***/ 1971:
/*!********************************************!*\
  !*** ./src/app/_services/order.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderService": () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



const baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/orders`;
class OrderService {
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(baseUrl);
  }
  getMyOrders() {
    return this.http.get(`${baseUrl}/my-orders`);
  }
  getByRestaurant(restaurantId) {
    return this.http.get(`${baseUrl}/restaurant/${restaurantId}`);
  }
  getRiderDeliveries() {
    return this.http.get(`${baseUrl}/rider-deliveries`);
  }
  getAvailableForRiders() {
    return this.http.get(`${baseUrl}/available-for-rider`);
  }
  getById(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(params) {
    return this.http.post(baseUrl, params);
  }
  updateStatus(id, status) {
    return this.http.put(`${baseUrl}/${id}/status`, {
      status
    });
  }
  assignRider(id, riderAccountId) {
    return this.http.put(`${baseUrl}/${id}/assign-rider`, {
      riderAccountId
    });
  }
  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
OrderService.ɵfac = function OrderService_Factory(t) {
  return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
OrderService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: OrderService,
  factory: OrderService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2632:
/*!**********************************************!*\
  !*** ./src/app/_services/payment.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentService": () => (/* binding */ PaymentService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



const baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/payments`;
class PaymentService {
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(baseUrl);
  }
  getByOrderId(orderId) {
    return this.http.get(`${baseUrl}/order/${orderId}`);
  }
  updateStatus(id, paymentStatus) {
    return this.http.put(`${baseUrl}/${id}/status`, {
      paymentStatus
    });
  }
}
PaymentService.ɵfac = function PaymentService_Factory(t) {
  return new (t || PaymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
PaymentService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: PaymentService,
  factory: PaymentService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5496:
/*!*************************************************!*\
  !*** ./src/app/_services/restaurant.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantService": () => (/* binding */ RestaurantService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



const baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/restaurants`;
const menuItemUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/menu-items`;
class RestaurantService {
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(baseUrl);
  }
  getById(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }
  getMyRestaurant() {
    return this.http.get(`${baseUrl}/my-restaurant`);
  }
  create(params) {
    return this.http.post(baseUrl, params);
  }
  update(id, params) {
    return this.http.put(`${baseUrl}/${id}`, params);
  }
  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  // Menu Item CRUD
  getMenuItems(restaurantId) {
    return this.http.get(`${menuItemUrl}/restaurant/${restaurantId}`);
  }
  createMenuItem(params) {
    return this.http.post(menuItemUrl, params);
  }
  updateMenuItem(id, params) {
    return this.http.put(`${menuItemUrl}/${id}`, params);
  }
  deleteMenuItem(id) {
    return this.http.delete(`${menuItemUrl}/${id}`);
  }
}
RestaurantService.ɵfac = function RestaurantService_Factory(t) {
  return new (t || RestaurantService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
RestaurantService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: RestaurantService,
  factory: RestaurantService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ 3456);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_helpers */ 9067);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_models */ 3027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const accountModule = () => __webpack_require__.e(/*! import() */ "src_app_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/account.module */ 3879)).then(x => x.AccountModule);
const adminModule = () => __webpack_require__.e(/*! import() */ "src_app_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.module */ 7095)).then(x => x.AdminModule);
const profileModule = () => __webpack_require__.e(/*! import() */ "src_app_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 4523)).then(x => x.ProfileModule);
const routes = [{
  path: '',
  component: _home__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
  canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'account',
  loadChildren: accountModule
}, {
  path: 'profile',
  loadChildren: profileModule,
  canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'admin',
  loadChildren: adminModule,
  canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
  data: {
    roles: [_models__WEBPACK_IMPORTED_MODULE_2__.Role.Admin]
  }
},
// otherwise redirect to home
{
  path: '**',
  redirectTo: ''
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

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
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_models */ 3027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services */ 9949);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/alert.component */ 3041);






function AppComponent_nav_1_a_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Admin Portal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    exact: true
  };
};
function AppComponent_nav_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 4)(1, "div", 5)(2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " kaonline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 8)(6, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Home Marketplace ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AppComponent_nav_1_a_12_Template, 3, 0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 14)(14, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_nav_1_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.account.role === ctx_r0.Role.Admin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.account.role, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r0.account.firstName, " ", ctx_r0.account.lastName, " ");
  }
}
class AppComponent {
  constructor(accountService) {
    this.accountService = accountService;
    this.Role = _models__WEBPACK_IMPORTED_MODULE_0__.Role;
    this.accountService.account.subscribe(x => this.account = x);
  }
  logout() {
    this.accountService.logout();
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__.AccountService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 6,
  vars: 1,
  consts: [[1, "app-container", "min-vh-100", "bg-light"], ["class", "navbar navbar-expand navbar-dark bg-danger shadow-sm px-4", 4, "ngIf"], ["name", "subnav"], [1, "container", "mt-3"], [1, "navbar", "navbar-expand", "navbar-dark", "bg-danger", "shadow-sm", "px-4"], [1, "container-fluid"], ["routerLink", "/", 1, "navbar-brand", "fw-bold", "fs-4", "d-flex", "align-items-center", "me-4"], [1, "bi", "bi-bag-heart-fill", "me-2", "fs-3"], [1, "navbar-nav", "me-auto"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-item", "nav-link", "fw-semibold", 3, "routerLinkActiveOptions"], [1, "bi", "bi-house-door", "me-1"], ["routerLink", "/profile", "routerLinkActive", "active", 1, "nav-item", "nav-link", "fw-semibold"], [1, "bi", "bi-person-circle", "me-1"], ["routerLink", "/admin", "routerLinkActive", "active", "class", "nav-item nav-link fw-semibold", 4, "ngIf"], [1, "d-flex", "align-items-center", "gap-3"], [1, "badge", "bg-white", "text-danger", "px-3", "py-2", "rounded-pill", "fw-bold", "shadow-sm"], [1, "bi", "bi-person-badge", "me-1"], [1, "text-white", "small", "d-none", "d-md-inline", "fw-semibold"], [1, "btn", "btn-outline-light", "btn-sm", "fw-bold", 3, "click"], [1, "bi", "bi-box-arrow-right", "me-1"], ["routerLink", "/admin", "routerLinkActive", "active", 1, "nav-item", "nav-link", "fw-semibold"], [1, "bi", "bi-speedometer2", "me-1"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppComponent_nav_1_Template, 22, 6, "nav", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "router-outlet", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "alert");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.account);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _components_alert_component__WEBPACK_IMPORTED_MODULE_2__.AlertComponent],
  encapsulation: 2
});

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_helpers */ 9067);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services */ 9949);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components */ 3130);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home */ 3456);
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer/customer.component */ 3033);
/* harmony import */ var _restaurant_portal_restaurant_portal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./restaurant-portal/restaurant-portal.component */ 7127);
/* harmony import */ var _rider_portal_rider_portal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rider-portal/rider-portal.component */ 4640);














class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__.APP_INITIALIZER,
    useFactory: _helpers__WEBPACK_IMPORTED_MODULE_1__.appInitializer,
    multi: true,
    deps: [_services__WEBPACK_IMPORTED_MODULE_2__.AccountService]
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
    useClass: _helpers__WEBPACK_IMPORTED_MODULE_1__.JwtInterceptor,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
    useClass: _helpers__WEBPACK_IMPORTED_MODULE_1__.ErrorInterceptor,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _components__WEBPACK_IMPORTED_MODULE_4__.AlertComponent, _home__WEBPACK_IMPORTED_MODULE_5__.HomeComponent, _customer_customer_component__WEBPACK_IMPORTED_MODULE_6__.CustomerComponent, _restaurant_portal_restaurant_portal_component__WEBPACK_IMPORTED_MODULE_7__.RestaurantPortalComponent, _rider_portal_rider_portal_component__WEBPACK_IMPORTED_MODULE_8__.RiderPortalComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 3033:
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerComponent": () => (/* binding */ CustomerComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/_services */ 9949);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function CustomerComponent_li_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 11)(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerComponent_li_22_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.activeTab = "track");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r0.activeTab === "track");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Track Live Delivery (#", ctx_r0.activeTrackingOrder.OrderId, ") ");
  }
}
function CustomerComponent_div_23_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30)(1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerComponent_div_23_div_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.selectedRestaurant = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Back to Restaurants ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.selectedRestaurant.name);
  }
}
function CustomerComponent_div_23_div_4_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38)(1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 28)(4, "div", 41)(5, "h5", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 47)(15, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerComponent_div_23_div_4_div_3_div_1_Template_button_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const res_r16 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.selectRestaurant(res_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "View Menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const res_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", res_r16.imageUrl || "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", res_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](res_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](res_r16.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](res_r16.cuisine);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](res_r16.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](res_r16.address);
  }
}
function CustomerComponent_div_23_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerComponent_div_23_div_4_div_3_div_1_Template, 20, 7, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r14.restaurants);
  }
}
function CustomerComponent_div_23_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "h4", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Popular Restaurants");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CustomerComponent_div_23_div_4_div_3_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.restaurants.length > 0);
  }
}
function CustomerComponent_div_23_div_5_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerComponent_div_23_div_5_button_2_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);
      const cat_r21 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.selectedCategory = cat_r21);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r21 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("btn-danger", ctx_r19.selectedCategory === cat_r21)("btn-outline-secondary", ctx_r19.selectedCategory !== cat_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", cat_r21, " ");
  }
}
function CustomerComponent_div_23_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38)(1, "div", 55)(2, "div", 56)(3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 59)(6, "div", 60)(7, "h6", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 63)(12, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerComponent_div_23_div_5_div_4_Template_button_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const item_r24 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.addToCart(item_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r24.imageUrl || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", item_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r24.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B1", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 5, item_r24.price, "1.2-2"), "");
  }
}
function CustomerComponent_div_23_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CustomerComponent_div_23_div_5_button_2_Template, 2, 5, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CustomerComponent_div_23_div_5_div_4_Template, 17, 8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.filteredMenuItems);
  }
}
function CustomerComponent_div_23_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerComponent_div_23_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r27.clearCart());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CustomerComponent_div_23_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Your cart is empty. Select items from a restaurant menu to get started!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function CustomerComponent_div_23_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89)(1, "div")(2, "h6", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 90)(8, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerComponent_div_23_div_15_div_2_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);
      const item_r31 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r32.removeFromCart(item_r31.menuItem));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerComponent_div_23_div_15_div_2_Template_button_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);
      const item_r31 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r34.addToCart(item_r31.menuItem));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r31.menuItem.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B1", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 3, item_r31.menuItem.price, "1.2-2"), " each");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r31.quantity);
  }
}
function CustomerComponent_div_23_div_15_span_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 92);
  }
}
function CustomerComponent_div_23_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CustomerComponent_div_23_div_15_div_2_Template, 14, 6, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 73)(4, "div", 74)(5, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 74)(11, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Delivery Fee");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "FREE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 77)(17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 78)(23, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Delivery Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerComponent_div_23_div_15_Template_input_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r35.deliveryAddress = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 78)(27, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Contact Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerComponent_div_23_div_15_Template_input_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r37.contactPhone = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 78)(31, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Payment Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "select", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerComponent_div_23_div_15_Template_select_ngModelChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r38.paymentMethod = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Cash on Delivery (COD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "GCash / E-Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Credit/Debit Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 78)(41, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Notes / Instructions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerComponent_div_23_div_15_Template_input_ngModelChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r39.specialInstructions = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerComponent_div_23_div_15_Template_button_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r40.placeOrder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, CustomerComponent_div_23_div_15_span_45_Template, 1, 0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Place Order Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.cart);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B1", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 9, ctx_r11.cartTotal, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B1", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](21, 12, ctx_r11.cartTotal, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r11.deliveryAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r11.contactPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r11.paymentMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r11.specialInstructions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r11.submittingOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.submittingOrder);
  }
}
function CustomerComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 19)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CustomerComponent_div_23_div_3_Template, 6, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CustomerComponent_div_23_div_4_Template, 4, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CustomerComponent_div_23_div_5_Template, 5, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 22)(7, "div", 23)(8, "div", 24)(9, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Your Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CustomerComponent_div_23_button_12_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CustomerComponent_div_23_div_14_Template, 4, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CustomerComponent_div_23_div_15_Template, 47, 15, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.selectedRestaurant);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.selectedRestaurant);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.selectedRestaurant);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.cart.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.cart.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.cart.length > 0);
  }
}
function CustomerComponent_div_24_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " You haven't placed any orders yet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CustomerComponent_div_24_div_4_div_1_li_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", item_r46.quantity, "x ", item_r46.itemName, " - \u20B1", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 3, item_r46.price, "1.2-2"), " ");
  }
}
function CustomerComponent_div_24_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38)(1, "div", 96)(2, "div", 97)(3, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 28)(8, "h6", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CustomerComponent_div_24_div_4_div_1_li_15_Template, 3, 6, "li", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 103)(17, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerComponent_div_24_div_4_div_1_Template_button_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48);
      const order_r44 = restoredCtx.$implicit;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r47.trackOrder(order_r44));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Track Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const order_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Order #", order_r44.OrderId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-warning", order_r44.status === "Pending" || order_r44.status === "Preparing")("bg-info", order_r44.status === "Picked Up" || order_r44.status === "Out for Delivery")("bg-success", order_r44.status === "Delivered");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", order_r44.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r44.Restaurant == null ? null : order_r44.Restaurant.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 12, order_r44.created, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", order_r44.OrderItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total: \u20B1", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](19, 15, order_r44.totalAmount, "1.2-2"), "");
  }
}
function CustomerComponent_div_24_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomerComponent_div_24_div_4_div_1_Template, 23, 18, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r42.myOrders);
  }
}
function CustomerComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "h4", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Order History");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CustomerComponent_div_24_div_3_Template, 2, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CustomerComponent_div_24_div_4_Template, 2, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.myOrders.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.myOrders.length > 0);
  }
}
function CustomerComponent_div_25_p_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r49.activeTrackingOrder.Rider.firstName, " ", ctx_r49.activeTrackingOrder.Rider.lastName, " ");
  }
}
function CustomerComponent_div_25_p_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Assigning nearest rider...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CustomerComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 106)(2, "div", 107)(3, "div")(4, "h4", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Live Delivery Tracker");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerComponent_div_25_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r51.refreshTracking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Refresh Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 110)(14, "h6", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Sequence Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 112)(17, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 115)(20, "div", 116)(21, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Order Placed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 116)(26, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Restaurant Confirmed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 116)(31, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Preparing Food");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 116)(36, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Rider On The Way");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 116)(41, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Delivered");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 119)(46, "div", 120)(47, "div", 121)(48, "h6", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "small", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 120)(56, "div", 121)(57, "h6", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " Delivery Rider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, CustomerComponent_div_25_p_60_Template, 2, 2, "p", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, CustomerComponent_div_25_p_61_Template, 2, 0, "p", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 120)(63, "div", 121)(64, "h6", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " Destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "i", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Order #", ctx_r3.activeTrackingOrder.OrderId, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.activeTrackingOrder.Restaurant == null ? null : ctx_r3.activeTrackingOrder.Restaurant.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", (ctx_r3.getOrderStepIndex(ctx_r3.activeTrackingOrder.status) - 1) * 25, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("btn-danger", ctx_r3.getOrderStepIndex(ctx_r3.activeTrackingOrder.status) >= 1)("btn-secondary", ctx_r3.getOrderStepIndex(ctx_r3.activeTrackingOrder.status) < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("btn-danger", ctx_r3.getOrderStepIndex(ctx_r3.activeTrackingOrder.status) >= 2)("btn-secondary", ctx_r3.getOrderStepIndex(ctx_r3.activeTrackingOrder.status) < 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("btn-danger", ctx_r3.getOrderStepIndex(ctx_r3.activeTrackingOrder.status) >= 3)("btn-secondary", ctx_r3.getOrderStepIndex(ctx_r3.activeTrackingOrder.status) < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("btn-danger", ctx_r3.getOrderStepIndex(ctx_r3.activeTrackingOrder.status) >= 4)("btn-secondary", ctx_r3.getOrderStepIndex(ctx_r3.activeTrackingOrder.status) < 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("btn-danger", ctx_r3.getOrderStepIndex(ctx_r3.activeTrackingOrder.status) >= 5)("btn-secondary", ctx_r3.getOrderStepIndex(ctx_r3.activeTrackingOrder.status) < 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.activeTrackingOrder.Payment == null ? null : ctx_r3.activeTrackingOrder.Payment.paymentMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-success", (ctx_r3.activeTrackingOrder.Payment == null ? null : ctx_r3.activeTrackingOrder.Payment.paymentStatus) === "Completed")("bg-warning", (ctx_r3.activeTrackingOrder.Payment == null ? null : ctx_r3.activeTrackingOrder.Payment.paymentStatus) !== "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx_r3.activeTrackingOrder.Payment == null ? null : ctx_r3.activeTrackingOrder.Payment.paymentStatus) || "Pending", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeTrackingOrder.Rider);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.activeTrackingOrder.Rider);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.activeTrackingOrder.deliveryAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.activeTrackingOrder.contactPhone);
  }
}
class CustomerComponent {
  constructor(restaurantService, orderService, accountService, alertService) {
    this.restaurantService = restaurantService;
    this.orderService = orderService;
    this.accountService = accountService;
    this.alertService = alertService;
    this.account = null;
    this.restaurants = [];
    this.selectedRestaurant = null;
    this.menuItems = [];
    this.cart = [];
    this.myOrders = [];
    this.activeTrackingOrder = null;
    this.loading = false;
    this.submittingOrder = false;
    // Filter
    this.selectedCategory = 'All';
    this.categories = ['All'];
    // Checkout Form
    this.deliveryAddress = '';
    this.contactPhone = '';
    this.paymentMethod = 'Cash on Delivery'; // Cash on Delivery, GCash / E-Wallet, Card
    this.specialInstructions = '';
    // Views: 'browse', 'menu', 'cart', 'orders', 'track'
    this.activeTab = 'browse';
    this.account = this.accountService.accountValue;
    if (this.account) {
      this.deliveryAddress = '123 Main St, Metro Manila';
      this.contactPhone = '+63 917 123 4567';
    }
  }
  ngOnInit() {
    this.loadRestaurants();
    this.loadMyOrders();
  }
  loadRestaurants() {
    this.loading = true;
    this.restaurantService.getAll().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe({
      next: data => {
        this.restaurants = data;
        this.loading = false;
      },
      error: err => {
        this.alertService.error(err);
        this.loading = false;
      }
    });
  }
  loadMyOrders() {
    this.orderService.getMyOrders().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe({
      next: orders => {
        this.myOrders = orders;
        if (orders.length > 0 && !this.activeTrackingOrder) {
          this.activeTrackingOrder = orders[0];
        }
      }
    });
  }
  selectRestaurant(restaurant) {
    this.selectedRestaurant = restaurant;
    this.menuItems = restaurant.MenuItems || [];
    // Extract categories
    const catSet = new Set();
    catSet.add('All');
    this.menuItems.forEach(item => {
      if (item.category) catSet.add(item.category);
    });
    this.categories = Array.from(catSet);
    this.selectedCategory = 'All';
  }
  get filteredMenuItems() {
    if (this.selectedCategory === 'All') {
      return this.menuItems;
    }
    return this.menuItems.filter(i => i.category === this.selectedCategory);
  }
  addToCart(item) {
    if (this.selectedRestaurant && this.cart.length > 0) {
      const currentRestaurantId = this.cart[0].menuItem.RestaurantId;
      if (currentRestaurantId !== item.RestaurantId) {
        if (confirm('Your cart contains items from another restaurant. Clear cart and add this item?')) {
          this.cart = [];
        } else {
          return;
        }
      }
    }
    const existing = this.cart.find(c => c.menuItem.MenuItemId === item.MenuItemId);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({
        menuItem: item,
        quantity: 1
      });
    }
    this.alertService.success(`Added ${item.name} to cart`);
  }
  removeFromCart(item) {
    const index = this.cart.findIndex(c => c.menuItem.MenuItemId === item.MenuItemId);
    if (index > -1) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity -= 1;
      } else {
        this.cart.splice(index, 1);
      }
    }
  }
  clearCart() {
    this.cart = [];
  }
  get cartTotal() {
    return this.cart.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);
  }
  placeOrder() {
    if (this.cart.length === 0) {
      this.alertService.error('Your cart is empty');
      return;
    }
    if (!this.deliveryAddress.trim() || !this.contactPhone.trim()) {
      this.alertService.error('Please enter delivery address and contact phone number');
      return;
    }
    this.submittingOrder = true;
    const payload = {
      RestaurantId: this.cart[0].menuItem.RestaurantId,
      items: this.cart.map(c => ({
        MenuItemId: c.menuItem.MenuItemId,
        name: c.menuItem.name,
        quantity: c.quantity,
        price: c.menuItem.price
      })),
      deliveryAddress: this.deliveryAddress,
      contactPhone: this.contactPhone,
      paymentMethod: this.paymentMethod,
      specialInstructions: this.specialInstructions,
      totalAmount: this.cartTotal
    };
    this.orderService.create(payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe({
      next: order => {
        this.submittingOrder = false;
        this.cart = [];
        this.alertService.success('Order placed successfully!');
        this.loadMyOrders();
        this.trackOrder(order);
      },
      error: err => {
        this.submittingOrder = false;
        this.alertService.error(err);
      }
    });
  }
  trackOrder(order) {
    this.activeTrackingOrder = order;
    this.activeTab = 'track';
  }
  refreshTracking() {
    if (this.activeTrackingOrder && this.activeTrackingOrder.OrderId) {
      this.orderService.getById(this.activeTrackingOrder.OrderId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe({
        next: updatedOrder => {
          this.activeTrackingOrder = updatedOrder;
        }
      });
    }
  }
  getOrderStepIndex(status) {
    switch (status) {
      case 'Pending':
        return 1;
      case 'Confirmed':
      case 'Accepted':
        return 2;
      case 'Preparing':
        return 3;
      case 'Ready for Pickup':
      case 'Picked Up':
        return 4;
      case 'Out for Delivery':
        return 4;
      case 'Delivered':
        return 5;
      default:
        return 1;
    }
  }
}
CustomerComponent.ɵfac = function CustomerComponent_Factory(t) {
  return new (t || CustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.RestaurantService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.AlertService));
};
CustomerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CustomerComponent,
  selectors: [["app-customer"]],
  decls: 26,
  vars: 9,
  consts: [[1, "container", "py-4"], [1, "p-4", "mb-4", "rounded-3", "text-white", "shadow-sm", 2, "background", "linear-gradient(135deg, #ff4757 0%, #ff6b81 100%)"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "fw-bold", "display-5", "mb-2"], [1, "bi", "bi-bag-check-fill", "me-2"], [1, "lead", "mb-0"], [1, "col-md-4", "text-md-end", "mt-3", "mt-md-0"], [1, "badge", "bg-light", "text-dark", "px-3", "py-2", "fs-6", "rounded-pill", "shadow-sm"], [1, "bi", "bi-geo-alt-fill", "text-danger", "me-1"], [1, "nav", "nav-pills", "mb-4", "gap-2", "border-bottom", "pb-3"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "bi", "bi-shop", "me-1"], [1, "bi", "bi-clock-history", "me-1"], ["class", "nav-item", 4, "ngIf"], [4, "ngIf"], [1, "nav-link", "text-danger", 3, "click"], [1, "bi", "bi-geo-fill", "me-1"], [1, "row"], [1, "col-lg-8", "mb-4"], ["class", "mb-3 d-flex align-items-center justify-content-between", 4, "ngIf"], [1, "col-lg-4"], [1, "card", "border-0", "shadow-sm", "rounded-3", "sticky-top", 2, "top", "20px"], [1, "card-header", "bg-danger", "text-white", "d-flex", "justify-content-between", "align-items-center", "py-3"], [1, "mb-0", "fw-bold"], [1, "bi", "bi-cart3", "me-2"], ["class", "btn btn-sm btn-outline-light", 3, "click", 4, "ngIf"], [1, "card-body"], ["class", "text-center py-4 text-muted", 4, "ngIf"], [1, "mb-3", "d-flex", "align-items-center", "justify-content-between"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-arrow-left", "me-1"], [1, "badge", "bg-danger", "fs-6"], [1, "fw-bold", "mb-3"], ["class", "row g-4", 4, "ngIf"], [1, "row", "g-4"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "col-md-6"], [1, "card", "h-100", "border-0", "shadow-sm", "rounded-3", "overflow-hidden", "hover-shadow"], [1, "card-img-top", 2, "height", "180px", "object-fit", "cover", 3, "src", "alt"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-2"], [1, "card-title", "fw-bold", "mb-0"], [1, "badge", "bg-warning", "text-dark"], [1, "bi", "bi-star-fill", "me-1"], [1, "badge", "bg-light", "text-secondary", "border", "me-1"], [1, "card-text", "text-muted", "small", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "text-muted"], [1, "bi", "bi-geo-alt", "me-1"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "d-flex", "gap-2", "mb-3", "overflow-auto", "pb-2"], ["class", "btn btn-sm rounded-pill", 3, "btn-danger", "btn-outline-secondary", "click", 4, "ngFor", "ngForOf"], [1, "row", "g-3"], [1, "btn", "btn-sm", "rounded-pill", 3, "click"], [1, "card", "h-100", "border-0", "shadow-sm", "rounded-3"], [1, "row", "g-0", "align-items-center"], [1, "col-4"], [1, "img-fluid", "rounded-start", "h-100", 2, "object-fit", "cover", "min-height", "110px", 3, "src", "alt"], [1, "col-8"], [1, "card-body", "py-2", "pe-3"], [1, "fw-bold", "mb-1"], [1, "text-muted", "small", "mb-1", "text-truncate"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-2"], [1, "fw-bold", "text-danger"], [1, "btn", "btn-outline-danger", "btn-sm", "rounded-circle", "px-2", 3, "click"], [1, "bi", "bi-plus-lg"], [1, "btn", "btn-sm", "btn-outline-light", 3, "click"], [1, "text-center", "py-4", "text-muted"], [1, "bi", "bi-cart-x", "display-4", "d-block", "mb-2"], [1, "mb-0"], [1, "list-group", "list-group-flush", "mb-3"], ["class", "list-group-item px-0 d-flex justify-content-between align-items-center", 4, "ngFor", "ngForOf"], [1, "border-top", "pt-3", "mb-3"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "fw-bold"], [1, "text-success", "fw-bold"], [1, "d-flex", "justify-content-between", "fs-5", "fw-bold", "text-danger"], [1, "mb-3"], [1, "form-label", "small", "fw-bold"], ["type", "text", "placeholder", "Enter delivery address", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Mobile number", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "form-select", "form-select-sm", 3, "ngModel", "ngModelChange"], ["value", "Cash on Delivery"], ["value", "GCash / E-Wallet"], ["value", "Credit/Debit Card"], ["type", "text", "placeholder", "e.g. Extra napkins, call upon arrival", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-danger", "w-100", "py-2", "fw-bold", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "list-group-item", "px-0", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center", "gap-2"], [1, "btn", "btn-sm", "btn-outline-secondary", "px-2", "py-0", 3, "click"], [1, "spinner-border", "spinner-border-sm", "me-1"], ["class", "alert alert-info", 4, "ngIf"], ["class", "row g-3", 4, "ngIf"], [1, "alert", "alert-info"], [1, "card", "border-0", "shadow-sm", "rounded-3"], [1, "card-header", "bg-white", "d-flex", "justify-content-between", "align-items-center"], [1, "badge"], [1, "small", "text-muted", "mb-2"], [1, "bi", "bi-clock", "me-1"], [1, "list-unstyled", "small", "mb-3"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "align-items-center", "pt-2", "border-top"], [1, "fw-bold", "text-dark"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "card", "border-0", "shadow-sm", "rounded-3", "p-4"], [1, "d-flex", "justify-content-between", "align-items-center", "border-bottom", "pb-3", "mb-4"], [1, "text-muted", "small"], [1, "bi", "bi-arrow-clockwise", "me-1"], [1, "mb-5"], [1, "text-uppercase", "text-muted", "fw-bold", "mb-3", "small"], [1, "position-relative", "m-4"], [1, "progress", 2, "height", "4px"], [1, "progress-bar", "bg-danger"], [1, "d-flex", "justify-content-between", "position-absolute", "top-0", "start-0", "w-100", "translate-middle-y"], [1, "text-center"], [1, "rounded-circle", "btn", "btn-sm"], [1, "small", "fw-bold", "mt-1"], [1, "row", "g-3", "mt-4"], [1, "col-md-4"], [1, "p-3", "bg-light", "rounded-3", "border"], [1, "fw-bold", "text-muted", "mb-1"], [1, "bi", "bi-credit-card", "me-1"], [1, "mb-0", "fw-bold", "text-dark"], [1, "bi", "bi-bicycle", "me-1"], ["class", "mb-0 fw-bold text-dark", 4, "ngIf"], ["class", "mb-0 text-muted italic small", 4, "ngIf"], [1, "mb-0", "small", "fw-bold", "text-dark"], [1, "bi", "bi-telephone", "me-1"], [1, "mb-0", "text-muted", "italic", "small"]],
  template: function CustomerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "KaOnline Delivery");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Order delicious meals from top local restaurants delivered straight to your doorstep.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Metro Manila ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ul", 10)(14, "li", 11)(15, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerComponent_Template_button_click_15_listener() {
        return ctx.activeTab = "browse";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Browse Restaurants ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 11)(19, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerComponent_Template_button_click_19_listener() {
        return ctx.activeTab = "orders";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, CustomerComponent_li_22_Template, 4, 3, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, CustomerComponent_div_23_Template, 16, 6, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, CustomerComponent_div_24_Template, 5, 2, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, CustomerComponent_div_25_Template, 72, 34, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeTab === "browse");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeTab === "orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" My Orders (", ctx.myOrders.length, ") ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTrackingOrder);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTab === "browse");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTab === "orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTab === "track" && ctx.activeTrackingOrder);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
  encapsulation: 2
});

/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/_models */ 3027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services */ 9949);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer/customer.component */ 3033);
/* harmony import */ var _restaurant_portal_restaurant_portal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../restaurant-portal/restaurant-portal.component */ 7127);
/* harmony import */ var _rider_portal_rider_portal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rider-portal/rider-portal.component */ 4640);







function HomeComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.switchRoleView("Admin"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Admin View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("btn-danger", ctx_r0.activeRoleView === "Admin")("btn-outline-light", ctx_r0.activeRoleView !== "Admin");
  }
}
function HomeComponent_app_customer_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-customer");
  }
}
function HomeComponent_app_restaurant_portal_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-restaurant-portal");
  }
}
function HomeComponent_app_rider_portal_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-rider-portal");
  }
}
function HomeComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " You are viewing as Admin. You can access full administrative settings via the navbar or switch to customer/restaurant/rider views above. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class HomeComponent {
  constructor(accountService) {
    this.accountService = accountService;
    this.account = null;
    this.Role = _app_models__WEBPACK_IMPORTED_MODULE_0__.Role;
    this.activeRoleView = 'Customer';
    this.account = this.accountService.accountValue;
  }
  ngOnInit() {
    if (this.account) {
      this.activeRoleView = this.account.role || 'Customer';
    }
  }
  switchRoleView(role) {
    this.activeRoleView = role;
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_1__.AccountService));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["ng-component"]],
  decls: 26,
  vars: 20,
  consts: [[1, "bg-dark", "text-white", "py-2", "px-3", "border-bottom", "shadow-sm"], [1, "container", "d-flex", "justify-content-between", "align-items-center", "flex-wrap"], [1, "d-flex", "align-items-center", "gap-2"], [1, "badge", "bg-danger"], [1, "text-light"], [1, "btn-group", "btn-group-sm", "mt-1", "mt-md-0"], [1, "btn", 3, "click"], [1, "bi", "bi-person", "me-1"], [1, "bi", "bi-shop", "me-1"], [1, "bi", "bi-bicycle", "me-1"], ["class", "btn", 3, "btn-danger", "btn-outline-light", "click", 4, "ngIf"], [4, "ngIf"], ["class", "p-3", 4, "ngIf"], [1, "bi", "bi-shield-check", "me-1"], [1, "p-3"], [1, "alert", "alert-info", "container", "my-3"], [1, "bi", "bi-info-circle", "me-2"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "KAONLINE PORTAL SWITCHER");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "small", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Logged in as: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 5)(12, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_12_listener() {
        return ctx.switchRoleView("Customer");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " Customer Marketplace ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_15_listener() {
        return ctx.switchRoleView("Restaurant");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Restaurant Portal ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_18_listener() {
        return ctx.switchRoleView("Rider");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " Rider Portal ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, HomeComponent_button_21_Template, 3, 4, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, HomeComponent_app_customer_22_Template, 1, 0, "app-customer", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, HomeComponent_app_restaurant_portal_23_Template, 1, 0, "app-restaurant-portal", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, HomeComponent_app_rider_portal_24_Template, 1, 0, "app-rider-portal", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, HomeComponent_div_25_Template, 5, 0, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx.account == null ? null : ctx.account.firstName, " ", ctx.account == null ? null : ctx.account.lastName, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" (", ctx.account == null ? null : ctx.account.role, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("btn-danger", ctx.activeRoleView === "Customer" || ctx.activeRoleView === "User")("btn-outline-light", ctx.activeRoleView !== "Customer" && ctx.activeRoleView !== "User");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("btn-danger", ctx.activeRoleView === "Restaurant")("btn-outline-light", ctx.activeRoleView !== "Restaurant");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("btn-danger", ctx.activeRoleView === "Rider")("btn-outline-light", ctx.activeRoleView !== "Rider");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.account == null ? null : ctx.account.role) === ctx.Role.Admin);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.activeRoleView === "Customer" || ctx.activeRoleView === "User");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.activeRoleView === "Restaurant");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.activeRoleView === "Rider");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.activeRoleView === "Admin");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _customer_customer_component__WEBPACK_IMPORTED_MODULE_2__.CustomerComponent, _restaurant_portal_restaurant_portal_component__WEBPACK_IMPORTED_MODULE_3__.RestaurantPortalComponent, _rider_portal_rider_portal_component__WEBPACK_IMPORTED_MODULE_4__.RiderPortalComponent],
  encapsulation: 2
});

/***/ }),

/***/ 3456:
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* reexport safe */ _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent)
/* harmony export */ });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 5067);


/***/ }),

/***/ 7127:
/*!******************************************************************!*\
  !*** ./src/app/restaurant-portal/restaurant-portal.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantPortalComponent": () => (/* binding */ RestaurantPortalComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/_services */ 9949);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function RestaurantPortalComponent_div_29_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No incoming orders at the moment. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RestaurantPortalComponent_div_29_div_4_div_1_li_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r14.quantity, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r14.itemName, " (\u20B1", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 3, item_r14.price, "1.2-2"), ") ");
  }
}
function RestaurantPortalComponent_div_29_div_4_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46)(1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const order_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Note: ", order_r7.specialInstructions, "");
  }
}
function RestaurantPortalComponent_div_29_div_4_div_1_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RestaurantPortalComponent_div_29_div_4_div_1_button_28_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const order_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.updateOrderStatus(order_r7.OrderId, "Confirmed"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Confirm Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RestaurantPortalComponent_div_29_div_4_div_1_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RestaurantPortalComponent_div_29_div_4_div_1_button_29_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const order_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.updateOrderStatus(order_r7.OrderId, "Preparing"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Start Preparing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RestaurantPortalComponent_div_29_div_4_div_1_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RestaurantPortalComponent_div_29_div_4_div_1_button_30_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const order_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.updateOrderStatus(order_r7.OrderId, "Ready for Pickup"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Ready for Pickup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RestaurantPortalComponent_div_29_div_4_div_1_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const order_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Sequence Active: ", order_r7.status, " ");
  }
}
function RestaurantPortalComponent_div_29_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25)(1, "div", 26)(2, "div", 27)(3, "div")(4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 31)(12, "div", 32)(13, "strong", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 36)(20, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, RestaurantPortalComponent_div_29_div_4_div_1_li_21_Template, 5, 6, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, RestaurantPortalComponent_div_29_div_4_div_1_div_22_Template, 3, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 40)(24, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, RestaurantPortalComponent_div_29_div_4_div_1_button_28_Template, 3, 0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, RestaurantPortalComponent_div_29_div_4_div_1_button_29_Template, 3, 0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, RestaurantPortalComponent_div_29_div_4_div_1_button_30_Template, 3, 0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, RestaurantPortalComponent_div_29_div_4_div_1_span_31_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const order_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Order #", order_r7.OrderId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 21, order_r7.created, "shortTime"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-warning", order_r7.status === "Pending")("bg-info", order_r7.status === "Confirmed" || order_r7.status === "Preparing")("bg-primary", order_r7.status === "Ready for Pickup")("bg-success", order_r7.status === "Delivered");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", order_r7.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Customer: ", order_r7.Customer == null ? null : order_r7.Customer.firstName, " ", order_r7.Customer == null ? null : order_r7.Customer.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r7.deliveryAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", order_r7.OrderItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", order_r7.specialInstructions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total: \u20B1", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](26, 24, order_r7.totalAmount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", order_r7.status === "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", order_r7.status === "Confirmed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", order_r7.status === "Preparing");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", order_r7.status === "Ready for Pickup" || order_r7.status === "Picked Up" || order_r7.status === "Out for Delivery" || order_r7.status === "Delivered");
  }
}
function RestaurantPortalComponent_div_29_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RestaurantPortalComponent_div_29_div_4_div_1_Template, 32, 27, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.orders);
  }
}
function RestaurantPortalComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Order Processing Pipeline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RestaurantPortalComponent_div_29_div_3_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RestaurantPortalComponent_div_29_div_4_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.orders.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.orders.length > 0);
  }
}
function RestaurantPortalComponent_div_30_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "strong", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "small", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td")(10, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td")(16, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td", 61)(19, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RestaurantPortalComponent_div_30_tr_22_Template_button_click_19_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);
      const item_r27 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r28.openEditMenuItemModal(item_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RestaurantPortalComponent_div_30_tr_22_Template_button_click_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);
      const item_r27 = restoredCtx.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r30.deleteMenuItem(item_r27.MenuItemId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r27.imageUrl || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", item_r27.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r27.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r27.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r27.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B1", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 11, item_r27.price, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-success", item_r27.isAvailable)("bg-danger", !item_r27.isAvailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r27.isAvailable ? "Available" : "Sold Out", " ");
  }
}
function RestaurantPortalComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 54)(2, "h4", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Menu Items Catalog");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RestaurantPortalComponent_div_30_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r31.openAddMenuItemModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Add New Menu Item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 58)(8, "table", 59)(9, "thead", 60)(10, "tr")(11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, RestaurantPortalComponent_div_30_tr_22_Template, 23, 14, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.menuItems);
  }
}
function RestaurantPortalComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 70)(2, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Edit Restaurant Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 23)(5, "div", 25)(6, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Restaurant Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RestaurantPortalComponent_div_31_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r33.restaurant.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 25)(10, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Cuisine Specialty");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RestaurantPortalComponent_div_31_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r35.restaurant.cuisine = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 73)(14, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "textarea", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RestaurantPortalComponent_div_31_Template_textarea_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r36.restaurant.description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 25)(18, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Physical Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RestaurantPortalComponent_div_31_Template_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r37.restaurant.address = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 25)(22, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Contact Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RestaurantPortalComponent_div_31_Template_input_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r38.restaurant.phone = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 73)(26, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Banner Image URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RestaurantPortalComponent_div_31_Template_input_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r39.restaurant.imageUrl = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 73)(30, "div", 75)(31, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RestaurantPortalComponent_div_31_Template_input_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r40.restaurant.isOpen = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Restaurant Open for Accepting Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 78)(35, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RestaurantPortalComponent_div_31_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r41.saveRestaurantDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Save Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.restaurant.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.restaurant.cuisine);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.restaurant.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.restaurant.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.restaurant.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.restaurant.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.restaurant.isOpen);
  }
}
function RestaurantPortalComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 80)(1, "div", 81)(2, "div", 82)(3, "div", 83)(4, "h5", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RestaurantPortalComponent_div_32_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r42.showMenuItemModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 86)(8, "div", 87)(9, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Item Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RestaurantPortalComponent_div_32_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r44.itemForm.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 87)(13, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RestaurantPortalComponent_div_32_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r45.itemForm.category = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 87)(17, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Price (\u20B1)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RestaurantPortalComponent_div_32_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r46.itemForm.price = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 87)(21, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "textarea", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RestaurantPortalComponent_div_32_Template_textarea_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r47.itemForm.description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 87)(25, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Image URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RestaurantPortalComponent_div_32_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r48.itemForm.imageUrl = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 93)(29, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RestaurantPortalComponent_div_32_Template_input_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r49.itemForm.isAvailable = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Available in Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 96)(33, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RestaurantPortalComponent_div_32_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r50.showMenuItemModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RestaurantPortalComponent_div_32_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r51.saveMenuItem());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Save Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.editingItem ? "Edit Menu Item" : "Add New Menu Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.itemForm.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.itemForm.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.itemForm.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.itemForm.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.itemForm.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.itemForm.isAvailable);
  }
}
class RestaurantPortalComponent {
  constructor(restaurantService, orderService, alertService) {
    this.restaurantService = restaurantService;
    this.orderService = orderService;
    this.alertService = alertService;
    this.restaurant = null;
    this.menuItems = [];
    this.orders = [];
    this.loading = false;
    this.activeTab = 'orders';
    // Menu Item Form
    this.showMenuItemModal = false;
    this.editingItem = null;
    this.itemForm = {
      name: '',
      description: '',
      price: 0,
      category: 'Main Course',
      imageUrl: '',
      isAvailable: true
    };
  }
  ngOnInit() {
    this.loadMyRestaurant();
  }
  loadMyRestaurant() {
    this.loading = true;
    this.restaurantService.getMyRestaurant().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe({
      next: data => {
        this.restaurant = data;
        this.loading = false;
        if (data && data.RestaurantId) {
          this.loadMenuItems(data.RestaurantId);
          this.loadOrders(data.RestaurantId);
        }
      },
      error: err => {
        this.loading = false;
        this.alertService.error(err);
      }
    });
  }
  loadMenuItems(restaurantId) {
    this.restaurantService.getMenuItems(restaurantId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe({
      next: items => this.menuItems = items
    });
  }
  loadOrders(restaurantId) {
    this.orderService.getByRestaurant(restaurantId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe({
      next: data => this.orders = data
    });
  }
  updateOrderStatus(orderId, status) {
    this.orderService.updateStatus(orderId, status).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe({
      next: () => {
        this.alertService.success(`Order #${orderId} status updated to ${status}`);
        if (this.restaurant?.RestaurantId) {
          this.loadOrders(this.restaurant.RestaurantId);
        }
      },
      error: err => this.alertService.error(err)
    });
  }
  openAddMenuItemModal() {
    this.editingItem = null;
    this.itemForm = {
      name: '',
      description: '',
      price: 0,
      category: 'Main Course',
      imageUrl: '',
      isAvailable: true
    };
    this.showMenuItemModal = true;
  }
  openEditMenuItemModal(item) {
    this.editingItem = item;
    this.itemForm = {
      name: item.name,
      description: item.description || '',
      price: item.price,
      category: item.category,
      imageUrl: item.imageUrl || '',
      isAvailable: item.isAvailable !== false
    };
    this.showMenuItemModal = true;
  }
  saveMenuItem() {
    if (!this.restaurant || !this.restaurant.RestaurantId) return;
    if (!this.itemForm.name || this.itemForm.price <= 0) {
      this.alertService.error('Item name and a valid price are required.');
      return;
    }
    if (this.editingItem && this.editingItem.MenuItemId) {
      this.restaurantService.updateMenuItem(this.editingItem.MenuItemId, this.itemForm).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe({
        next: () => {
          this.alertService.success('Menu item updated!');
          this.showMenuItemModal = false;
          this.loadMenuItems(this.restaurant.RestaurantId);
        }
      });
    } else {
      const payload = {
        ...this.itemForm,
        RestaurantId: this.restaurant.RestaurantId
      };
      this.restaurantService.createMenuItem(payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe({
        next: () => {
          this.alertService.success('Menu item added!');
          this.showMenuItemModal = false;
          this.loadMenuItems(this.restaurant.RestaurantId);
        }
      });
    }
  }
  deleteMenuItem(id) {
    if (confirm('Are you sure you want to delete this menu item?')) {
      this.restaurantService.deleteMenuItem(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe({
        next: () => {
          this.alertService.success('Menu item deleted');
          if (this.restaurant?.RestaurantId) {
            this.loadMenuItems(this.restaurant.RestaurantId);
          }
        }
      });
    }
  }
  saveRestaurantDetails() {
    if (!this.restaurant || !this.restaurant.RestaurantId) return;
    this.restaurantService.update(this.restaurant.RestaurantId, this.restaurant).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe({
      next: () => this.alertService.success('Restaurant info updated successfully!')
    });
  }
}
RestaurantPortalComponent.ɵfac = function RestaurantPortalComponent_Factory(t) {
  return new (t || RestaurantPortalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.RestaurantService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.AlertService));
};
RestaurantPortalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: RestaurantPortalComponent,
  selectors: [["app-restaurant-portal"]],
  decls: 33,
  vars: 20,
  consts: [[1, "container", "py-4"], [1, "p-4", "mb-4", "rounded-3", "text-white", "shadow-sm", 2, "background", "linear-gradient(135deg, #1e272e 0%, #485460 100%)"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "badge", "bg-danger", "mb-2"], [1, "fw-bold", "mb-1"], [1, "mb-0", "text-light", "small"], [1, "bi", "bi-geo-alt", "me-1"], [1, "bi", "bi-telephone", "me-1"], [1, "col-md-4", "text-md-end", "mt-3", "mt-md-0"], [1, "badge", "px-3", "py-2", "fs-6", "rounded-pill"], [1, "nav", "nav-pills", "mb-4", "gap-2", "border-bottom", "pb-3"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "bi", "bi-receipt", "me-1"], [1, "bi", "bi-list-stars", "me-1"], [1, "bi", "bi-gear", "me-1"], [4, "ngIf"], ["class", "modal d-block bg-dark bg-opacity-50", "tabindex", "-1", 4, "ngIf"], [1, "fw-bold", "mb-3"], ["class", "alert alert-info", 4, "ngIf"], ["class", "row g-3", 4, "ngIf"], [1, "alert", "alert-info"], [1, "row", "g-3"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "col-md-6"], [1, "card", "border-0", "shadow-sm", "rounded-3"], [1, "card-header", "bg-white", "d-flex", "justify-content-between", "align-items-center"], [1, "fw-bold"], [1, "text-muted", "small", "ms-2"], [1, "badge"], [1, "card-body"], [1, "mb-2"], [1, "d-block", "text-dark"], [1, "bi", "bi-person", "me-1"], [1, "text-muted"], [1, "bg-light", "p-2", "rounded", "mb-3"], [1, "list-unstyled", "small", "mb-0"], [4, "ngFor", "ngForOf"], ["class", "text-danger small mt-1", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "pt-2", "border-top"], [1, "btn-group", "btn-group-sm"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-warning text-dark", 3, "click", 4, "ngIf"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], ["class", "badge bg-light text-dark border align-self-center", 4, "ngIf"], [1, "text-danger", "small", "mt-1"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-check-lg", "me-1"], [1, "btn", "btn-warning", "text-dark", 3, "click"], [1, "bi", "bi-fire", "me-1"], [1, "btn", "btn-success", 3, "click"], [1, "bi", "bi-box-seam", "me-1"], [1, "badge", "bg-light", "text-dark", "border", "align-self-center"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "fw-bold", "mb-0"], [1, "btn", "btn-danger", 3, "click"], [1, "bi", "bi-plus-lg", "me-1"], [1, "table-responsive", "bg-white", "rounded-3", "shadow-sm", "p-3"], [1, "table", "table-hover", "align-middle", "mb-0"], [1, "table-light"], [1, "text-end"], [1, "d-flex", "align-items-center"], [1, "rounded", "me-2", 2, "width", "48px", "height", "48px", "object-fit", "cover", 3, "src", "alt"], [1, "d-block"], [1, "text-muted", "text-truncate", "d-inline-block", 2, "max-width", "250px"], [1, "badge", "bg-secondary"], [1, "fw-bold", "text-danger"], [1, "btn", "btn-sm", "btn-outline-primary", "me-2", 3, "click"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "card", "border-0", "shadow-sm", "rounded-3", "p-4"], [1, "form-label", "fw-bold", "small"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-12"], ["rows", "2", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "isOpenSwitch", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "isOpenSwitch", 1, "form-check-label", "fw-bold"], [1, "col-md-12", "text-end"], [1, "btn", "btn-danger", "px-4", 3, "click"], ["tabindex", "-1", 1, "modal", "d-block", "bg-dark", "bg-opacity-50"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", "bg-danger", "text-white"], [1, "modal-title", "fw-bold"], ["type", "button", 1, "btn-close", "btn-close-white", 3, "click"], [1, "modal-body"], [1, "mb-3"], [1, "form-label", "small", "fw-bold"], ["type", "text", "placeholder", "e.g. Bacon Cheeseburger", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "e.g. Burgers, Drinks, Desserts", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "step", "0.01", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "https://...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-check", "form-switch", "mb-3"], ["type", "checkbox", "id", "availSwitch", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "availSwitch", 1, "form-check-label", "fw-bold", "small"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
  template: function RestaurantPortalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "RESTAURANT PORTAL");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9)(14, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 11)(17, "li", 12)(18, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RestaurantPortalComponent_Template_button_click_18_listener() {
        return ctx.activeTab = "orders";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 12)(22, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RestaurantPortalComponent_Template_button_click_22_listener() {
        return ctx.activeTab = "menu";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 12)(26, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RestaurantPortalComponent_Template_button_click_26_listener() {
        return ctx.activeTab = "settings";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Restaurant Settings ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, RestaurantPortalComponent_div_29_Template, 5, 2, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, RestaurantPortalComponent_div_30_Template, 23, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, RestaurantPortalComponent_div_31_Template, 37, 7, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, RestaurantPortalComponent_div_32_Template, 37, 7, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx.restaurant == null ? null : ctx.restaurant.name) || "My Restaurant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (ctx.restaurant == null ? null : ctx.restaurant.address) || "Restaurant Address", " | ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.restaurant == null ? null : ctx.restaurant.phone);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-success", ctx.restaurant == null ? null : ctx.restaurant.isOpen)("bg-secondary", !(ctx.restaurant == null ? null : ctx.restaurant.isOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx.restaurant == null ? null : ctx.restaurant.isOpen) ? "\u25CF OPEN FOR ORDERS" : "\u25CB CLOSED", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeTab === "orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Incoming Orders (", ctx.orders.length, ") ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeTab === "menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Menu Management (", ctx.menuItems.length, ") ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeTab === "settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTab === "orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTab === "menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTab === "settings" && ctx.restaurant);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showMenuItemModal);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
  encapsulation: 2
});

/***/ }),

/***/ 4640:
/*!********************************************************!*\
  !*** ./src/app/rider-portal/rider-portal.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiderPortalComponent": () => (/* binding */ RiderPortalComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/_services */ 9949);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function RiderPortalComponent_div_23_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " You currently have no active deliveries assigned. Switch to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Available Orders Queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " to accept an order! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RiderPortalComponent_div_23_div_4_div_1_button_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RiderPortalComponent_div_23_div_4_div_1_button_42_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const order_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.updateDeliveryStatus(order_r5.OrderId, "Out for Delivery"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Pick Up & Start Delivery ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RiderPortalComponent_div_23_div_4_div_1_button_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RiderPortalComponent_div_23_div_4_div_1_button_43_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const order_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.updateDeliveryStatus(order_r5.OrderId, "Delivered"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Mark Delivered & Collect Cash ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RiderPortalComponent_div_23_div_4_div_1_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Delivery Completed! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RiderPortalComponent_div_23_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 27)(8, "div", 28)(9, "h6", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 28)(20, "h6", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 37)(30, "div", 38)(31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Payment Method:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 38)(36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Collect Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, RiderPortalComponent_div_23_div_4_div_1_button_42_Template, 3, 0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, RiderPortalComponent_div_23_div_4_div_1_button_43_Template, 3, 0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, RiderPortalComponent_div_23_div_4_div_1_div_44_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const order_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Order #", order_r5.OrderId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-warning", order_r5.status === "Picked Up")("bg-info", order_r5.status === "Out for Delivery")("bg-success", order_r5.status === "Delivered");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", order_r5.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Pickup: ", order_r5.Restaurant == null ? null : order_r5.Restaurant.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r5.Restaurant == null ? null : order_r5.Restaurant.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r5.Restaurant == null ? null : order_r5.Restaurant.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Deliver To: ", order_r5.Customer == null ? null : order_r5.Customer.firstName, " ", order_r5.Customer == null ? null : order_r5.Customer.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r5.deliveryAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r5.contactPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r5.Payment == null ? null : order_r5.Payment.paymentMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B1", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](40, 20, order_r5.totalAmount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", order_r5.status !== "Out for Delivery" && order_r5.status !== "Delivered");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", order_r5.status === "Out for Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", order_r5.status === "Delivered");
  }
}
function RiderPortalComponent_div_23_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RiderPortalComponent_div_23_div_4_div_1_Template, 45, 23, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.myDeliveries);
  }
}
function RiderPortalComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Assigned Deliveries");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RiderPortalComponent_div_23_div_3_Template, 5, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RiderPortalComponent_div_23_div_4_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.myDeliveries.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.myDeliveries.length > 0);
  }
}
function RiderPortalComponent_div_24_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No orders currently waiting for rider acceptance. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RiderPortalComponent_div_24_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 27)(8, "h6", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 55)(17, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RiderPortalComponent_div_24_div_4_div_1_Template_button_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);
      const order_r18 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.acceptOrder(order_r18.OrderId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Accept Delivery ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const order_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Order #", order_r18.OrderId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r18.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r18.Restaurant == null ? null : order_r18.Restaurant.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("From: ", order_r18.Restaurant == null ? null : order_r18.Restaurant.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("To: ", order_r18.deliveryAddress, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Earning/Total: \u20B1", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](19, 6, order_r18.totalAmount, "1.2-2"), "");
  }
}
function RiderPortalComponent_div_24_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RiderPortalComponent_div_24_div_4_div_1_Template, 23, 9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r16.availableOrders);
  }
}
function RiderPortalComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Available Orders Ready For Pickup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RiderPortalComponent_div_24_div_3_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RiderPortalComponent_div_24_div_4_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.availableOrders.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.availableOrders.length > 0);
  }
}
class RiderPortalComponent {
  constructor(orderService, accountService, alertService) {
    this.orderService = orderService;
    this.accountService = accountService;
    this.alertService = alertService;
    this.account = null;
    this.availableOrders = [];
    this.myDeliveries = [];
    this.loading = false;
    this.activeTab = 'my-deliveries';
    this.account = this.accountService.accountValue;
  }
  ngOnInit() {
    this.loadRiderData();
  }
  loadRiderData() {
    this.loading = true;
    this.orderService.getRiderDeliveries().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe({
      next: data => {
        this.myDeliveries = data;
        this.loading = false;
      },
      error: err => {
        this.loading = false;
        this.alertService.error(err);
      }
    });
    this.orderService.getAvailableForRiders().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe({
      next: data => {
        this.availableOrders = data;
      }
    });
  }
  acceptOrder(orderId) {
    this.orderService.assignRider(orderId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe({
      next: () => {
        this.alertService.success(`Accepted Order #${orderId} for delivery!`);
        this.loadRiderData();
      },
      error: err => this.alertService.error(err)
    });
  }
  updateDeliveryStatus(orderId, status) {
    this.orderService.updateStatus(orderId, status).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe({
      next: () => {
        this.alertService.success(`Order #${orderId} status updated to ${status}`);
        this.loadRiderData();
      },
      error: err => this.alertService.error(err)
    });
  }
}
RiderPortalComponent.ɵfac = function RiderPortalComponent_Factory(t) {
  return new (t || RiderPortalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.AlertService));
};
RiderPortalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: RiderPortalComponent,
  selectors: [["app-rider-portal"]],
  decls: 25,
  vars: 9,
  consts: [[1, "container", "py-4"], [1, "p-4", "mb-4", "rounded-3", "text-white", "shadow-sm", 2, "background", "linear-gradient(135deg, #05c46b 0%, #0be881 100%)"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "badge", "bg-dark", "mb-2"], [1, "fw-bold", "mb-1"], [1, "bi", "bi-bicycle", "me-2"], [1, "mb-0", "text-white-50", "small"], [1, "col-md-4", "text-md-end", "mt-3", "mt-md-0"], [1, "badge", "bg-dark", "px-3", "py-2", "fs-6", "rounded-pill"], [1, "nav", "nav-pills", "mb-4", "gap-2", "border-bottom", "pb-3"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "bi", "bi-box2-heart", "me-1"], [1, "bi", "bi-search", "me-1"], [4, "ngIf"], [1, "fw-bold", "mb-3"], ["class", "alert alert-info", 4, "ngIf"], ["class", "row g-3", 4, "ngIf"], [1, "alert", "alert-info"], [1, "row", "g-3"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "col-md-6"], [1, "card", "border-0", "shadow-sm", "rounded-3"], [1, "card-header", "bg-white", "d-flex", "justify-content-between", "align-items-center"], [1, "fw-bold"], [1, "badge"], [1, "card-body"], [1, "mb-3"], [1, "fw-bold", "text-success", "mb-1"], [1, "bi", "bi-shop", "me-1"], [1, "text-muted", "d-block"], [1, "bi", "bi-geo-alt", "me-1"], [1, "bi", "bi-telephone", "me-1"], [1, "fw-bold", "text-dark", "mb-1"], [1, "bi", "bi-person", "me-1"], [1, "bi", "bi-geo-alt-fill", "text-danger", "me-1"], [1, "p-2", "bg-light", "rounded", "mb-3"], [1, "d-flex", "justify-content-between", "text-muted", "small"], [1, "fw-bold", "text-dark"], [1, "fw-bold", "text-danger", "fs-6"], [1, "d-grid", "gap-2"], ["class", "btn btn-info text-white fw-bold", 3, "click", 4, "ngIf"], ["class", "btn btn-success fw-bold", 3, "click", 4, "ngIf"], ["class", "alert alert-success py-2 text-center mb-0 small fw-bold", 4, "ngIf"], [1, "btn", "btn-info", "text-white", "fw-bold", 3, "click"], [1, "bi", "bi-bicycle", "me-1"], [1, "btn", "btn-success", "fw-bold", 3, "click"], [1, "bi", "bi-check-circle-fill", "me-1"], [1, "alert", "alert-success", "py-2", "text-center", "mb-0", "small", "fw-bold"], [1, "bi", "bi-patch-check-fill", "me-1"], [1, "badge", "bg-warning", "text-dark"], [1, "fw-bold", "text-danger"], [1, "small", "text-muted", "mb-2"], [1, "small", "text-muted", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "pt-2", "border-top"], [1, "btn", "btn-success", "btn-sm", "fw-bold", 3, "click"], [1, "bi", "bi-plus-circle", "me-1"]],
  template: function RiderPortalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "DELIVERY RIDER PORTAL");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Manage your active order deliveries and accept new available requests.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8)(12, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " \u25CF RIDER ONLINE ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 10)(15, "li", 11)(16, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RiderPortalComponent_Template_button_click_16_listener() {
        return ctx.activeTab = "my-deliveries";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 11)(20, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RiderPortalComponent_Template_button_click_20_listener() {
        return ctx.activeTab = "available";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, RiderPortalComponent_div_23_Template, 5, 2, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, RiderPortalComponent_div_24_Template, 5, 2, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Welcome, ", (ctx.account == null ? null : ctx.account.firstName) || "Rider", "!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeTab === "my-deliveries");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" My Active Deliveries (", ctx.myDeliveries.length, ") ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeTab === "available");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Available Orders Queue (", ctx.availableOrders.length, ") ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTab === "my-deliveries");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTab === "available");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe],
  encapsulation: 2
});

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
  production: false,
  apiUrl: 'http://localhost:4000'
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map