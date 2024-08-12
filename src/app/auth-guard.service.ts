import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";

export class AuthGuard implements CanActivate{
    authService = inject(AuthService)
    router = inject(Router)
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.authService.isAuthenticated().then(
            (authenticated: boolean) => {
              if (authenticated) {
                return true;
              } else {
                alert("You are not authenticated. Redirecting...");
                this.router.navigate(['/lasdjffdd']); //not found component
                return false; 
              }
            }
          );
    }
}