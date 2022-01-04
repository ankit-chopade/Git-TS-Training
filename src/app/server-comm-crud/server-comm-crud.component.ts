import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-server-comm-crud',
  templateUrl: './server-comm-crud.component.html',
  styleUrls: ['./server-comm-crud.component.css']
})
export class ServerCommCRUDComponent implements OnInit {

  
  constructor(private httpObj: HttpClient) { }

  ngOnInit(): void {
  }
  fpid:number=0;
  fpname:string="";
  fpprice:number=0;
  fpcat:string="";
  fpqty:number=0;  
  flag:boolean=false;

  objs:Product[] =[];
  url:string="http://localhost:3000/data";
  //tech:string[]=["Angular", "React", "Node JS", "Express"]

  addProduct()
  {
    //temp:Product = new Product();
    let tempprod:any = this.objs.find(x => x.pid == this.fpid );
    if(tempprod==null)
    {      
      this.httpObj.post(this.url, {pid:this.fpid,pname:this.fpname,price:this.fpprice,category:this.fpcat,qty:this.fpqty}).subscribe( (response:any) =>{
        console.log("New Product details are added to server.");
        alert("New product details are added to server.");
        this.clearFields();
        this.displayRecords();
      });
    }
    else
    {
      alert("Duplicate Entry");
    }
  }

  displayRecords()
  {
   
    this.httpObj.get(this.url).subscribe( (response:any) =>{
      // console.log(response);
      this.objs = response;
      //alert("Data is Displayed")
    });

  }

  selectProd(tempid:number)
  {
    this.httpObj.get(this.url + "/" + tempid).subscribe( (response:any) =>{

    let temp:any = response;
    this.fpid=temp.pid;
    this.fpname=temp.pname;
    this.fpprice=temp.price;
    this.fpcat=temp.category;
    this.fpqty=temp.qty;
    this.flag=true;
    });
  }
  deleteProd(tempid:number)
  {
    this.httpObj.delete(this.url + "/" + tempid).subscribe( (response:any) =>{
      console.log("Requested Product details are deleted from  server.");
      alert("Requested Product details are deleted from  server.");
      this.displayRecords();  // to get all the updated results
    });
  }

  updateProd()
  {
    //let i:number = this.objs.findIndex(x => x.pid == this.fpid );
    let temp:Product=new Product();
    temp.pname = this.fpname;
    temp.category = this.fpcat;
    temp.price=this.fpprice;
    temp.qty=this.fpqty;

    this.httpObj.put(this.url + "/" + this.fpid, temp).subscribe( (response:any) =>{
      console.log("Requested Dept details are updated to server.");
      alert("Requested Dept details are updated to server.");
      this.clearFields();
      this.displayRecords();
    });
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
