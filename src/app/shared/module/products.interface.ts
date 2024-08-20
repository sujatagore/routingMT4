import { Observable } from "rxjs";

export interface Iproducts{
    pid: string;
    pname: string;
    pstatus: 'Delivered' | 'Dispatched' | 'In Progress';
    canReturn: number;
    productDescription: string;
    price: number;
    brand: string;
    rating: number;
    images: string;
}

export interface IcanDeactivate{
    canDeactive : () => boolean | Observable<boolean> | Promise<boolean>
}