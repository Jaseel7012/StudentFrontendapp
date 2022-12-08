import { Component } from '@angular/core';
import { ApiStudentService } from '../api-student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {
constructor(private api:ApiStudentService){
  this.api.fetchdata().subscribe(
    (response)=>{
      this.data=response;
      
    }
    
  )
  
  
}
data:any=[]
}
