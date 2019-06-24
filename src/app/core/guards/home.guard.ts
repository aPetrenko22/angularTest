import { HomeService } from './../services/home.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HomeGuard implements CanActivate {
  constructor(private router: Router, private homeService: HomeService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (
      (state.url === '/data' || state.url === '/text') &&
      !this.homeService.isActivated
    ) {
      this.router.navigate(['/']);
      return false;
    }

    if (state.url === '/' && this.homeService.isActivated) {
      this.router.navigate(['/data']);
      return false;
    }

    return true;
  }
}
