import { Component } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Response } from 'angular2/http';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent  {
    pageTitle: string = 'Product Detail';
    productId: string;
    product: IProduct;
    errorMessage: string;
    deleteResponse: Response;
    
    constructor(private _routeParams: RouteParams,
                private _router: Router,
                private _productService : ProductService) {
          this.productId = this._routeParams.get('id');
          this.pageTitle += ": " +this.productId;
    }

   ngOnInit() : void 
   {
       this._productService.getProductById(this.productId)
            .subscribe(
                response => this.product = response,
                error => this.errorMessage = <any>error);
   }

    onBack(): void {
         this._router.navigate(['Products']);
    }
    
    onDelete(): void {
        console.log("Delete product: "+this.productId);
         this._productService.deleteProductById(this.productId)
         .subscribe(
                response => this.deleteResponse = response,
                error => this.errorMessage = <any>error);
    }

}
