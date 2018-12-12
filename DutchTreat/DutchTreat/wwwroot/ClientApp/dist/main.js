(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
/*!****************************************************************!*\
  !*** ./ClientApp/$$_lazy_route_resource lazy namespace object ***!
  \****************************************************************/
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
webpackEmptyAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/Checkout/checkout.component.css":
/*!*******************************************************!*\
  !*** ./ClientApp/app/Checkout/checkout.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkout-thumb {\n  max-width: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvQ2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtDQUNsQiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL0NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tvdXQtdGh1bWIge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./ClientApp/app/Checkout/checkout.component.html":
/*!********************************************************!*\
  !*** ./ClientApp/app/Checkout/checkout.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div *ngIf=\"errorMsg\" class=\"alert alert-danger\">{{errorMsg}}</div>\n  <h3>Confirm Order</h3>\n  <table class=\"table table-bordered table-hover\">\n    <tr *ngFor=\"let o of data.order.items\">\n      <td><img src=\"/img/nun.jpg\"  alt=\"o.productTitle\" class=\"img-thumbnail checkout-thumb\" /></td>\n      <td>{{ o.productCategory }}({{ o.productSize }}) - {{ o.productArtist }}: {{ o.productTitle }}</td>\n      <td>{{ o.quantity }}</td>\n      <td>{{ o.unitPrice|currency:'USD':'code' }}</td>\n      <td>{{ (o.unitPrice * o.quantity)|currency:'USD':'code' }}</td>\n    </tr>\n  </table>\n  <div class=\"col-md-4 col-md-offset-8 text-right\">\n    <table class=\"table table-condensed\">\n      <tr>\n        <td class=\"text-right\">Subtotal</td>\n        <td class=\"text-right\">{{ data.order.subtotal|currency:'USD':'code' }}</td>\n      </tr>\n      <tr>\n        <td class=\"text-right\">Shipping</td>\n        <td class=\"text-right\">$ 0.00</td>\n      </tr>\n      <tr>\n        <td class=\"text-right\">Total:</td>\n        <td class=\"text-right\">{{ data.order.subtotal|currency:'USD':'code' }}</td>\n      </tr>\n    </table>\n    <button class=\"btn btn-success\" (click)=\"onCheckout()\">Complete Purchase</button>\n    <a routerLink=\"/\" class=\"btn btn-info\">Cancel</a>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./ClientApp/app/Checkout/checkout.component.ts":
/*!******************************************************!*\
  !*** ./ClientApp/app/Checkout/checkout.component.ts ***!
  \******************************************************/
/*! exports provided: Checkout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkout", function() { return Checkout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataService */ "./ClientApp/app/shared/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Checkout = /** @class */ (function () {
    function Checkout(data, route) {
        this.data = data;
        this.route = route;
        this.errorMsg = "";
    }
    Checkout.prototype.onCheckout = function () {
        var _this = this;
        this.data.checkout()
            .subscribe(function (success) {
            if (success) {
                _this.route.navigate(["/"]);
            }
        }, function (err) { return _this.errorMsg = "Failed to save order"; });
    };
    Checkout = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "checkout",
            template: __webpack_require__(/*! ./checkout.component.html */ "./ClientApp/app/Checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./ClientApp/app/Checkout/checkout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Checkout);
    return Checkout;
}());



/***/ }),

/***/ "./ClientApp/app/app-routing.module.ts":
/*!*********************************************!*\
  !*** ./ClientApp/app/app-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop/shop.component */ "./ClientApp/app/shop/shop.component.ts");
/* harmony import */ var _Checkout_checkout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Checkout/checkout.component */ "./ClientApp/app/Checkout/checkout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./ClientApp/app/login/login.component.ts");






var routes = [
    { path: "", component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_3__["Shop"] },
    { path: "Checkout", component: _Checkout_checkout_component__WEBPACK_IMPORTED_MODULE_4__["Checkout"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["Login"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    useHash: true,
                    enableTracing: false
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./ClientApp/app/app.component.html":
/*!******************************************!*\
  !*** ./ClientApp/app/app.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/*!****************************************!*\
  !*** ./ClientApp/app/app.component.ts ***!
  \****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Product List';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'the-shop',
            template: __webpack_require__(/*! ./app.component.html */ "./ClientApp/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/*!*************************************!*\
  !*** ./ClientApp/app/app.module.ts ***!
  \*************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./ClientApp/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./ClientApp/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shop_productList_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shop/productList.component */ "./ClientApp/app/shop/productList.component.ts");
/* harmony import */ var _shop_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shop/cart.component */ "./ClientApp/app/shop/cart.component.ts");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/dataService */ "./ClientApp/app/shared/dataService.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shop/shop.component */ "./ClientApp/app/shop/shop.component.ts");
/* harmony import */ var _Checkout_checkout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Checkout/checkout.component */ "./ClientApp/app/Checkout/checkout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./ClientApp/app/login/login.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _shop_productList_component__WEBPACK_IMPORTED_MODULE_8__["productList"],
                _shop_cart_component__WEBPACK_IMPORTED_MODULE_9__["Cart"],
                _shop_shop_component__WEBPACK_IMPORTED_MODULE_11__["Shop"],
                _Checkout_checkout_component__WEBPACK_IMPORTED_MODULE_12__["Checkout"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["Login"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__["APP_BASE_HREF"], useValue: '/'
                },
                _shared_dataService__WEBPACK_IMPORTED_MODULE_10__["DataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./ClientApp/app/login/login.component.html":
/*!**************************************************!*\
  !*** ./ClientApp/app/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-4 col-md-offset-4\">\r\n    <form (submit)=\"onLogin()\" #theForm=\"ngForm\" novalidate>\r\n        <div *ngIf=\"errormsg\" class=\"alert alert-warning\" >{{ errormsg }}</div>\r\n      <div class=\"form-group\">\r\n        <label for=\"username\">Username</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"credens.username\" #username=\"ngModel\" required />\r\n          <div class=\"text-danger\" *ngIf=\"username.touched && username.invalid \" >User Name is Required</div>\r\n        \r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"credens.password\" #password=\"ngModel\" required />\r\n          <div class=\"text-danger\" *ngIf=\"password.invalid && password.touched  \">Password is Required</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" [disabled]=\"theForm.invalid\" />\r\n        <a routerLink=\"/\" class=\"btn btn-default\">Cancel</a>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/login/login.component.ts":
/*!************************************************!*\
  !*** ./ClientApp/app/login/login.component.ts ***!
  \************************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataService */ "./ClientApp/app/shared/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Login = /** @class */ (function () {
    function Login(data, router) {
        this.data = data;
        this.router = router;
        this.errormsg = "";
        this.credens = {
            username: "",
            password: ""
        };
    }
    Login.prototype.onLogin = function () {
        var _this = this;
        //alert(this.credens.username);
        this.data.login(this.credens)
            .subscribe(function (success) {
            if (success) {
                if (_this.data.order.items.length > 0) {
                    _this.router.navigate(["Checkout"]);
                }
                else {
                    _this.router.navigate([""]);
                }
            }
        }, function (err) { return _this.errormsg = "Failed to Login"; });
    };
    Login = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./ClientApp/app/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Login);
    return Login;
}());



/***/ }),

/***/ "./ClientApp/app/shared/Order.ts":
/*!***************************************!*\
  !*** ./ClientApp/app/shared/Order.ts ***!
  \***************************************/
/*! exports provided: Order, OrderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItem", function() { return OrderItem; });
var Order = /** @class */ (function () {
    function Order() {
        this.orderDate = new Date();
        this.items = new Array();
    }
    return Order;
}());

var OrderItem = /** @class */ (function () {
    function OrderItem() {
    }
    return OrderItem;
}());



/***/ }),

/***/ "./ClientApp/app/shared/dataService.ts":
/*!*********************************************!*\
  !*** ./ClientApp/app/shared/dataService.ts ***!
  \*********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _Order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Order */ "./ClientApp/app/shared/Order.ts");






var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.token = "";
        this.order = new _Order__WEBPACK_IMPORTED_MODULE_5__["Order"]();
        this.products = [];
    }
    DataService.prototype.loadProducts = function () {
        var _this = this;
        var fff = this.http.get('/api/products')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((function (data) { return _this.products = data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err); })));
        return fff;
    };
    Object.defineProperty(DataService.prototype, "loginRequired", {
        get: function () {
            return this.token.length == 0 || this.tokenExpiration > new Date();
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.login = function (credens) {
        var _this = this;
        return this.http.post("/account/createtoken", credens)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            var tokenInfo = data;
            _this.token = tokenInfo.token;
            _this.tokenExpiration = tokenInfo.expiration;
            return true;
        }));
        //.subscribe((data:any) => {
        //        let tokenInfo = data;
        //        this.token = tokenInfo.token;
        //        this.tokenExpiration = tokenInfo.expiration;
        //        return true;
        //    })
    };
    DataService.prototype.checkout = function () {
        var _this = this;
        if (!this.order.orderNumber) {
            this.order.orderNumber = this.order.orderDate.getFullYear().toString + this.order.orderDate.getTime().toString();
        }
        return this.http.post("/api/orders", this.order, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            _this.order = new _Order__WEBPACK_IMPORTED_MODULE_5__["Order"]();
            return true;
        }));
    };
    DataService.prototype.AddToOrder = function (product) {
        //if (!this.order) {
        //    this.order = new Order();
        //}
        var item = this.order.items.find(function (i) { return i.productId == product.id; });
        if (item) {
        }
        else {
        }
        item = new _Order__WEBPACK_IMPORTED_MODULE_5__["OrderItem"]();
        item.productId = product.id;
        item.productArtist = product.artist;
        item.productTitle = product.title;
        item.unitPrice = product.price;
        item.productSize = product.size;
        item.productCategory = product.category;
        this.order.items.push(item);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./ClientApp/app/shop/cart.component.html":
/*!************************************************!*\
  !*** ./ClientApp/app/shop/cart.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Shopping Cart</h3>\r\n<div>Count:{{data.order.items.length}}</div> \r\n<div>\r\n\r\n    <table class=\"table table-bordered\">\r\n        <thead>\r\n            <tr>\r\n                <td>Product</td>\r\n                <td>Artist</td>\r\n                <td>UnitPrice</td>\r\n                <td>Product Size</td>\r\n                \r\n            </tr>\r\n        </thead>\r\n        <tbody >\r\n            <tr *ngFor=\"let o of data.order.items\">\r\n                <td>{{o.productCategory}}</td>\r\n                <td>{{ o.productArtist }}</td>\r\n                <td>{{(o.unitPrice)|currency:\"BDT\":'code'}}</td>\r\n                <td>{{(o.productSize)}}</td>\r\n            </tr>\r\n            \r\n        </tbody>\r\n    </table>\r\n\r\n    <button class=\"btn btn-success\" *ngIf=\"data.order.items.length>0\" (click)=\"onCheckout()\">Checkout</button>\r\n\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/shop/cart.component.ts":
/*!**********************************************!*\
  !*** ./ClientApp/app/shop/cart.component.ts ***!
  \**********************************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataService */ "./ClientApp/app/shared/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Cart = /** @class */ (function () {
    function Cart(data, route) {
        this.data = data;
        this.route = route;
    }
    Cart.prototype.onCheckout = function () {
        if (this.data.loginRequired) {
            this.route.navigate(["login"]);
        }
        else {
            this.route.navigate(["checkout"]);
        }
    };
    Cart = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "the-cart",
            template: __webpack_require__(/*! ./cart.component.html */ "./ClientApp/app/shop/cart.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Cart);
    return Cart;
}());



/***/ }),

/***/ "./ClientApp/app/shop/productList.component.css":
/*!******************************************************!*\
  !*** ./ClientApp/app/shop/productList.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-info img {\r\n    max-width:100px;\r\n    float:left;\r\n\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvc2hvcC9wcm9kdWN0TGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7OztDQUdkIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvc2hvcC9wcm9kdWN0TGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtaW5mbyBpbWcge1xyXG4gICAgbWF4LXdpZHRoOjEwMHB4O1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuXHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./ClientApp/app/shop/productList.component.html":
/*!*******************************************************!*\
  !*** ./ClientApp/app/shop/productList.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n    <div class=\"product-info col-md-4  border-white\" *ngFor=\"let p of products\">\r\n        <img src=\"/img/nun.jpg\" class=\"img-thumbnail\" />\r\n        <h3>{{p.category}}-{{p.size}}</h3>\r\n        \r\n            <div>Ticket {{p.price}}</div>\r\n            <div>Artist:-{{p.artist}}</div>\r\n            <div>Title: {{p.title}} </div>\r\n            <div>Description:{{p.artDescription}}</div>\r\n        <button id=\"buyBtn\" class=\"btn btn-success btn-sm pull-right\" (click)=\"addProduct(p)\" >Buy</button>\r\n\r\n    </div>\r\n\r\n\r\n    <!--<ul>\r\n        <li *ngFor=\"let p of products\"></li>\r\n    </ul>-->\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/shop/productList.component.ts":
/*!*****************************************************!*\
  !*** ./ClientApp/app/shop/productList.component.ts ***!
  \*****************************************************/
/*! exports provided: productList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productList", function() { return productList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataService */ "./ClientApp/app/shared/dataService.ts");



var productList = /** @class */ (function () {
    function productList(data) {
        this.data = data;
        this.products = data.products;
    }
    productList.prototype.ngOnInit = function () {
        var _this = this;
        var ddd = this.data.loadProducts()
            .subscribe(function (data) { return _this.products = data; });
    };
    productList.prototype.addProduct = function (product) {
        this.data.AddToOrder(product);
    };
    productList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "product-list",
            template: __webpack_require__(/*! ./productList.component.html */ "./ClientApp/app/shop/productList.component.html"),
            styles: [__webpack_require__(/*! ./productList.component.css */ "./ClientApp/app/shop/productList.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], productList);
    return productList;
}());



/***/ }),

/***/ "./ClientApp/app/shop/shop.component.html":
/*!************************************************!*\
  !*** ./ClientApp/app/shop/shop.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <h3>{{title}}</h3>\r\n        <product-list></product-list>\r\n\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"well well-sm\">\r\n            <the-cart></the-cart>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/shop/shop.component.ts":
/*!**********************************************!*\
  !*** ./ClientApp/app/shop/shop.component.ts ***!
  \**********************************************/
/*! exports provided: Shop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shop", function() { return Shop; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Shop = /** @class */ (function () {
    function Shop() {
    }
    Shop = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'the-shop',
            template: __webpack_require__(/*! ./shop.component.html */ "./ClientApp/app/shop/shop.component.html")
        })
    ], Shop);
    return Shop;
}());



/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/*!***********************************************!*\
  !*** ./ClientApp/environments/environment.ts ***!
  \***********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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

/***/ "./ClientApp/main.ts":
/*!***************************!*\
  !*** ./ClientApp/main.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./ClientApp/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./ClientApp/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./ClientApp/main.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\TestProject\DutchTreat\DutchTreat\DutchTreat\ClientApp\main.ts */"./ClientApp/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map