System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var CustomerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            CustomerService = (function () {
                function CustomerService(_http) {
                    this._http = _http;
                    this._customerUrl = 'http://localhost:9000/customer-service/customers';
                }
                CustomerService.prototype.getCustomers = function (pageNumber) {
                    return this._http.get(this._customerUrl + "?page=" + pageNumber)
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log("getcustomers: " + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                CustomerService.prototype.getCustomerById = function (customerId) {
                    return this._http.get(this._customerUrl + "/" + customerId)
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log("getCustomerById: " + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                CustomerService.prototype.deleteCustomerById = function (customerId) {
                    console.log("deleteCustomerById: " + customerId);
                    return this._http.delete(this._customerUrl + "/" + customerId)
                        .do(function (data) { return console.log("deleteCustomerById: " + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                CustomerService.prototype.createCustomer = function (customer) {
                    console.log("createCustomer: " + customer.customerId);
                    var body = JSON.stringify(customer);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.post(this._customerUrl, body, options)
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log("createCustomer: " + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                CustomerService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                CustomerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CustomerService);
                return CustomerService;
            }());
            exports_1("CustomerService", CustomerService);
        }
    }
});
//# sourceMappingURL=customer.service.js.map