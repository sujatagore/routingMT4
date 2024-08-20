import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Iproducts } from '../module/products.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductresolverService implements Resolve<Iproducts[]>{

  constructor(
    private _productsService : ProductsService
  ) { }
  resolve(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Iproducts[] | Observable<Iproducts[]> | Promise<Iproducts[]> {
    return this._productsService.fetchAllProducts()
  }
}
