import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(public http: HttpClient) { }

  userLogin(reqData:any):Observable<any>{
    return this.http.post(environment.API_CONFIG+'customer/loginorregistersendotp', reqData)
  }


  verifyOtp(reqData:any):Observable<any>{
    return this.http.post(environment.API_CONFIG+'agents/validate', reqData)
  }

  userSignup(reqData:any):Observable<any>{
    return this.http.post(environment.API_CONFIG+'agents/login', reqData)
  }

  getUserProfile(id:any):Observable<any>{
    return this.http.get(environment.API_CONFIG+'customers/'+id)
  }

  updateUserProfile(id:any, reqData:any):Observable<any>{
    return this.http.put(environment.API_CONFIG+'customers/'+id, reqData)
  }

  getCountries(): Observable<any> {
    return this.http.get('/assets/json/countries.json');
  }

}
