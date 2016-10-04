import {IProductPurchaseResponse} from './shopping-product-purchase-response' 


export interface IPurchaseResponse
{
    products : IProductPurchaseResponse []; 
    total : number;
}