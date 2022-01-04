import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  onIdSelect:EventEmitter<any> = new   EventEmitter();

  
  @Output()
  onNameSelect:EventEmitter<any> = new   EventEmitter();
  @Output()
  onPriceSelect:EventEmitter<any> = new   EventEmitter();
  @Output()
  onCatSelect:EventEmitter<any> = new   EventEmitter();
  @Output()
  onQtySelect:EventEmitter<any> = new   EventEmitter();


  Id()
  {
    this.onIdSelect.emit();

  }

  Name()
  {
    this.onNameSelect.emit();

  }
  Price()
  {
    this.onPriceSelect.emit();

  }
  Cat()
  {
    this.onCatSelect.emit();

  }
  Qty()
  {
    this.onQtySelect.emit();

  }

}
