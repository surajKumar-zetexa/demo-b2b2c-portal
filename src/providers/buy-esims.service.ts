import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BuyeSimsService {

  constructor(public http: HttpClient) { }

 

  // getRegionsorCountries(reqObj:any):Observable<any>{
  //   return this.http.get(environment.PRODUCTS_CONFIG+'regions?region_type='+ reqObj.region_type +'&device_type=Desktop')
  // }

  getRegionsorCountries(reqObj: { regionType: string, pageIndex: any, pageSize: any }): Observable<any> {
    return this.http.get(`${environment.PRODUCTS_CONFIG}regions?region_type=${reqObj.regionType}&device_type=Desktop&page_marker=${reqObj.pageIndex}&limit=${reqObj.pageSize}`);
  }


  getPlansBasedOnRegionsOrCountries(reqObj:any):Observable<any>{
    return this.http.get(environment.PRODUCTS_CONFIG+'agents/'+ reqObj.agent + '/plans?max_price=&min_price=&currency=&region='+ reqObj.region +'&type='+ reqObj.type +'&validity=&operator=&speed=&page_marker='+ reqObj.page_marker)
  }



}
