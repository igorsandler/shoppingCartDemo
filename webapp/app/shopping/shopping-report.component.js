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
    var ShoppingReportComponent;
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
            ShoppingReportComponent = (function () {
                function ShoppingReportComponent(_shoppingCartService, _routeParams, _router, _customerService) {
                    this._shoppingCartService = _shoppingCartService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._customerService = _customerService;
                    this.pageTitle = 'Purchase Report';
                    this.totalPrice = 0;
                    this.customerId = this._routeParams.get('customerId');
                }
                ShoppingReportComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log("purchase");
                    this._shoppingCartService.purchase(this.customerId)
                        .subscribe(function (purchaseResponse) { return _this.purchaseResponse = purchaseResponse; }, function (error) { return _this.errorMessage = error; });
                };
                ShoppingReportComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/shopping/shopping-report.component.html',
                        styleUrls: ['app/shopping/shopping-report.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [shopping_cart_service_1.ShoppingCartService, router_1.RouteParams, router_1.Router, customer_service_1.CustomerService])
                ], ShoppingReportComponent);
                return ShoppingReportComponent;
            }());
            exports_1("ShoppingReportComponent", ShoppingReportComponent);
        }
    }
});
//# sourceMappingURL=shopping-report.component.js.map