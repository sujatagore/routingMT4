import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { IFair } from '../module/fairs.interface';
import { Observable } from 'rxjs';
import { FairsService } from './fairs.service';

@Injectable({
  providedIn: 'root'
})
export class FairsresolverService implements Resolve<IFair[]> {

  constructor(
    private _fairsService : FairsService
  ) { }

  resolve(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): IFair[] | Observable<IFair[]> | Promise<IFair[]> {
    return this._fairsService.fetchAllFairs()
  }
}
