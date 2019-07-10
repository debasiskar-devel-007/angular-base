import { NgModule } from '@angular/core';
import { LoginManagementComponent } from './login-management.component';
import {DemoMaterialModule} from '../material-module';

@NgModule({
  declarations: [LoginManagementComponent],
  imports: [
    DemoMaterialModule,
  ],
  exports: [LoginManagementComponent]
})
export class LoginManagementModule { }
