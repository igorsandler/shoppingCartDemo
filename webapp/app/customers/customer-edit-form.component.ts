import { Component } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { ICustomer } from './customer';
import { CustomerService } from './customer.service';
import { Response } from 'angular2/http';

@Component({
    templateUrl: 'app/customers/customer-edit-form.component.html'
})
export class CustomerEditFormComponent  {
    
    pageTitle: string = 'Customer Data Editor';
    
    customerId: string;
    
    customer: ICustomer = {
        customerId: "unknown",
        firstName: "unknown",
        lastName: "unknown"
    };
    
    errorMessage: string;
    deleteResponse: Response;
    
    constructor(private _routeParams: RouteParams,
                private _router: Router,
                private _customerService : CustomerService) {
  //        this.customerId = this._routeParams.get('id');
  //        this.pageTitle += ": " +this.customerId;
    }

   ngOnInit() : void 
   {
   }

    onBack(): void {
         this._router.navigate(['Customers']);
    }
    
    onSubmit(): void {
        console.log("Delete customer: "+this.customerId);
        let newCustomer: ICustomer;
        this._customerService.createCustomer(this.customer)
        .subscribe(
                response => 
                {
                    newCustomer = response;
                    this._router.navigate(['Customers']);
                },
                error => this.errorMessage = <any>error);
    }

}
