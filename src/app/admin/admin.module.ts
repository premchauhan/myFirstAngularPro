import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [LoginComponent, LogoutComponent, AddUserComponent, UserListComponent],
  imports: [
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
    
  ]
})
export class AdminModule { }
