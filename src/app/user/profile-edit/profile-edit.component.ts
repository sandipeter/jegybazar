import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../shared/user.service';
import {UserModel} from '../../shared/user-model';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  user: UserModel;
  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
    this.user = this._userService.isLoggedin ? this._userService.getCurrentUser() : new UserModel();
  }

  onSubmit(){
    this.user.id ? this._userService.updateUser(this.user) : this._userService.register(this.user);
    this._router.navigate(['/user']);
  }
}
