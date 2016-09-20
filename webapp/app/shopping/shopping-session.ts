import { ICustomer } from '../customers/customer';

export interface IShoppingSession
{
    customerId: string;
    customer: ICustomer;
}