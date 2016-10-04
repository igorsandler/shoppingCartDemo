import { Injectable } from 'angular2/core';
import { IShoppingCartEntry } from './shopping-cart-entry';
import { IPurchaseResponse } from './shopping-purchase-response.ts';
import { IShoppingCartDetailsEntry } from './shopping-cart-details-entry';
import { Http, Response, RequestOptions, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ShoppingCartService 
{
    private _url = 'http://localhost:9000/shopping-cart-service/';

    constructor(private _http: Http) { }


    getContent(customerId : string): Observable<IShoppingCartDetailsEntry[]> 
    {       
        return this._http.get(this._url+customerId)
            .map((response: Response) => <IShoppingCartDetailsEntry[]>response.json())
            .do(data => console.log("getContent: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    addProduct(customerId : string,productId : string, quantity : number): Observable<IShoppingCartEntry> 
    {       
       return this._http.get(this._url+customerId+"/add?productId="+productId+"&quantity="+quantity)
            .map((response: Response) => <IShoppingCartEntry>response.json())
            .do(data => console.log("addProduct: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    getShoppingCartEntry(customerId : string,productId : string): Observable<IShoppingCartEntry> 
    {       
       return this._http.get(this._url+customerId+"/entry/"+productId)
            .map((response: Response) => <IShoppingCartEntry>response.json())
            .do(data => console.log("getShoppingCartEntry: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    removeProduct(customerId : string,productId : string, quantity : number): Observable<IShoppingCartEntry> 
    {       
        return this._http.get(this._url+customerId+"/remove?productId="+productId+"&quantity="+quantity)
            .map((response: Response) => <IShoppingCartEntry>response.json())
            .do(data => console.log("removeProduct: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    purchase(customerId : string): Observable<IPurchaseResponse> 
    {       
        return this._http.get(this._url+customerId+"/purchase")
            .map((response: Response) => <IPurchaseResponse>response.json())
            .catch(this.handleError);
    }
    
    cancel(customerId : string): Observable<Response> 
    {       
        return this._http.get(this._url+customerId+"/clean")
            .map((response: Response) => <Response>response.json())
            .catch(this.handleError);
    }
    
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
}