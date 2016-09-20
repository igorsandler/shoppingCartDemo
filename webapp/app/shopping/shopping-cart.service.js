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
    var ShoppingCartService;
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
            ShoppingCartService = (function () {
                function ShoppingCartService(_http) {
                    this._http = _http;
                    this._url = 'http://localhost:9000/shopping-cart-service/';
                }
                ShoppingCartService.prototype.getContent = function (customerId) {
                    return this._http.get(this._url + customerId)
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log("getContent: " + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                ShoppingCartService.prototype.addProduct = function (customerId, productId) {
                    return this._http.get(this._url + customerId + "/add?productId=" + productId)
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log("getContent: " + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                ShoppingCartService.prototype.removeProduct = function (customerId, productId) {
                    return this._http.get(this._url + customerId + "/remove?productId=" + productId)
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log("getContent: " + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                ShoppingCartService.prototype.purchase = function (customerId) {
                    return this._http.get(this._url + customerId + "/purchase")
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                ShoppingCartService.prototype.cancel = function (customerId) {
                    return this._http.get(this._url + customerId + "/clean")
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                ShoppingCartService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                ShoppingCartService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ShoppingCartService);
                return ShoppingCartService;
            }());
            exports_1("ShoppingCartService", ShoppingCartService);
        }
    }
});
//# sourceMappingURL=shopping-cart.service.js.map