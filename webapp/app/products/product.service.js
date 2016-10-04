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
    var ProductService;
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
            ProductService = (function () {
                function ProductService(_http) {
                    this._http = _http;
                    this._productUrl = 'http://localhost:9000/product-service/products';
                }
                ProductService.prototype.getProducts = function (pageNumber) {
                    return this._http.get(this._productUrl + "?sort=productId&productId.dir=asc&page=" + pageNumber)
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log("getProducts: " + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                ProductService.prototype.getProductById = function (productId) {
                    return this._http.get(this._productUrl + "/" + productId)
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log("getProductById: " + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                ProductService.prototype.deleteProductById = function (productId) {
                    console.log("deleteProductById: " + productId);
                    return this._http.delete(this._productUrl + "/" + productId)
                        .do(function (data) { return console.log("deleteProductById: " + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                ProductService.prototype.createProduct = function (product) {
                    console.log("createProduct: " + product.productId);
                    var body = JSON.stringify(product);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.post(this._productUrl, body, options)
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log("createProduct: " + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                ProductService.prototype.handleError = function (error) {
                    console.error("Product Service Error:" + error.status);
                    return Observable_1.Observable.throw(error);
                };
                ProductService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProductService);
                return ProductService;
            }());
            exports_1("ProductService", ProductService);
        }
    }
});
//# sourceMappingURL=product.service.js.map