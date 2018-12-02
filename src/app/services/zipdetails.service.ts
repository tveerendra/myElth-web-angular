import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { httpHeaders } from '../common/utils/'

@Injectable({
  providedIn: 'root'
})
export class ZipDetailsService {
  
  // params - zip=94538
  private zipDetailsUrl : string = 'https://api.myelth.com/dev/rest/v1/consts/regions/zip';

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result? : T){
    return (error:any) : Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }  

  getZipDetails(zip : any) : Observable<any>{

    var params = new HttpParams()
                .set('zip', zip);

    return this.http.get(this.zipDetailsUrl, {headers: httpHeaders, params })
            .pipe(
              tap(data => {}),
              catchError(this.handleError('getZipDetails', []))
            );
  }   

}
