import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-switch-directive',
  templateUrl: './switch-directive.component.html',
  styleUrls: ['./switch-directive.component.css']
})
export class SwitchDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mode:string="List";
  objs:Product[] = [
    {pid:1,pname:"Motorola",price:10000,category:"Mobile",qty:10},
    {pid:2,pname:"Sony",price:20000,category:"Mobile/TV",qty:4},
    {pid:3,pname:"Samsung",price:30000,category:"TV",qty:6},
    {pid:4,pname:"LG",price:40000,category:"TV",qty:160},
    {pid:5,pname:"Jio",price:50000,category:"Mobile",qty:56},

  ]


}
