import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginauthService {

  constructor(private httpClient: HttpClient) { }

  getTokenForValidUser(uid:string, pwd:string) : Observable<any>
  {
    let userObj:any = { "email": uid,   "password": pwd  };
    let authUrl:string  = "http://localhost:3000/login";
    return this.httpClient.post(authUrl, userObj);
  }
}
