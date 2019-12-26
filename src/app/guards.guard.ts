import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {
  // JwtHelper = new JwtHelperService();
  token: string;
  constructor(public router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("roleeeeeeee",route.data)
    if (sessionStorage.getItem('token')) {
      this.token = sessionStorage.getItem('token');
      // if (this.JwtHelper.isTokenExpired(this.token)) {
      // this.toastr.errorToastr('Your session expired, please login again.');
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      // }
      const role = sessionStorage.getItem('role');
      if (route.data['roles'].includes(role)) {
        return true;
      } else {
        this.router.navigate(['/dashboard']);
        return false;
      }
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }

  }

}
