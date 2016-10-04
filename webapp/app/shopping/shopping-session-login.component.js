System.register(['angular2/core', 'angular2/router', '../customers/customer.service'], function(exports_1, context_1) {
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
    var core_1, router_1, customer_service_1;
    var ShoppingSessionLoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (customer_service_1_1) {
                customer_service_1 = customer_service_1_1;
            }],
        execute: function() {
            ShoppingSessionLoginComponent = (function () {
                function ShoppingSessionLoginComponent(_routeParams, _router, _customerService) {
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._customerService = _customerService;
                    //@ViewChild(ErrorMessage) errorMsg: ErrorMessage;  // ErrorMessage is a ViewChild
                    this.pageTitle = 'Customer Login';
                    this.shoppingSession = {
                        customerId: "undefined",
                        customer: undefined
                    };
                    //        this.customerId = this._routeParams.get('id');
                    //        this.pageTitle += ": " +this.customerId;
                }
                ShoppingSessionLoginComponent.prototype.ngOnInit = function () {
                };
                ShoppingSessionLoginComponent.prototype.onLogin = function () {
                    var _this = this;
                    this._customerService.getCustomerById(this.shoppingSession.customerId)
                        .subscribe(function (response) {
                        _this.shoppingSession.customer = response;
                        _this._router.navigate(['ShoppingCart', { customerId: _this.shoppingSession.customerId }]);
                    }, function (error) {
                        _this._router.navigate(['InfoComponent',
                            {
                                title: "Error",
                                message: "Customer login failure",
                                details: JSON.stringify(error)
                            }]);
                    });
                };
                ShoppingSessionLoginComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/shopping/shopping-session-login.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router, customer_service_1.CustomerService])
                ], ShoppingSessionLoginComponent);
                return ShoppingSessionLoginComponent;
            }());
            exports_1("ShoppingSessionLoginComponent", ShoppingSessionLoginComponent);
        }
    }
});
//# sourceMappingURL=shopping-session-login.component.js.map