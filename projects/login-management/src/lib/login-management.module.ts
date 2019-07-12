import { NgModule } from '@angular/core';
import { LoginManagementComponent } from './login-management.component';
import {DemoMaterialModule} from '../material-module';
import { CommonModule } from "@angular/common";
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [LoginManagementComponent, ForgetPasswordComponent],
  imports: [
    DemoMaterialModule,
    CommonModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [LoginManagementComponent]
})
export class LoginManagementModule { }
