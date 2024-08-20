import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable({
    providedIn : 'root'
})

export class AuthGaurd implements CanActivate, CanActivateChild { 
    // private _authService = inject (AuthService) >> if there is not constructor

    constructor(
        private _authService : AuthService
    ){ }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
            : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        
        return  this._authService.isAuthenticated()
                    .then((res:boolean) =>{
                        return res // true or false
                            // if (res === true) {
                            //     return true
                            // } else {
                            //     return false
                            // }
                        })
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
            return  this._authService.isAuthenticated()
            .then((res:boolean) =>{
                return res // true or false
                    // if (res === true) {
                    //     return true
                    // } else {
                    //     return false
                    // }
                })
    }

}