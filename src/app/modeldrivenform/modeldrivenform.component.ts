import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modeldrivenform',
  templateUrl: './modeldrivenform.component.html',
  styleUrls: ['./modeldrivenform.component.css']
})
export class ModeldrivenformComponent  {
  
  public vehicleRegForm : FormGroup = new FormGroup({
    oname :  new FormControl("", Validators.required),
    cnumber :  new FormControl("", [Validators.required,Validators.pattern("\\d{10}")]),
    email :  new FormControl("", Validators.email),
    vregno :  new FormControl("", [Validators.required,Validators.pattern("[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}")]),
    address :  new FormControl("", Validators.required),
    model :  new FormControl("", Validators.pattern("[a-z]{1,10}")),
    vcolor :  new FormControl("", Validators.required),
    year : new FormControl("", Validators.pattern("\\b(201[2-9]|2020|202[1-2])\\b")),
});

  submitForm()
  {
    alert("Your Vehicle is successfully registered.")
  }

}
