import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {
  private _router = inject(Router)

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let actualLogInUserRole = localStorage.getItem('userRole') as string;
    let userRoleArr : Array<string> = route.data['userRole']

    if (userRoleArr.includes(actualLogInUserRole)) {
      return true
    } else {
      return this._router.createUrlTree(['home'])
    }
  }
  
}
