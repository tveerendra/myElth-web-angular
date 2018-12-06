import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { httpHeaders } from '../common/utils/'
import { Employer } from '../models/employer';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private dependentUrl : string = 'http://18.233.238.38:3000/api/getDependentUsersList';

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result? : T){
    return (error:any) : Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }  

  getDependentUsersList(userID : any) : Observable<any>{
    var params = new HttpParams().set('userID', userID);
    return this.http.get(this.dependentUrl, {headers: httpHeaders, params})
            .pipe(
              tap(data => console.log('getDependentUsersList : ' + data)),
              catchError(this.handleError('getDependentUsersList', []))
            );
  }  

  registerEmployer(employer: Employer) {
    return this.http.post(`http://18.233.238.38:3000/api/Employers`, employer);
  }
}
