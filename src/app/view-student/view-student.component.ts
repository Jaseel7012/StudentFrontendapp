import { Component } from '@angular/core';
import { ApiStudentService } from '../api-student.service';
import { StudentApiService } from '../student-api.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {
constructor(private api:StudentApiService){
  this.api.fetchdata().subscribe(
    (response)=>{
      this.data=response;
      
    }
    
  )
  
  
}
data:any=[]
}
