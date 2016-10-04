System.register(['angular2/core', '../customers/customer.service', '../shopping/shopping-cart.service', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, customer_service_1, shopping_cart_service_1, router_1;
    var ShoppingCartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (customer_service_1_1) {
                customer_service_1 = customer_service_1_1;
            },
            function (shopping_cart_service_1_1) {
                shopping_cart_service_1 = shopping_cart_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ShoppingCartComponent = (function () {
                function ShoppingCartComponent(_shoppingCartService, _routeParams, _router, _customerService) {
                    var _this = this;
                    this._shoppingCartService = _shoppingCartService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._customerService = _customerService;
                    this.pageTitle = 'Shopping Cart';
                    this.totalPrice = 0;
                    this.customerId = this._routeParams.get('customerId');
                    this._customerService.getCustomerById(this.customerId)
                        .subscribe(function (response) {
                        _this.customer = response;
                        _this.customerTitle = _this.customer.firstName + " " + _this.customer.lastName;
                    }, function (error) { return _this.errorMessage = error; });
                }
                ShoppingCartComponent.prototype.ngOnInit = function () {
                    this.refresh();
                };
                ShoppingCartComponent.prototype.refresh = function () {
                    var _this = this;
                    console.log("refresh");
                    this.totalPrice = 0;
                    this._shoppingCartService.getContent(this.customerId)
                        .subscribe(function (response) {
                        _this.shoppingCartEntries = response;
                        for (var _i = 0, _a = _this.shoppingCartEntries; _i < _a.length; _i++) {
                            var shoppingCartEntry = _a[_i];
                            _this.totalPrice += shoppingCartEntry.productPrice * shoppingCartEntry.quantity;
                        }
                    }, function (error) { return _this.errorMessage = error; });
                };
                ShoppingCartComponent.prototype.removeProduct = function (productId) {
                    var _this = this;
                    console.log("removeProduct: " + productId);
                    this._shoppingCartService.removeProduct(this.customerId, productId, 1)
                        .subscribe(function (response) { return _this.refresh(); }, function (error) { return _this.errorMessage = error; });
                };
                ShoppingCartComponent.prototype.addProduct = function (entry) {
                    var _this = this;
                    if (entry.availableQuantity - entry.quantity > 0) {
                        console.log("addProduct: " + entry.productId);
                        this._shoppingCartService.addProduct(this.customerId, entry.productId, 1)
                            .subscribe(function (response) { return _this.refresh(); }, function (error) { return _this.errorMessage = error; });
                    }
                };
                ShoppingCartComponent.prototype.cancel = function () {
                    var _this = this;
                    console.log("purchase");
                    this._shoppingCartService.cancel(this.customerId)
                        .subscribe(function (response) { return _this.refresh(); }, function (error) { return _this.errorMessage = error; });
                };
                ShoppingCartComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/shopping/shopping-cart.component.html',
                        styleUrls: ['app/shopping/shopping-cart.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [shopping_cart_service_1.ShoppingCartService, router_1.RouteParams, router_1.Router, customer_service_1.CustomerService])
                ], ShoppingCartComponent);
                return ShoppingCartComponent;
            }());
            exports_1("ShoppingCartComponent", ShoppingCartComponent);
        }
    }
});
//# sourceMappingURL=shopping-cart.component.js.map