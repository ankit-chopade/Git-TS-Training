import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginauthService } from '../loginauth.service';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  uid:string  = "";
  pwd:string  = "";
  result:string  = "";
  isButtonDisabled:boolean = false;
  count:number = 0;

  constructor(private loginauthService: LoginauthService) { }


  loginButton_click()
  {
    this.loginauthService.getTokenForValidUser(this.uid, this.pwd)
      .subscribe(
      (response:any) => {
            console.log(response.accessToken);
      });
  }


}
