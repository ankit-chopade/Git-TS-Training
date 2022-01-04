import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-server-comm-crud-services',
  templateUrl: './server-comm-crud-services.component.html',
  styleUrls: ['./server-comm-crud-services.component.css']
})

export class ServerCommCrudServicesComponent implements OnInit {

  constructor(private productserviceService: ProductserviceService) { }

  ngOnInit(): void {
  }
  fpid:number=0;
  fpname:string="";
  fpprice:number=0;
  fpcat:string="";
  fpqty:number=0;  
  flag:boolean=false;
  prodbycat:string="";

  objs:Product[] =[];
  url:string="http://localhost:3000/data";
  //tech:string[]=["Angular", "React", "Node JS", "Express"]

  addProduct()
  {
    //temp:Product = new Product();
    let tempprod:any = this.objs.find(x => x.pid == this.fpid );
    if(tempprod==null)
    {  
      let temp:Product = new Product();
      temp.pid=this.fpid;
      temp.pname= this.fpname;
      temp.price=this.fpprice;
      temp.category=this.fpcat;
      temp.qty = this.fpqty;

      

      this.productserviceService.addProd(temp).subscribe( (response:any) =>{
        // console.log("New Product details are added.");
        // alert("New product details are added");
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
    this.productserviceService.displayRec().subscribe( (response:any) =>{
      // console.log(response);
      this.objs = response;
      //alert("Data is Displayed")
    });

  }

  selectProd(tempid:number)
  {
    this.productserviceService.selectProduct(tempid).subscribe( (response:any) =>{

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
    this.productserviceService.deleteProduct(tempid).subscribe( (response:any) =>{
      // console.log("Requested Product details are deleted from  server.");
      // alert("Requested Product details are deleted from  server.");
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

    this.productserviceService.updateProduct(this.fpid, temp).subscribe( (response:any) =>{
      // console.log("Requested Dept details are updated to server.");
      // alert("Requested Dept details are updated to server.");
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

productname:string[] =[];
  displayProductNames()
  {
    this.productserviceService.displayProdNames().subscribe(response => 
      this.productname = response
      );
  }
productbycategory:Product[] =[];
  getProductByCategory()
  {
    this.productserviceService.getProductByCat(this.prodbycat).subscribe(response =>
      this.productbycategory = response
      );
  }
pricencategory:any[] =[];
  getPriceAndCategory()
  {
    this.productserviceService.getPriceAndCat().subscribe(response =>
      this.pricencategory=response
      )
  }

  wrongURL()
  {
    this.productserviceService.wrongURLService().subscribe(response =>
      console.log(response)
      )
  }


}
