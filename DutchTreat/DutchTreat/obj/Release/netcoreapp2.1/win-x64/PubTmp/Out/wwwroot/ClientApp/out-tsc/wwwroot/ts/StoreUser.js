var StoreCustomer = /** @class */ (function () {
    function StoreCustomer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.visits = 0;
    }
    StoreCustomer.prototype.showName = function () {
        alert(this.firstName + " " + this.lastName);
    };
    Object.defineProperty(StoreCustomer.prototype, "name", {
        get: function () {
            return this.myName;
        },
        set: function (val) {
            this.myName = val;
        },
        enumerable: true,
        configurable: true
    });
    return StoreCustomer;
}());
export { StoreCustomer };
//# sourceMappingURL=StoreUser.js.map