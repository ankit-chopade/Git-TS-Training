import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-llogin',
  templateUrl: './llogin.component.html',
  styleUrls: ['./llogin.component.css']
})
export class LloginComponent {

  uid:string  = "123";
    pwd:string  = "123";
    result:string  = "";

    constructor(private router: Router, private route:ActivatedRoute) { }

    loginButton_click()
    {
     let requestedRouteUrl =  this.route.snapshot.queryParams["returnUrl"];
      if(requestedRouteUrl == null)
      {
        requestedRouteUrl = "/" ;
      }

      if(this.uid == "123"  &&  this.pwd  == "123")
      {
        const hardcodedToken = '1d38d128-0671-4121-8084-f6332a992a40';
        sessionStorage.setItem("AUTH_TOKEN",  hardcodedToken);
        this.router.navigate([requestedRouteUrl]);
      }
      else
      {
        this.result = "Invalid user id or password";
      }
    }

}
