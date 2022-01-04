import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {

  ImagePath:string = '../../assets/image1.jpg'
  eid:number= 54654564;
  ename:string = "Stephen";
  ejob:string="Manger";
  esal:number=75000;
  edepo:number= 10;

}
