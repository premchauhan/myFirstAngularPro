import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  name='prem';
  email='chauhanprem758@gmail.com';
  mobile='9412122194';
  gender="1";
  education=['bca','bba'];
  password='12345';

  //apiUrl:'https://jsonplaceholder.typicode.com/users';
  constructor(private apiService:ApiServiceService) { }

  ngOnInit(): void {
  }

  isChecked(name){
    let isTrue = this.education.includes(name)   // Returns true
    console.log(isTrue)
    return isTrue;
  }
 
  register(){
    let payload ={
      name:this.name,
      email:this.email,
      mobile:this.mobile,
      gender:this.gender,
      education:this.education,
      password:this.password
    }
    console.log(payload);
    this.apiService.saveUser(payload).subscribe((res:any)=>{
      console.log("==",res);
    });
  }

}
