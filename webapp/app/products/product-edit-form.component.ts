import { Component } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Response } from 'angular2/http';

@Component({
    templateUrl: 'app/products/product-edit-form.component.html'
})
export class ProductEditFormComponent  {
    
    pageTitle: string = 'Product Editor';
    
    productId: string;
    
    product: IProduct = {
        productId: "unknown",
        name: "unknown",
        description: "unknown",
        price: 0.0
    };
    
    errorMessage: string;
    deleteResponse: Response;
    
    constructor(private _routeParams: RouteParams,
                private _router: Router,
                private _productService : ProductService) {
  //        this.productId = this._routeParams.get('id');
  //        this.pageTitle += ": " +this.productId;
    }

   ngOnInit() : void 
   {
   }

    onBack(): void {
         this._router.navigate(['Products']);
    }
    
    onSubmit(): void {
        console.log("Delete product: "+this.productId);
        let newProduct: IProduct;
        this._productService.createProduct(this.product)
        .subscribe(
                response => newProduct = response,
                error => this.errorMessage = <any>error);
        this._router.navigate(['Products']);
    }

}
