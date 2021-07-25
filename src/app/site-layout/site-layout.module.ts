import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SharedModule } from './../shared-module/shared-module.module';

@NgModule({
  declarations: [AdminLayoutComponent],
  imports: [
    SharedModule
  ],
  exports: [AdminLayoutComponent],
})
export class SiteLayoutModule { }
