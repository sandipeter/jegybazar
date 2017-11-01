import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {UserModel} from './user-model';

@Injectable()
export class UserService {
  isLoggedin = false;
  private _user: UserModel;

  constructor(private _router: Router) { }

  login(email: string, password: string){
    if (email === 'angular' && password === 'angular'){
      this._user = new UserModel(UserModel.exampleUser);
      this.isLoggedin = true;
      console.log('be vagyunk lepve:', this.isLoggedin, this._user.name);
      this._router.navigate(['/user']);
    }
    return false;   // sikertelen belépés
  }
  register(param?: UserModel){
    if(param) {
      this._user = new UserModel(param);
    }else {
      this._user = new UserModel(UserModel.exampleUser);
    }
    this.isLoggedin = true;
    this._router.navigate(['/home']);
    console.log('be vagyunk lepve:', this.isLoggedin, this._user.name);
  }
  logout() {
    this._user = new UserModel(); // üres
    this.isLoggedin = false;
    this._router.navigate(['/home']);
    console.log('be vagyunk lepve:', this.isLoggedin, this._user.name);

  }
}
