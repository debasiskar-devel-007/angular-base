import { NgModule } from '@angular/core';
import { CalendarManagementComponent } from './calendar-management.component';
import {DemoMaterialModule} from '../material-module';

@NgModule({
  declarations: [CalendarManagementComponent],
  imports: [
    DemoMaterialModule,
  ],
  exports: [CalendarManagementComponent]
})
export class CalendarManagementModule { }
