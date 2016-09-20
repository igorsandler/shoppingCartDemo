import { Injectable } from 'angular2/core';
import { IProduct } from './product';
import { IProductHalResponse } from './product.hal.response';
import { Http, Response, RequestOptions, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProductService 
{
    private _productUrl = 'http://localhost:9000/product-service/products';

    constructor(private _http: Http) { }


    getProducts(pageNumber: number): Observable<IProductHalResponse> 
    {       
        return this._http.get(this._productUrl+"?page="+pageNumber)
            .map((response: Response) => <IProductHalResponse>response.json())
            .do(data => console.log("getProducts: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    getProductById(productId: string): Observable<IProduct> 
    {       
        return this._http.get(this._productUrl+"/"+productId)
            .map((response: Response) => <IProduct>response.json())
            .do(data => console.log("getProductById: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    deleteProductById(productId: string): Observable<Response> 
    {      
        console.log("deleteProductById: "+productId); 
        return this._http.delete(this._productUrl+"/"+productId)
            .do(data => console.log("deleteProductById: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    createProduct(product : IProduct): Observable<IProduct> 
    {      
        console.log("createProduct: "+product.productId);
        let body = JSON.stringify(product);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers }); 
        return this._http.post(this._productUrl,body,options)
            .map((response: Response) => <IProduct>response.json())
            .do(data => console.log("createProduct: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}