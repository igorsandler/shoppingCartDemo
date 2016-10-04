export interface IProductPurchaseResponse
{
    status : string;
    productId :string;
    name:string;
    description:string;
    requestedQuantity :number;
    availableQuantity : number;
    remainingQuantity : number;
    exception : string;   
}