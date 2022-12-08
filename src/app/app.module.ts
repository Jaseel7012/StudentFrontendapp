import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { SearchComponent } from './search/search.component';

const myroute:Routes=[
  {
    path:'',
    component:StudentAddComponent
    
  },{
    path:'view',
    component:ViewStudentComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    StudentAddComponent,
    ViewStudentComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
