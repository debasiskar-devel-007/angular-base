import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from "./test/test.component";
import {TestCalenderComponent} from "./test-calender/test-calender.component";
import {ManageAvailabilityComponent} from "./manage-availability/manage-availability.component";

const routes: Routes = [
  { path: "", component: TestComponent},
  { path: "test", component: TestComponent},
  { path: "testCalender", component: TestCalenderComponent},
  { path: "manage-availability", component: ManageAvailabilityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
