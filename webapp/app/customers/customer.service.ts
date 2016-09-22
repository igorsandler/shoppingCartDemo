import { Injectable } from 'angular2/core';
import { ICustomer } from './customer';
import { ICustomerHalResponse } from './customer.hal.response';
import { Http, Response, RequestOptions, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CustomerService 
{
    private _customerUrl = 'http://localhost:9000/customer-service/customers';

    constructor(private _http: Http) { }


    getCustomers(pageNumber: number): Observable<ICustomerHalResponse> 
    {       
        return this._http.get(this._customerUrl+"?page="+pageNumber)
            .map((response: Response) => <ICustomerHalResponse>response.json())
            .do(data => console.log("getcustomers: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    getCustomerById(customerId: string): Observable<ICustomer> 
    {       
        return this._http.get(this._customerUrl+"/"+customerId)
            .map((response: Response) => <ICustomer>response.json())
            .do(data => console.log("getCustomerById: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    deleteCustomerById(customerId: string): Observable<Response> 
    {      
        console.log("deleteCustomerById: "+customerId); 
        return this._http.delete(this._customerUrl+"/"+customerId)
            .do(data => console.log("deleteCustomerById: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    createCustomer(customer : ICustomer): Observable<ICustomer> 
    {      
        console.log("createCustomer: "+customer.customerId);
        let body = JSON.stringify(customer);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers }); 
        return this._http.post(this._customerUrl,body,options)
            .map((response: Response) => <ICustomer>response.json())
            .do(data => console.log("createCustomer: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error("Customer Service Error:" + error.status);
        return Observable.throw(error);
    }
}