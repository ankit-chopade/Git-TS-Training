import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DeptsComponent } from './depts/depts.component';
import { EmpComponent } from './emp/emp.component';
import { ProductComponent } from './product/product.component';
import { TechstackComponent } from './techstack/techstack.component';
import { TotalpriceComponent } from './totalprice/totalprice.component';
import { ChildComponent } from './child/child.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ParentComponent } from './parent/parent.component';
import { SwitchDirectiveComponent } from './switch-directive/switch-directive.component';
import { SpliceExComponent } from './splice-ex/splice-ex.component';
import { GradePipe } from './grade.pipe';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { CustompipeFilterempComponent } from './custompipe-filteremp/custompipe-filteremp.component';
import { FilterempPipe } from './filteremp.pipe';
import { ServerCommDemoComponent } from './server-comm-demo/server-comm-demo.component';
import { ServerCommComponent } from './server-comm/server-comm.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerCommCRUDComponent } from './server-comm-crud/server-comm-crud.component';
import { ServerCommCrudServicesComponent } from './server-comm-crud-services/server-comm-crud-services.component';
import { CustomHttpInterceptorService } from './custom-http-interceptor.service';
import { ModeldrivenformComponent } from './modeldrivenform/modeldrivenform.component';
import { AttibutecustdirDirective } from './attibutecustdir.directive';
import { AttibutecustdircompComponent } from './attibutecustdircomp/attibutecustdircomp.component';
import { StructuralcustdirDirective } from './structuralcustdir.directive';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EmpdeptsComponent } from './empdepts/empdepts.component';
import { HomeComponent } from './home/home.component';
import { LloginComponent } from './llogin/llogin.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DeptsComponent,
    EmpComponent,
    ProductComponent,
    TechstackComponent,
    TotalpriceComponent,
    ChildComponent,
    ProductlistComponent,
    ParentComponent,
    SwitchDirectiveComponent,
    SpliceExComponent,
    GradePipe,
    CustompipeComponent,
    CustompipeFilterempComponent,
    FilterempPipe,
    ServerCommDemoComponent,
    ServerCommComponent,
    ServerCommCRUDComponent,
    ServerCommCrudServicesComponent,
    ModeldrivenformComponent,
    AttibutecustdirDirective,
    AttibutecustdircompComponent,
    StructuralcustdirDirective,
    AboutusComponent,
    EmpdeptsComponent,
    HomeComponent,
    LloginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass: CustomHttpInterceptorService, multi:true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
