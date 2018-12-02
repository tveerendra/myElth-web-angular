import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { httpHeaders } from '../common/utils/'

@Injectable({
  providedIn: 'root'
})
export class CoverageService {

  private getCoverageUrl : string = 'http://18.233.238.38:3000/api/queryCoverage';

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result? : T){
    return (error:any) : Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  getCoverage(userID : any, memberID : any) : Observable<any>{

    var params = new HttpParams()
                .set('userID', userID)
                .set('memberID', memberID);

    return this.http.get(this.getCoverageUrl, {headers: httpHeaders, params })
            .pipe(
              tap(data => {}),
              catchError(this.handleError('getCoverage', []))
            );
  }  
}
