import { Component } from 'angular2/core';
@Component({
    selector: 'app-error-message',
    templateUrl: 'app/shared/error-dialog.component.html',
})
export class ErrorMessage
{
    private ErrorMsg: string;
    public ErrorMessageIsVisible: boolean;

    showErrorMessage(msg: string)
    {
        this.ErrorMsg = msg;
        this.ErrorMessageIsVisible = true;
    }

    hideErrorMsg()
    {
        this.ErrorMessageIsVisible = false;
    }
}