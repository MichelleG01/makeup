import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  IonicModule } from '@ionic/angular';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    ReactiveFormsModule
  ]
})

export class ComponentsModule { }