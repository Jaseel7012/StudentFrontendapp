import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { NavbarappComponent } from './navbarapp/navbarapp.component';
import {HttpClientModule} from '@angular/common/http';

const myroute:Routes=[
  {
    path:'',
    component:StudentAddComponent
    
  },{
    path:'view',
    component:ViewStudentComponent
  },{
    path:'search',
    component:SearchComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    StudentAddComponent,
    ViewStudentComponent,
    SearchComponent,
    NavbarappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
