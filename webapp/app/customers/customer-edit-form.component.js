System.register(['angular2/core', 'angular2/router', './customer.service'], function(exports_1, context_1) {
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
    var CustomerEditFormComponent;
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
            CustomerEditFormComponent = (function () {
                function CustomerEditFormComponent(_routeParams, _router, _customerService) {
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._customerService = _customerService;
                    this.pageTitle = 'Customer Data Editor';
                    this.customer = {
                        customerId: "unknown",
                        firstName: "unknown",
                        lastName: "unknown"
                    };
                    //        this.customerId = this._routeParams.get('id');
                    //        this.pageTitle += ": " +this.customerId;
                }
                CustomerEditFormComponent.prototype.ngOnInit = function () {
                };
                CustomerEditFormComponent.prototype.onBack = function () {
                    this._router.navigate(['Customers']);
                };
                CustomerEditFormComponent.prototype.onSubmit = function () {
                    var _this = this;
                    console.log("Delete customer: " + this.customerId);
                    var newCustomer;
                    this._customerService.createCustomer(this.customer)
                        .subscribe(function (response) {
                        newCustomer = response;
                        _this._router.navigate(['Customers']);
                    }, function (error) { return _this.errorMessage = error; });
                };
                CustomerEditFormComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/customers/customer-edit-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router, customer_service_1.CustomerService])
                ], CustomerEditFormComponent);
                return CustomerEditFormComponent;
            }());
            exports_1("CustomerEditFormComponent", CustomerEditFormComponent);
        }
    }
});
//# sourceMappingURL=customer-edit-form.component.js.map