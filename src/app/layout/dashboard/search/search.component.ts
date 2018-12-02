import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';

import { ServiceListService } from '../../../services/servicelist.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [NgbTypeaheadConfig]
})
export class SearchComponent implements OnInit {

  serviceList : any[] = [];
  srchCareModel : any;


  constructor(private serviceListService: ServiceListService,
                config: NgbTypeaheadConfig) { 
    config.showHint = true;
  }

  ngOnInit() {
    this.getServiceList();
  }

  getServiceList(){
    this.serviceListService.getServices()
        .subscribe(data => this.setServiceList(data));
  }

  setServiceList(svcList : any){
    this.serviceList = svcList.data;
  }

  search = (text$: Observable<string>) => text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      map(term => term === '' ? [] : 
            this.serviceList.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  );

  formatter = (x: {name: string}) => x.name;  

}
