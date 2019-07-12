import { NgModule } from '@angular/core';
import { CalendarManagementComponent, AddAvailabilityComponent } from './calendar-management.component';
import {DemoMaterialModule} from '../material-module';
import { AddAvailabilityFormComponent } from './add-availability-form/add-availability-form.component';
	
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CalendarManagementComponent,
     AddAvailabilityComponent,
     AddAvailabilityFormComponent
    ],
  imports: [
    DemoMaterialModule,
    ReactiveFormsModule
  ],
  exports: [CalendarManagementComponent,AddAvailabilityFormComponent],
  entryComponents:[AddAvailabilityComponent]
})
export class CalendarManagementModule { }
