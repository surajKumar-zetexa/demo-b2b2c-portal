import { Injectable } from '@angular/core';
import { throwError, pipe, BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {

  public userInfo: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(public http: HttpClient,) { }

  saveuserInfo(data:any){
    this.userInfo.next(data)
  }


}
