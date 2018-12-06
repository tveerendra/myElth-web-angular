import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

import { LoginService } from '../../../services/login.service';
import { ZipDetailsService } from '../../../services/zipdetails.service';

import { routerTransition } from './../../../router.animations';
import { UsersService } from '../../../services/users.service';
import { AlertService } from '../../../services/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [routerTransition()]
})
export class RegisterComponent implements OnInit {

  regType : string = 'consumer';
  regTypeTitle : string = 'Member';
  registerForm: FormGroup;
  selectedGender : string = 'Gender';
  loading = false;
  submitted = false;

  constructor(private router : Router, 
              private route : ActivatedRoute,
              private formBuilder: FormBuilder,
              config: NgbDropdownConfig,
              private loginService: LoginService,
              private usersService: UsersService,
              private alertService: AlertService,
              private zipDetailsService : ZipDetailsService) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.regType = params['type'] || 'consumer';
    });

    this.registerForm = this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', ],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      zipCode: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      country: [''],
      groupNumber:[''],
      payerID:['']
    });

    this.setFormTitle();
  }

  setFormTitle(){
    if(this.regType === 'provider'){
      this.regTypeTitle = 'Healthcare Professional';
    } else if(this.regType === 'employer'){
      this.regTypeTitle = 'Employer';
    } else {
      this.regTypeTitle = 'Member';
    }
  }

  get f() { return this.registerForm.controls; }

  changeGender(value : string){
    this.selectedGender = value;
  }

  getZipcodeDetails(zip: any){
    /*
    this.zipDetailsService.getZipDetails(zip)
        .subscribe(data => this.setZipDetails(data));
        */
  }

  setZipDetails(zipData : any){
    if(zipData && zipData.data){
      let cityValue = zipData.data.city;
      let stateValue = zipData.data.state;
    }
  }

  doSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;
    this.usersService.registerEmployer(this.registerForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
  }

}
