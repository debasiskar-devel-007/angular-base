import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from "./test/test.component";
import {TestCalenderComponent} from "./test-calender/test-calender.component";

/* Category Management */
import { AddEditCategoryComponent } from './category-management/add-edit-category/add-edit-category.component';
import { ListCategoryComponent } from './category-management/list-category/list-category.component';

const routes: Routes = [
  { path: "", component: TestComponent},
  { path: "test", component: TestComponent},
  { path: "testCalender", component: TestCalenderComponent},
  { path: "category-management/list", component: ListCategoryComponent},
  { path: "category-management/add", component: AddEditCategoryComponent},
  { path: "category-management/edit/:id", component: AddEditCategoryComponent},

  /* Category Management */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
