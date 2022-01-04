import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-splice-ex',
  templateUrl: './splice-ex.component.html',
  styleUrls: ['./splice-ex.component.css']
})
export class SpliceExComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public empData:any[] = [
    {"empno":6589,"ename":"SRIRAM","job":"MANAGER","sal":3200,"deptno":30,"gender":"M"},
    {"empno":6369,"ename":"SMITH","job":"CLERK","sal":800,"deptno":20,"gender":"M"},
    {"empno":6499,"ename":"BARBARA","job":"SALESMAN","sal":1600,"deptno":30,"gender":"F"},
    {"empno":6521,"ename":"MELISSA","job":"ANALYST","sal":1250,"deptno":30,"gender":"F"},
    {"empno":6566,"ename":"JONES","job":"MANAGER","sal":2975,"deptno":20,"gender":"M"},
    {"empno":7654,"ename":"MARTIN","job":"SALESMAN","sal":1250,"deptno":30,"gender":"M"},
    {"empno":7698,"ename":"BLAKE","job":"MANAGER","sal":2850,"deptno":30,"gender":"F"},
    {"empno":7782,"ename":"CLARK","job":"MANAGER","sal":2450,"deptno":10,"gender":"M"},
    {"empno":7839,"ename":"KING","job":"PRESIDENT","sal":5000,"deptno":10,"gender":"M"},
    {"empno":7844,"ename":"TURNER","job":"SALESMAN","sal":1500,"deptno":30,"gender":"F"},
    {"empno":7876,"ename":"ADAMS","job":"CLERK","sal":1100,"deptno":20,"gender":"M"},
    {"empno":8900,"ename":"JAMES","job":"CLERK","sal":950,"deptno":30,"gender":"M"},
    {"empno":8902,"ename":"JENI","job":"ANALYST","sal":3000,"deptno":20,"gender":"F"},
    {"empno":8545,"ename":"KIRAN","job":"MANAGER","sal":5890,"deptno":10,"gender":"F"},
    {"empno":8844,"ename":"TURNER","job":"SALESMAN","sal":1500,"deptno":30,"gender":"M"},
    {"empno":8876,"ename":"ADAMS","job":"CLERK","sal":1100,"deptno":20,"gender":"M"},
    {"empno":9900,"ename":"JAMES","job":"CLERK","sal":950,"deptno":30,"gender":"M"},
    {"empno":9902,"ename":"FORD","job":"ANALYST","sal":3000,"deptno":20,"gender":"M"},
    {"empno":9545,"ename":"KIRAN","job":"MANAGER","sal":5890,"deptno":10,"gender":"F"},
    {"empno":9589,"ename":"ERIN","job":"MANAGER","sal":3200,"deptno":30,"gender":"F"},
    {"empno":9369,"ename":"SMITH","job":"CLERK","sal":800,"deptno":20,"gender":"M"},
    {"empno":9499,"ename":"ALLEN","job":"SALESMAN","sal":1600,"deptno":30,"gender":"F"},
    ];

    start:number = 0;
    end:number = 4;
    flag:boolean=false;
  
    loadMore()
    {
        //this.start = this.start + 4;
        this.end =  this.end + 4;

        if(this.end >= this.empData.length)
        {
          this.flag=true;
        }
    }


}
