import { Component } from '@angular/core';
import { ApiStudentService } from '../api-student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {
  name=""
  rollno=""
  clg=""
  constructor(private api:ApiStudentService){}
  read=()=>{
    let data={
      "name":this.name,
      "rollno":this.rollno,
      "clg":this.clg
    }
    this.api.adddata(data).subscribe(
      (response:any)=>{
        console.log(response)
      }
    )
    console.log(data);
  }
  


}
