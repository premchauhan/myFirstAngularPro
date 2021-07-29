import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
const routes: Routes = [
    {
      path: '',
      component: LoginComponent
    },
    {
      path:'login',
      component:LoginComponent
    },
    {
    path:'logout',
      component:LogoutComponent
    },
    {
      path:'add-user',
      component:AddUserComponent
    },
    {
      path:'add-user/:id',
      component:AddUserComponent
    },
    {
      path:'user-list',
      component:UserListComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
