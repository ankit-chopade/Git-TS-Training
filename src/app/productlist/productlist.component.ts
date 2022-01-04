import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  category:string="";

  prodarray:Product[] = [
    {pid:1,pname:"Motorola",price:10000,category:"Mobile",qty:10},
    {pid:2,pname:"Sony",price:20000,category:"Mobile/TV",qty:4},
    {pid:3,pname:"Samsung",price:30000,category:"TV",qty:6},
    {pid:4,pname:"LG",price:40000,category:"TV",qty:160},
    {pid:5,pname:"Jio",price:50000,category:"Mobile",qty:56},

  ]



}
