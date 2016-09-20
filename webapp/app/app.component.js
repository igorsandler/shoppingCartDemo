System.register(['angular2/core', './products/product-list.component', './products/product.service', './products/product-detail.component', './products/product-edit-form.component', './customers/customer-list.component', './customers/customer.service', './customers/customer-edit-form.component', './shopping/shopping-session-login.component', './shopping/shopping-cart.component', './shopping/shopping-cart.service', './shopping/shopping-product-list.component', 'rxjs/Rx', 'angular2/http', 'angular2/router', './home/welcome.component'], function(exports_1, context_1) {
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
    var core_1, product_list_component_1, product_service_1, product_detail_component_1, product_edit_form_component_1, customer_list_component_1, customer_service_1, customer_edit_form_component_1, shopping_session_login_component_1, shopping_cart_component_1, shopping_cart_service_1, shopping_product_list_component_1, http_1, router_1, welcome_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_list_component_1_1) {
                product_list_component_1 = product_list_component_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (product_detail_component_1_1) {
                product_detail_component_1 = product_detail_component_1_1;
            },
            function (product_edit_form_component_1_1) {
                product_edit_form_component_1 = product_edit_form_component_1_1;
            },
            function (customer_list_component_1_1) {
                customer_list_component_1 = customer_list_component_1_1;
            },
            function (customer_service_1_1) {
                customer_service_1 = customer_service_1_1;
            },
            function (customer_edit_form_component_1_1) {
                customer_edit_form_component_1 = customer_edit_form_component_1_1;
            },
            function (shopping_session_login_component_1_1) {
                shopping_session_login_component_1 = shopping_session_login_component_1_1;
            },
            function (shopping_cart_component_1_1) {
                shopping_cart_component_1 = shopping_cart_component_1_1;
            },
            function (shopping_cart_service_1_1) {
                shopping_cart_service_1 = shopping_cart_service_1_1;
            },
            function (shopping_product_list_component_1_1) {
                shopping_product_list_component_1 = shopping_product_list_component_1_1;
            },
            function (_1) {},
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = 'Shopping Cart Demo';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-app',
                        template: "\n     <div>\n        <nav class='navbar navbar-default'>\n            <div class='container-fluid'>\n                <a class='navbar-brand'>{{pageTitle}}</a>\n                <ul class='nav navbar-nav'>\n                    <li><a [routerLink]=\"['Welcome']\">Home</a></li>\n                    <li><a [routerLink]=\"['Products']\">Product Management</a></li>\n                    <li><a [routerLink]=\"['Customers']\">Customer Management</a></li>\n                    <li><a [routerLink]=\"['ShoppingSessionLogin']\">Shopping</a></li>\n                </ul>\n            </div>\n        </nav>\n        <div class='container'>\n            <router-outlet></router-outlet>\n        </div>\n     </div>\n    ",
                        directives: [product_list_component_1.ProductListComponent, customer_list_component_1.CustomerListComponent, router_1.ROUTER_DIRECTIVES],
                        providers: [product_service_1.ProductService, customer_service_1.CustomerService, shopping_cart_service_1.ShoppingCartService, http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/welcome', name: 'Welcome', component: welcome_component_1.WelcomeComponent, useAsDefault: true },
                        { path: '/products', name: 'Products', component: product_list_component_1.ProductListComponent },
                        { path: '/product/:id', name: 'ProductDetail', component: product_detail_component_1.ProductDetailComponent },
                        { path: '/product-edit/:id', name: 'ProductEditForm', component: product_edit_form_component_1.ProductEditFormComponent },
                        { path: '/product-new', name: 'ProductNewForm', component: product_edit_form_component_1.ProductEditFormComponent },
                        { path: '/customers', name: 'Customers', component: customer_list_component_1.CustomerListComponent },
                        { path: '/customer-edit/:id', name: 'CustomerEditForm', component: customer_edit_form_component_1.CustomerEditFormComponent },
                        { path: '/customer-new', name: 'CustomerNewForm', component: customer_edit_form_component_1.CustomerEditFormComponent },
                        { path: '/shopping-login', name: 'ShoppingSessionLogin', component: shopping_session_login_component_1.ShoppingSessionLoginComponent },
                        { path: '/shopping-cart/:customerId', name: 'ShoppingCart', component: shopping_cart_component_1.ShoppingCartComponent },
                        { path: '/shopping-cart-products/:customerId', name: 'ShoppingCartProducts', component: shopping_product_list_component_1.ShoppingProductListComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map