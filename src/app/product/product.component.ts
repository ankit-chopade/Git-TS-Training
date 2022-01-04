import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Tech } from '../models/tech';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fpid:number=0;
  fpname:string="";
  fpprice:number=0;
  fpcat:string="";
  fpqty:number=0;  
  flag:boolean=false;

  objs:Product[] =[];
  //tech:string[]=["Angular", "React", "Node JS", "Express"]

  addProduct()
  {
    //temp:Product = new Product();
    let tempprod:any = this.objs.find(x => x.pid == this.fpid );
    if(tempprod==null)
    {
      this.objs.push({pid:this.fpid,pname:this.fpname,price:this.fpprice,category:this.fpcat,qty:this.fpqty})
    }
    else
    {
      alert("Duplicate Entry");
    }
  }

  displayRecords()
  {
    this.objs = [
      {pid:1,pname:"Motorola",price:10000,category:"Mobile",qty:10},
      {pid:2,pname:"Sony",price:20000,category:"Mobile/TV",qty:4},
      {pid:3,pname:"Samsung",price:30000,category:"TV",qty:6},
      {pid:4,pname:"LG",price:40000,category:"TV",qty:160},
      {pid:5,pname:"Jio",price:50000,category:"Mobile",qty:56},
  
    ]
  }

  selectProd(tempid:number)
  {
    let temp:any = this.objs.find(x=>x.pid==tempid);
    this.fpid=temp.pid;
    this.fpname=temp.pname;
    this.fpprice=temp.price;
    this.fpcat=temp.category;
    this.fpqty=temp.qty;
    this.flag=true;
  }
  deleteProd(tempid:number)
  {
    let i:number = this.objs.findIndex(x => x.pid == tempid );
    this.objs.splice(i, 1);
  }

  updateProd()
  {
    let i:number = this.objs.findIndex(x => x.pid == this.fpid );
    this.objs[i].pname = this.fpname;
    this.objs[i].category = this.fpcat;
    this.objs[i].price=this.fpprice;
    this.objs[i].qty=this.fpqty;
    this.clearFields();
  }


  clearFields()
  {
      this.flag = false;
      this.fpid = 0;
      this.fpname  = "";
      this.fpcat  = "";
      this.fpprice=0
      this.fpqty=0;
  }
}
