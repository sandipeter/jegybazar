import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from './user.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private _userService: UserService,
              private _router: Router,
              private _location: Location) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._userService.isLoggedin){
      return true;
    }else {
      // itt annyit csinaltunk, hogy a Location segitsegevel
        // nem elnavigalunk valami fix helyre ha nincs jogunk
       // hanem pusztan helyben maradunk
      // illetve indulasnal alap routeba esunk bele
      // this._router.navigate([this._location.path()]);   - ez is jó
       this._location.back();
      return false;
    }
  }
}
