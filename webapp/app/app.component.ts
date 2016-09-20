import { Component } from 'angular2/core';
import { ProductListComponent} from './products/product-list.component'
import { ProductService} from './products/product.service'
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductEditFormComponent } from './products/product-edit-form.component';
import { CustomerListComponent} from './customers/customer-list.component'
import { CustomerService} from './customers/customer.service'
import { CustomerEditFormComponent } from './customers/customer-edit-form.component';
import { ShoppingSessionLoginComponent } from './shopping/shopping-session-login.component';
import { ShoppingCartComponent } from './shopping/shopping-cart.component';
import { ShoppingCartService } from './shopping/shopping-cart.service';
import { ShoppingProductListComponent } from './shopping/shopping-product-list.component';


import 'rxjs/Rx';   // Load all features
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { WelcomeComponent } from './home/welcome.component';

@Component({
    selector: 'pm-app',
    template:`
     <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['Welcome']">Home</a></li>
                    <li><a [routerLink]="['Products']">Product Management</a></li>
                    <li><a [routerLink]="['Customers']">Customer Management</a></li>
                    <li><a [routerLink]="['ShoppingSessionLogin']">Shopping</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
    ` ,
    directives:[ProductListComponent,CustomerListComponent,ROUTER_DIRECTIVES],
    providers: [ProductService,CustomerService,ShoppingCartService,HTTP_PROVIDERS,ROUTER_PROVIDERS]
})
@RouteConfig([
  { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
  { path: '/products', name: 'Products', component: ProductListComponent },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent }, 
  { path: '/product-edit/:id', name: 'ProductEditForm', component: ProductEditFormComponent },
  { path: '/product-new', name: 'ProductNewForm', component: ProductEditFormComponent },
  { path: '/customers', name: 'Customers', component: CustomerListComponent },
  { path: '/customer-edit/:id', name: 'CustomerEditForm', component: CustomerEditFormComponent },
  { path: '/customer-new', name: 'CustomerNewForm', component: CustomerEditFormComponent },    
  { path: '/shopping-login', name: 'ShoppingSessionLogin', component: ShoppingSessionLoginComponent },
  { path: '/shopping-cart/:customerId', name: 'ShoppingCart', component: ShoppingCartComponent },
  { path: '/shopping-cart-products/:customerId', name: 'ShoppingCartProducts', component: ShoppingProductListComponent }   
])
export class AppComponent {
    pageTitle: string = 'Shopping Cart Demo';
}