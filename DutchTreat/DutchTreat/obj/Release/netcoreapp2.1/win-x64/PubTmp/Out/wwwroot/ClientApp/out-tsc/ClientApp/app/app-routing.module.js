import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Shop } from "./shop/shop.component";
import { Checkout } from "./Checkout/checkout.component";
import { Login } from './login/login.component';
var routes = [
    { path: "", component: Shop },
    { path: "Checkout", component: Checkout },
    { path: "login", component: Login }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes, {
                    useHash: true,
                    enableTracing: false
                })],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map