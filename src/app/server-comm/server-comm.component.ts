import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-comm',
  templateUrl: './server-comm.component.html',
  styleUrls: ['./server-comm.component.css']
})
export class ServerCommComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }
  customers:any[]=[];

  ngOnInit(): void {
  }

  getData()
  {
    let url:string ="https://reqres.in/api/users";
     this.httpClient.get(url).subscribe((result:any) =>  {
       this.customers=result.data;
      });

  }



}
