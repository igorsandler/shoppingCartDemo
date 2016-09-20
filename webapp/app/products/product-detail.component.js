System.register(['angular2/core', 'angular2/router', './product.service'], function(exports_1, context_1) {
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
    var core_1, router_1, product_service_1;
    var ProductDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            }],
        execute: function() {
            ProductDetailComponent = (function () {
                function ProductDetailComponent(_routeParams, _router, _productService) {
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._productService = _productService;
                    this.pageTitle = 'Product Detail';
                    this.productId = this._routeParams.get('id');
                    this.pageTitle += ": " + this.productId;
                }
                ProductDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._productService.getProductById(this.productId)
                        .subscribe(function (response) { return _this.product = response; }, function (error) { return _this.errorMessage = error; });
                };
                ProductDetailComponent.prototype.onBack = function () {
                    this._router.navigate(['Products']);
                };
                ProductDetailComponent.prototype.onDelete = function () {
                    var _this = this;
                    console.log("Delete product: " + this.productId);
                    this._productService.deleteProductById(this.productId)
                        .subscribe(function (response) { return _this.deleteResponse = response; }, function (error) { return _this.errorMessage = error; });
                };
                ProductDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/products/product-detail.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router, product_service_1.ProductService])
                ], ProductDetailComponent);
                return ProductDetailComponent;
            }());
            exports_1("ProductDetailComponent", ProductDetailComponent);
        }
    }
});
//# sourceMappingURL=product-detail.component.js.map