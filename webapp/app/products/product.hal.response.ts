import {IProduct} from './product';

export interface IProductHalResponse {
    _embedded: 
    {
        products: IProduct []
    };
    page: {
        size: number,
        totalElements: number,
        totalPages: number,
        number: number
    }     
}