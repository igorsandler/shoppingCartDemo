import {ICustomer} from './customer';

export interface ICustomerHalResponse {
    _embedded: 
    {
        customers: ICustomer []
    };
    page: {
        size: number,
        totalElements: number,
        totalPages: number,
        number: number
    }     
}