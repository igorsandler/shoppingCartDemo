import { Component,OnInit } from 'angular2/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { IProductHalResponse } from './product.hal.response';
import { ROUTER_DIRECTIVES} from 'angular2/router';
import { Response } from 'angular2/http';
import { RouteParams, Router } from 'angular2/router';


@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product Management';
    products: IProduct [];
    errorMessage: string;
    pageNumber : number = 0;
    
   constructor(private _routeParams: RouteParams,
                private _router: Router,
                private  _productService : ProductService)
   {}
    
   
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
                response => this.products = response._embedded.products,
                error => 
                {
                    this._router.navigate(['InfoComponent',
                    {
                        title: "Error", 
                        message: "Product listing failure",
                        details: JSON.stringify(error)
                   }]);
                    
                });
   }
   
   deleteProduct(productId: string) : void
   {
       console.log("deleteProduct: "+productId);
       this._productService.deleteProductById(productId)
         .subscribe(
                response => this.refresh(),
                error => 
                {
                    this._router.navigate(['InfoComponent',
                    {
                        title: "Error", 
                        message: "Adding new product failure",
                        details: JSON.stringify(error)
                   }]);
                    
                });
     }
    
}