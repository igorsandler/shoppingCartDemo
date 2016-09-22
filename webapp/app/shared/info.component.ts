import { Component } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { Response } from 'angular2/http';

@Component({
    templateUrl: 'app/shared/info.component.html'
})
export class InfoComponent  {
    pageTitle: string = 'Information';
    message: string;
    
    constructor(private _routeParams: RouteParams,
                private _router: Router) {
          this.pageTitle = this._routeParams.get('title');          
          this.message = this._routeParams.get('message');
    }

   ngOnInit() : void 
   {
   }

    onBack(): void {
         this._router.navigate(['Products']);
    }
    
   
}
