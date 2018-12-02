import { Component, OnInit } from '@angular/core';

import { CoverageService } from '../../../services/coverage.service';
import { getNestedObject } from '../../../common/utils';

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.scss']
})
export class CoverageComponent implements OnInit {

  deductibles : any;

  constructor(private coverageService : CoverageService) { }

  ngOnInit() {
    const cachedUser = localStorage.getItem('currentUser');
    if(cachedUser != null){
      const cachedObj = JSON.parse(cachedUser);
      //console.log('calling coverage service');
      this.getCoverage(cachedObj.userID, cachedObj.memberID);
    }
  }

  getCoverage(userID : string, memberID : string){
    this.coverageService.getCoverage(userID, memberID)
        .subscribe(data => this.setCoverage(data));
  }

  setCoverage(data){
    //console.log('coverage data : ' + data);
    let deducts = getNestedObject(data, ['CoverageDetails', 0, 'coverageData', 'data', 'coverages', 'deductibles']);
    //console.log('deducts : ' + deducts);
    //console.log('deducts string : ' + JSON.stringify(deducts));
    this.deductibles = deducts;
  }

}
