System.register(['angular2/core', '../products/product.service', 'angular2/router', '../shopping/shopping-cart.service'], function(exports_1, context_1) {
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
    var core_1, product_service_1, router_1, shopping_cart_service_1;
    var ShoppingProductListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (shopping_cart_service_1_1) {
                shopping_cart_service_1 = shopping_cart_service_1_1;
            }],
        execute: function() {
            ShoppingProductListComponent = (function () {
                function ShoppingProductListComponent(_productService, _shoppingCartService, _routeParams, _router) {
                    this._productService = _productService;
                    this._shoppingCartService = _shoppingCartService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this.pageTitle = 'Available Products';
                    this.pageNumber = 0;
                    this.customerId = this._routeParams.get('customerId');
                }
                ShoppingProductListComponent.prototype.ngOnInit = function () {
                    this.refresh();
                };
                ShoppingProductListComponent.prototype.loadPrevPage = function () {
                    console.log("prev page");
                    if (this.pageNumber > 0) {
                        this.pageNumber--;
                    }
                    this.refresh();
                };
                ShoppingProductListComponent.prototype.loadNextPage = function () {
                    console.log("next page");
                    this.pageNumber++;
                    this.refresh();
                };
                ShoppingProductListComponent.prototype.refresh = function () {
                    var _this = this;
                    console.log("refresh");
                    this._productService.getProducts(this.pageNumber)
                        .subscribe(function (response) { return _this.products = response._embedded.products; }, function (error) { return _this.errorMessage = error; });
                };
                ShoppingProductListComponent.prototype.addToShoppingCart = function (productId) {
                    var _this = this;
                    console.log("addToShoppingCart: " + productId);
                    this._shoppingCartService.addProduct(this.customerId, productId)
                        .subscribe(function (response) { ; }, function (error) { return _this.errorMessage = error; });
                };
                ShoppingProductListComponent.prototype.onBack = function () {
                    this._router.navigate(['ShoppingCart', { customerId: this.customerId }]);
                };
                ShoppingProductListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/shopping/shopping-product-list.component.html',
                        styleUrls: ['app/shopping/shopping-product-list.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService, shopping_cart_service_1.ShoppingCartService, router_1.RouteParams, router_1.Router])
                ], ShoppingProductListComponent);
                return ShoppingProductListComponent;
            }());
            exports_1("ShoppingProductListComponent", ShoppingProductListComponent);
        }
    }
});
//# sourceMappingURL=shopping-product-list.component.js.map