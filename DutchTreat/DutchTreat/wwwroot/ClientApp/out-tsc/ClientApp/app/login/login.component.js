import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { DataService } from '../shared/dataService';
import { Router } from '@angular/router';
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
    Login = tslib_1.__decorate([
        Component({
            selector: 'login',
            templateUrl: 'login.component.html',
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, Router])
    ], Login);
    return Login;
}());
export { Login };
//# sourceMappingURL=login.component.js.map