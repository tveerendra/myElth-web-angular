import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../../services/users.service';

import {user, mockDependents} from './data.js';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  /*
  user : any = { 
    "firstName" : 'Kiran', 
    "lastName" : 'Reddy',
    "dependents" : [
      { "firstName" : 'Sakthi', "lastName" : 'Natarajan', "relation" : 'Spouse', "memberId": '02'},
      { "firstName" : 'Prameela', "lastName" : 'Reddy', "relation" : 'Child', "memberId": '03'},
    ],

  };*/

  user : any = user;
  mockDependents : any = mockDependents;
  dependents : any[];

  constructor(private usersService : UsersService) {

  }

  ngOnInit() {
    // fetch dependents for logged-in userID
    this.fetchDependents('naveen');
  }

  fetchDependents(userID : string){
    this.usersService.getDependentUsersList(userID)
        .subscribe(data => this.setDependents(data));
  }

  setDependents(deps : any){
    if(deps){
      //console.log("setting dependents from service");
      this.dependents = deps.dependentUserRecordArray;
    } else {
      //this.dependents = this.mockDependents.dependentUserRecordArray;
    }
  }

  isDependents(){
    return (this.dependents != null && this.dependents.length > 0);
  }

}
