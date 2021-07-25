import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    RouterModule,
    CommonModule,
    FormsModule,
  ]
})
export class SharedModule { }
