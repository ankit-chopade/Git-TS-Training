import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data:any[]=[
    {"name":"Scott","grade":1},
    {"name":"Abrons","grade":2},
    {"name":"Smith","grade":3},
    {"name":"James","grade":4},
    {"name":"Adam","grade":1},
    {"name":"Sathya","grade":3},
    {"name":"Maneesh","grade":4},
    {"name":"Haneesh","grade":2},
  ]

}
