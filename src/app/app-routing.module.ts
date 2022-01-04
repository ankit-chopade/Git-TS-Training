import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuardService } from './auth-guard.service';
import { DeactivateGuardService } from './deactivate-guard.service';
import { DeptsComponent } from './depts/depts.component';
import { EmpComponent } from './emp/emp.component';
import { EmpdeptsComponent } from './empdepts/empdepts.component';
import { HomeComponent } from './home/home.component';
import { LloginComponent } from './llogin/llogin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  { path : "", component : HomeComponent},
  { path : "Emps", component : EmpComponent, canActivate : [AuthGuardService]},
  { path : "Depts", component : EmpdeptsComponent, canActivate : [AuthGuardService]},
  { path : "Aboutus", component : AboutusComponent},
  { path : "Login", component : LloginComponent},
  { path : "Register", component : RegisterComponent, canDeactivate : [DeactivateGuardService]},
  //{ path : "Details/:id", component : DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
