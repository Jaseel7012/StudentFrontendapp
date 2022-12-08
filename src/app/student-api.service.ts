import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentApiService {

  
  constructor(private http:HttpClient) { }
  fetchdata=()=>{
    return this.http.get("http://localhost:8080/view")
  }
  adddata=(data:any)=>{
    return this.http.post("http://localhost:8080/add",data)
  }
  searchdata=(data:any)=>{
    return this.http.post("http://localhost:8080/search",data)
  }
}
