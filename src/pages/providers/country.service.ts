import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public  jsonURL = "/assets/countries.json"
  constructor(public http: HttpClient) { 

  }
  getCountries():Observable<any>{
    return this.http.get(this.jsonURL);
  }

}
