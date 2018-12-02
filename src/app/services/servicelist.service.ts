import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { httpHeaders } from '../common/utils/'

@Injectable({
  providedIn: 'root'
})
export class ServiceListService {

  private serviceListURL : string = 'https://api.myelth.com/dev/rest/v1/services';

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result? : T){
    return (error:any) : Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }  

  getServices() : Observable<any>{

    return this.http.get(this.serviceListURL, {headers: httpHeaders})
            .pipe(
              tap(data => {}),
              catchError(this.handleError('getZipDetails', []))
            );
  }   
  
  
}
