import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-totalprice',
  templateUrl: './totalprice.component.html',
  styleUrls: ['./totalprice.component.css']
})
export class TotalpriceComponent implements OnInit {

  price:number=0;
  qty:number=0;
  total:number=0;
  name:string="";
  constructor() { }

  ngOnInit(): void {
  }

  getTotal()
  {
   this.total=this.price*this.qty;
  }

}
