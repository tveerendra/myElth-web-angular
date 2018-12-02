import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { httpHeaders } from '../common/utils/'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl : string = 'http://18.233.238.38:3000/api/auth';

  constructor(private http: HttpClient) {
  }

  private handleError<T>(operation = 'operation', result? : T){
    return (error:any) : Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  loginUser(signInUser : any) : Observable<any>{

    return this.http.post(this.loginUrl, signInUser, httpHeaders)
            .pipe(
              tap(data => console.log('login : ' + data)),
              catchError(this.handleError('loginUser', []))
            );
  }
}
