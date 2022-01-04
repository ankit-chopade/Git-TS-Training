import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges{
  temp: Product | undefined;
  @Input()
  tosort:string  = "";


  constructor() { }

  ngOnInit(): void {
  }
  prodarray:Product[] = [
    {pid:5,pname:"Motorola",price:10000,category:"Mobile",qty:10},
    {pid:2,pname:"Sony",price:20000,category:"Mobile/TV",qty:4},
    {pid:3,pname:"Samsung",price:30000,category:"TV",qty:6},
    {pid:4,pname:"LG",price:40000,category:"TV",qty:160},
    {pid:1,pname:"Jio",price:50000,category:"Mobile",qty:56},

  ]

  Id()
  {
    for(var i=0;i<this.prodarray.length;i++)
    {
      for(var j=i+1;j<this.prodarray.length;j++)
      {
        if(this.prodarray[i].pid>this.prodarray[j].pid)
        {
          this.temp=this.prodarray[i];
          this.prodarray[i] =this.prodarray[j];
          this.prodarray[j] = this.temp;
        }
      }
    }
  }

  Name()
  {
    for(var i=0;i<this.prodarray.length;i++)
    {
      for(var j=i+1;j<this.prodarray.length;j++)
      {
        if(this.prodarray[i].pname>this.prodarray[j].pname)
        {
          this.temp=this.prodarray[i];
          this.prodarray[i] =this.prodarray[j];
          this.prodarray[j] = this.temp;
        }
      }
    }
  }

  Price()
  {
    for(var i=0;i<this.prodarray.length;i++)
    {
      for(var j=i+1;j<this.prodarray.length;j++)
      {
        if(this.prodarray[i].price>this.prodarray[j].price)
        {
          this.temp=this.prodarray[i];
          this.prodarray[i] =this.prodarray[j];
          this.prodarray[j] = this.temp;
        }
      }
    }
  }

  Cat()
  {
    for(var i=0;i<this.prodarray.length;i++)
    {
      for(var j=i+1;j<this.prodarray.length;j++)
      {
        if(this.prodarray[i].category>this.prodarray[j].category)
        {
          this.temp=this.prodarray[i];
          this.prodarray[i] =this.prodarray[j];
          this.prodarray[j] = this.temp;
        }
      }
    }
  }

  Qty()
  {
    for(var i=0;i<this.prodarray.length;i++)
    {
      for(var j=i+1;j<this.prodarray.length;j++)
      {
        if(this.prodarray[i].qty>this.prodarray[j].qty)
        {
          this.temp=this.prodarray[i];
          this.prodarray[i] =this.prodarray[j];
          this.prodarray[j] = this.temp;
        }
      }
    }
  }
  ngOnChanges()
  {
   if(this.tosort=="id")
   {
     this.Id();
   }
   else if(this.tosort=="name")
   {
     this.Name()
   }
   else if(this.tosort=="price")
   {
     this.Price()
   }
   else if(this.tosort=="cat")
   {
     this.Cat()
   }
   else if(this.tosort=="qty")
   {
     this.Qty()
   }

  }

}
