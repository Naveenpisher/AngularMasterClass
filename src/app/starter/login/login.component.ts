import { Component } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/internal/operators/first';

@Component({
  selector: 'app-starter',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private userAuthService: UserAuthService,
    private router: Router) {
  }
  public userLoginData = {
    userName : '',
    password: '',
  };
  public logIn() {
    this.userAuthService.login(this.userLoginData.userName, this.userLoginData.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/apps']);
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
