import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

import { LoginService } from '../../../services/login.service';
import { ZipDetailsService } from '../../../services/zipdetails.service';

import { routerTransition } from './../../../router.animations';

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

  constructor(private router : Router, 
              private route : ActivatedRoute,
              private formBuilder: FormBuilder,
              config: NgbDropdownConfig,
              private loginService: LoginService,
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
    if(this.regType === 'consumer'){
      this.regTypeTitle = 'Member';
    } else if(this.regType === 'provider'){
      this.regTypeTitle = 'Healthcare Professional';
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

}
