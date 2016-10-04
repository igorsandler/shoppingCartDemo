import { Component,OnInit } from 'angular2/core';
import { ICustomer } from '../customers/customer';
import { CustomerService } from '../customers/customer.service';
import { IProduct } from '../products/product';
import { ShoppingCartService } from '../shopping/shopping-cart.service';
import { IShoppingCartDetailsEntry } from '../shopping/shopping-cart-details-entry';
import { ProductService } from '../products/product.service';
import { RouteParams, Router,ROUTER_DIRECTIVES} from 'angular2/router';
import { Response } from 'angular2/http';


@Component({
    templateUrl: 'app/shopping/shopping-cart.component.html',
    styleUrls: ['app/shopping/shopping-cart.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class ShoppingCartComponent implements OnInit {
    pageTitle: string = 'Shopping Cart';
    customerTitle: string;
    customerId: string;
    customer : ICustomer;
    errorMessage: string;
    totalPrice : number =0;
    shoppingCartEntries : IShoppingCartDetailsEntry [];
    
   constructor(private  _shoppingCartService : ShoppingCartService,
               private _routeParams: RouteParams,
               private _router: Router,
               private _customerService : CustomerService)
   {
       this.customerId = this._routeParams.get('customerId');
       this._customerService.getCustomerById(this.customerId)
       .subscribe(
                response => 
                {
                    this.customer = response;   
                     this.customerTitle = this.customer.firstName + " " + this.customer.lastName;       
                },
                error => this.errorMessage = <any>error);
   }
    
   
   ngOnInit() : void 
   {
       this.refresh();
   }
   
   
   refresh() : void
   {
       console.log("refresh");
       this.totalPrice = 0;
       this._shoppingCartService.getContent(this.customerId)
            .subscribe(
                response => 
                {
                    this.shoppingCartEntries = response;
                    for(let shoppingCartEntry of this.shoppingCartEntries)
                    {
                        this.totalPrice+=shoppingCartEntry.productPrice*shoppingCartEntry.quantity;
                    }
                },
                error => this.errorMessage = <any>error);
                
                
   }
    
   removeProduct(productId: string) : void
   {
       console.log("removeProduct: "+productId);
       this._shoppingCartService.removeProduct(this.customerId,productId,1)
         .subscribe(
                response => this.refresh(),
                error => this.errorMessage = <any>error);
   } 
   
   addProduct(entry: IShoppingCartDetailsEntry) : void
   {
       if(entry.availableQuantity-entry.quantity > 0)
       {
            console.log("addProduct: "+entry.productId);
            this._shoppingCartService.addProduct(this.customerId,entry.productId,1)
                .subscribe(
                        response => this.refresh(),
                        error => this.errorMessage = <any>error);
       }
   } 
   
   cancel() : void
   {
       console.log("purchase");
       this._shoppingCartService.cancel(this.customerId)
         .subscribe(
                response => this.refresh(),
                error => this.errorMessage = <any>error);
   } 
    
}