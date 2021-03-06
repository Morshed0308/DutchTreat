import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Order, OrderItem } from './Order';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.token = "";
        this.order = new Order();
        this.products = [];
    }
    DataService.prototype.loadProducts = function () {
        var _this = this;
        var fff = this.http.get('/api/products')
            .pipe(map((function (data) { return _this.products = data; }), catchError(function (err) { return throwError(err); })));
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
            .pipe(map(function (data) {
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
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(map(function (data) {
            _this.order = new Order();
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
        item = new OrderItem();
        item.productId = product.id;
        item.productArtist = product.artist;
        item.productTitle = product.title;
        item.unitPrice = product.price;
        item.productSize = product.size;
        item.productCategory = product.category;
        this.order.items.push(item);
    };
    DataService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=dataService.js.map