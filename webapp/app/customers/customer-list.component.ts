import { Component,OnInit } from 'angular2/core';
import { ICustomer } from './customer';
import { CustomerService } from './customer.service';
import { ICustomerHalResponse } from './customer.hal.response';
import { ROUTER_DIRECTIVES} from 'angular2/router';
import { Response } from 'angular2/http';
import { RouteParams, Router } from 'angular2/router';


@Component({
    templateUrl: 'app/customers/customer-list.component.html',
    styleUrls: ['app/customers/customer-list.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class CustomerListComponent implements OnInit {
    pageTitle: string = 'Customer Management';
    customers: ICustomer [];
    errorMessage: string;
    pageNumber : number = 0;
    numOfPages : number = 1;
    
   constructor(private _routeParams: RouteParams,
               private _router: Router,
               private  _CustomerService : CustomerService)
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
       this._CustomerService.getCustomers(this.pageNumber)
            .subscribe(
                response => this.customers = response._embedded.customers,
                error => 
                {
                    this._router.navigate(['InfoComponent',
                    {
                        title: "Error", 
                        message: "Customer Listing failed",
                        details: JSON.stringify(error)
                   }]);
                    
                });
   }
   
   deleteCustomer(customerId: string) : void
   {
       console.log("deleteProduct: "+customerId);
       this._CustomerService.deleteCustomerById(customerId)
         .subscribe(
                response => this.refresh(),
                error => 
                {
                    this._router.navigate(['InfoComponent',
                    {
                        title: "Error", 
                        message: "Delete customer failure",
                        details: JSON.stringify(error)
                   }]);
                    
                });
     }
    
}