import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DefaultComponent } from './default/default.component';
import { AdminLayoutComponent } from './site-layout/admin-layout/admin-layout.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
   //{ path: 'admin',   redirectTo: '/admin/login', pathMatch: 'full' },
  {
    component: AdminLayoutComponent,
    path:'admin', loadChildren:()=>import('./admin/admin.module')
    .then(mod=>mod.AdminModule)
  },
  
  {
    path:'**',
    component:DefaultComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
