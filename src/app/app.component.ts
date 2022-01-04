import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
flag:string=""
  IdSelect()
  {
    this.flag="id";

  }
  NameSelect()
  {
    this.flag="name";

  }
  PriceSelect()
  {
    this.flag="price";

  }
  CatSelect()
  {
    this.flag="cat";

  }
  QtySelect()
  {
    this.flag="qty";

  }
  logout()
  {
    sessionStorage.removeItem("AUTH_TOKEN");
    alert("Logout Successfully")
  }
}
