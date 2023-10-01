import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SecureInnerPagesGuard implements CanActivate {
  constructor(public cookieService: CookieService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let user = JSON.parse(this.cookieService.get("user") || "{}");
    // if (this.authService.isLoggedIn) {
    //     window.alert("You are not allowed to access this URL!");
    //     this.router.navigate(['/dashboard/dashboard01'])
    // }
    return true;
  }
}
