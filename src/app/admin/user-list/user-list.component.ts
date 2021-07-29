import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  dataList:any=[];
  constructor(private apiService:ApiServiceService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.apiService.getUser().subscribe((data:any)=>{
     console.log('data',data);
     this.dataList=data;
    },
    (e)=>{
      console.log('eeeee', e);
    });
  }

  deleteUsers(id){
    console.log(id);
    //this.apiService.

  }
}
