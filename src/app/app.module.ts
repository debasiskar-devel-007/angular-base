import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarManagementModule } from '../../projects/calendar-management/src/lib/calendar-management.module';
import { from } from 'rxjs';
import { LoginManagementModule } from 'projects/login-management/src/lib/login-management.module';
import { TestComponent } from './test/test.component';
import { TestCalenderComponent } from './test-calender/test-calender.component';
import { ManageAvailabilityComponent } from './manage-availability/manage-availability.component';
// import {AddAvailabilityFormComponent} from '../../projects/calendar-management/src/lib/add-availability-form/add-availability-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestCalenderComponent,
    ManageAvailabilityComponent,
    // AddAvailabilityFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    CalendarManagementModule,
    LoginManagementModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
