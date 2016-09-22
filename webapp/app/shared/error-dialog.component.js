System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ErrorMessage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ErrorMessage = (function () {
                function ErrorMessage() {
                }
                ErrorMessage.prototype.showErrorMessage = function (msg) {
                    this.ErrorMsg = msg;
                    this.ErrorMessageIsVisible = true;
                };
                ErrorMessage.prototype.hideErrorMsg = function () {
                    this.ErrorMessageIsVisible = false;
                };
                ErrorMessage = __decorate([
                    core_1.Component({
                        selector: 'app-error-message',
                        templateUrl: 'app/shared/error-dialog.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], ErrorMessage);
                return ErrorMessage;
            }());
            exports_1("ErrorMessage", ErrorMessage);
        }
    }
});
//# sourceMappingURL=error-dialog.component.js.map