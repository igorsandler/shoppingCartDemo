import { Component,OnInit } from 'angular2/core';
import { ICustomer } from '../customers/customer';
import { CustomerService } from '../customers/customer.service';
import { IProduct } from '../products/product';
import { ShoppingCartService } from '../shopping/shopping-cart.service';
import { IShoppingCartDetailsEntry } from '../shopping/shopping-cart-details-entry';
import { IPurchaseResponse } from '../shopping/shopping-purchase-response';
import { ProductService } from '../products/product.service';
import { RouteParams, Router,ROUTER_DIRECTIVES} from 'angular2/router';
import { Response } from 'angular2/http';


@Component({
    templateUrl: 'app/shopping/shopping-report.component.html',
    styleUrls: ['app/shopping/shopping-report.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class ShoppingReportComponent implements OnInit {
    pageTitle: string = 'Purchase Report';
    customerId: string;
    purchaseResponse: IPurchaseResponse;
    errorMessage: string;
    totalPrice : number =0;
    
   constructor(private  _shoppingCartService : ShoppingCartService,
               private _routeParams: RouteParams,
               private _router: Router,
               private _customerService : CustomerService)
   {
       this.customerId = this._routeParams.get('customerId');
   }
    
   
   ngOnInit() : void 
   {
       console.log("purchase");
       this._shoppingCartService.purchase(this.customerId)
         .subscribe(
                purchaseResponse => this.purchaseResponse = purchaseResponse,
                error => this.errorMessage = <any>error);
   }   
}