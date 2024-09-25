import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(public router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const customerToken = localStorage.getItem('customerToken')
   
    if(customerToken){
    //  const cloned = request.clone({
    //    headers: request.headers.set('Authorization','Token '+ customerToken)
    //  })

     let cloned:any;
   
         cloned = request.clone({
          headers: request.headers.set('Authorization','Token '+ customerToken)
        })
     
     return next.handle(cloned);
    }   
   request.headers.set('Content-Type','application/json')
   request.headers.set('Content-Security-Policy','default-src')
       return next.handle(request).pipe(catchError( err  =>{
         if(err.status === 400) {
           console.log('The repeat this request without modification.')
         }
         else if(err.status === 401){
           console.log('Unauthorized User')
           localStorage.removeItem('agent-data')
           this.router.navigate(['/login'])
         }
         return throwError( err );
       }))
   
      
   
   
     }
}
