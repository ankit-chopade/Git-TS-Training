import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyShadow]'
})
export class AttibutecustdirDirective implements OnInit{

  @Input() appMyShadow:string="";
  constructor(private element:ElementRef) {
  }

  ngOnInit(): void {
    if(this.appMyShadow=="")
    {
      this.appMyShadow ="red";
    }
    this.element.nativeElement.style.border = "1px solid";
    this.element.nativeElement.style.padding = "10px";
    this.element.nativeElement.style.boxShadow = "5px 10px "+this.appMyShadow;
  }

}
