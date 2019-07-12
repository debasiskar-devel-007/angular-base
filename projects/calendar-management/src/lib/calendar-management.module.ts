import { NgModule } from '@angular/core';
import { CalendarManagementComponent, AddAvailabilityComponent } from './calendar-management.component';
import {DemoMaterialModule} from '../material-module';
import { AddAvailabilityDirective } from './add-availability.directive';

@NgModule({
  declarations: [
    CalendarManagementComponent,
     AddAvailabilityComponent,
     AddAvailabilityDirective,
    ],
  imports: [
    DemoMaterialModule,
  ],
  exports: [CalendarManagementComponent],
  entryComponents:[AddAvailabilityComponent]
})
export class CalendarManagementModule { }
