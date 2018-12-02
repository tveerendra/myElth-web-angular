import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let cacheUser = localStorage.getItem('currentUser');
        if(cacheUser == null){

        } else if(cacheUser){
            let currentUser = JSON.parse(cacheUser); 
            if(currentUser == null){
                currentUser = {};
            }
    
            if (currentUser && currentUser.token) {
                request = request.clone({
                    setHeaders: { 
                        Authorization: `Bearer ${currentUser.token}`
                    }
                });
            }            
        }

        return next.handle(request);
    }
}