import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '@services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanActivate, CanLoad {
  public constructor(
    private storageService: StorageService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isAuthorized: boolean = this.authorize();
      if (!isAuthorized) {
        this.router.navigate(['/', 'account']);
      }
      return isAuthorized;
  }
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isAuthorized: boolean = this.authorize();
      if (!isAuthorized) {
        this.router.navigate(['/', 'account']);
      }
      return isAuthorized;
  }

  private authorize(): boolean {
    return this.storageService.get() ? true : false;
  }
}
