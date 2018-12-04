import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-memberlogin',
  templateUrl: './memberlogin.component.html',
  styleUrls: ['./memberlogin.component.scss']
})

export class MemberLoginComponent implements OnInit {

  loginType : string = 'Member';
  altLogin : string = 'Healthcare Professional';
  empLogin : string = 'Employer';
  submitted : boolean = false;
  passwordType : string = 'password';

  loginForm: FormGroup;

  constructor(private router : Router, 
              private route : ActivatedRoute,
              private formBuilder: FormBuilder,
              private loginService: LoginService) { 
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() { return this.loginForm.controls; }

  altLoginClicked(){
    var temp = this.loginType;
      this.loginType = this.altLogin;
      this.altLogin = temp;
  }

  empLoginClicked(){
    var temp = this.loginType;
      this.loginType = this.empLogin;
      this.empLogin = temp;
    
  }

  togglePassword(){
    if(this.passwordType == 'password'){
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }

  login(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      console.log('errors in login form');
      return;
    }    
    const signInUser = {
      args : {
        userID : this.loginForm.controls.userId.value,
        password: this.loginForm.controls.password.value
      }
    };

    this.loginService.loginUser(signInUser)
        .subscribe(data => this.loginSuccess(data));
  }

  loginSuccess(user: any){
    console.log('token : ' + user.token);
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.navigateToDashboard();
  }

  navigateToDashboard(){
    this.router.navigate(['/dashboard']);    
  }

  register(){
    var regType = 'consumer';
    if(this.loginType === 'Healthcare Professional'){
      regType = 'provider';
    } else if(this.loginType === 'Employer'){
      regType = 'employer';
    }
    this.router.navigate(['/home/register'], {queryParams: {type: regType}});
  }

}
