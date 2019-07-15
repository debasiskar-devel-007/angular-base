import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddAvailabilityComponent} from "./lib/add-availability/add-availability.component";

const routes: Routes = [
  { path: "add-availability", component: AddAvailabilityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
