import { Component } from '@angular/core';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {
  name=""
  rollno=""
  clg=""
  read=()=>{
    let data={
      "name":this.name,
      "rollno":this.rollno,
      "clg":this.clg
    }
    console.log(data);
  }


}
