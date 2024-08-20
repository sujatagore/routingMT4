import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Iusers } from '../module/users.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersresolverService implements Resolve <Iusers[]> {

  constructor(
    private _usersServices : UsersService
  ) { }
  resolve(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Iusers[] | Observable<Iusers[]> | Promise<Iusers[]> {
    
      return this._usersServices.fetchAllUsers()
  }


}
