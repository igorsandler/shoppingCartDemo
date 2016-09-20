System.register(['angular2/core', './customer.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, customer_service_1, router_1;
    var CustomerListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (customer_service_1_1) {
                customer_service_1 = customer_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            CustomerListComponent = (function () {
                function CustomerListComponent(_CustomerService) {
                    this._CustomerService = _CustomerService;
                    this.pageTitle = 'Customer Management';
                    this.pageNumber = 0;
                    this.numOfPages = 1;
                }
                CustomerListComponent.prototype.ngOnInit = function () {
                    this.refresh();
                };
                CustomerListComponent.prototype.loadPrevPage = function () {
                    console.log("prev page");
                    if (this.pageNumber > 0) {
                        this.pageNumber--;
                    }
                    this.refresh();
                };
                CustomerListComponent.prototype.loadNextPage = function () {
                    console.log("next page");
                    this.pageNumber++;
                    this.refresh();
                };
                CustomerListComponent.prototype.refresh = function () {
                    var _this = this;
                    console.log("refresh");
                    this._CustomerService.getCustomers(this.pageNumber)
                        .subscribe(function (response) { return _this.customers = response._embedded.customers; }, function (error) { return _this.errorMessage = error; });
                };
                CustomerListComponent.prototype.deleteCustomer = function (customerId) {
                    var _this = this;
                    console.log("deleteProduct: " + customerId);
                    this._CustomerService.deleteCustomerById(customerId)
                        .subscribe(function (response) { return _this.refresh(); }, function (error) { return _this.errorMessage = error; });
                };
                CustomerListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/customers/customer-list.component.html',
                        styleUrls: ['app/customers/customer-list.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [customer_service_1.CustomerService])
                ], CustomerListComponent);
                return CustomerListComponent;
            }());
            exports_1("CustomerListComponent", CustomerListComponent);
        }
    }
});
//# sourceMappingURL=customer-list.component.js.map