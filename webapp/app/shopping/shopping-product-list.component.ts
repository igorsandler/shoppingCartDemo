import { Component,OnInit } from 'angular2/core';
import { IProduct } from '../products/product';
import { ProductService } from '../products/product.service';
import { IProductHalResponse } from '../products/product.hal.response';
import { RouteParams, Router,ROUTER_DIRECTIVES} from 'angular2/router';
import { Response } from 'angular2/http';
import { ShoppingCartService } from '../shopping/shopping-cart.service';


@Component({
    templateUrl: 'app/shopping/shopping-product-list.component.html',
    styleUrls: ['app/shopping/shopping-product-list.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class ShoppingProductListComponent implements OnInit {
    pageTitle: string = 'Available Products';
    products: IProduct [];
    errorMessage: string;
    pageNumber : number = 0;
    customerId: string;
    
   constructor(private  _productService : ProductService,
               private  _shoppingCartService : ShoppingCartService,
               private _routeParams: RouteParams,
               private _router: Router)
   {
       this.customerId = this._routeParams.get('customerId');
   }
    
   
   ngOnInit() : void 
   {
       this.refresh();
   }
   
   loadPrevPage() : void
   {
       console.log("prev page");
       if(this.pageNumber>0)
       {
            this.pageNumber--;
       }      
       this.refresh();
   }
   
   loadNextPage() : void
   {
       console.log("next page");
       this.pageNumber++;
       this.refresh();
   }
   
   refresh() : void
   {
       console.log("refresh");
       this._productService.getProducts(this.pageNumber)
            .subscribe(
                response => { 
                    this.products = response._embedded.products;
                    for (let product of this.products)
                    {
                        product.quantityInCart = 0;
                        product.purchaseQuantity = 0;
                        this._shoppingCartService.getShoppingCartEntry(this.customerId,product.productId)
                        .subscribe(
                            response2=>
                            {
                                product.quantityInCart = response2.quantity; 
                            },
                            error => this.errorMessage = <any>error);                          
                    }
                },
                error => this.errorMessage = <any>error);
   }
   
   addToShoppingCart(product: IProduct) : void
   {
       console.log("addToShoppingCart: "+product.productId+ "quantity:"+product.quantity);
       if(product.purchaseQuantity >0 && product.purchaseQuantity <= product.quantity - product.quantityInCart )
       {
          this._shoppingCartService.addProduct(this.customerId,product.productId,product.purchaseQuantity)
          .subscribe(
           response => this.refresh(),
           error => this.errorMessage = <any>error);   
        }
   } 
   
   removeFromShoppingCart(product: IProduct) : void
   {
       console.log("removeFromShoppingCart: "+product.productId+ "quantity:"+product.quantity);
       if(product.purchaseQuantity >0 && product.purchaseQuantity <= product.quantityInCart)
       {
          this._shoppingCartService.removeProduct(this.customerId,product.productId,product.purchaseQuantity)
          .subscribe(
           response => this.refresh(),
           error => this.errorMessage = <any>error);   
        }
   } 
   
    onBack(): void {
         this._router.navigate(['ShoppingCart',{customerId: this.customerId}]);
    }
    
}