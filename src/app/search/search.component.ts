import { Component } from '@angular/core';
import { StudentApiService } from '../student-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  rollno=""
  search:any=[]
  constructor( private api:StudentApiService  ){}
  read=()=>{
    let data:any={
      "rollno":this.rollno
    }
    this.api.searchdata(data).subscribe(
      (resp)=>{
        console.log(resp)
        this.search=resp
      }
    )

  }

}
