import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { DataService } from '../shared/dataService';
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
    productList = tslib_1.__decorate([
        Component({
            selector: "product-list",
            templateUrl: "productList.component.html",
            styleUrls: ["productList.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], productList);
    return productList;
}());
export { productList };
//# sourceMappingURL=productList.component.js.map