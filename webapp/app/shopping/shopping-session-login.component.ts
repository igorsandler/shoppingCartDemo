import { Component,ViewChild } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { ICustomer } from '../customers/customer';
import { CustomerService } from '../customers/customer.service';
import { Response } from 'angular2/http';
import { IShoppingSession } from './shopping-session';
import { InfoComponent } from '../shared/info.component';
import { ModalDialogInstance, ModalConfig, Modal, ICustomModal,YesNoModalContent, YesNoModal } from 'angular2/modal';

@Component({
    templateUrl: 'app/shopping/shopping-session-login.component.html'
})
export class ShoppingSessionLoginComponent  {
    
    //@ViewChild(ErrorMessage) errorMsg: ErrorMessage;  // ErrorMessage is a ViewChild

    pageTitle: string = 'Customer Login';
        
    shoppingSession: IShoppingSession = 
    {
        customerId : "undefined",
        customer : undefined
    };
    
    customer: ICustomer;
    
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

    
    onLogin(): void {
        this._customerService.getCustomerById(this.shoppingSession.customerId)
        .subscribe(
                response => 
                {
                    this.shoppingSession.customer = response;
                    this._router.navigate(['ShoppingCart',{ customerId: this.shoppingSession.customerId}]);
                },
                error => 
                {
                    this._router.navigate(['InfoComponent',
                    {
                        title: "Error", 
                        message: JSON.stringify(error)
                    }]);
                    
                });
    }

}
