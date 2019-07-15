import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Angular Meterial */
import { MaterialModule } from './Module/material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarManagementModule } from '../../projects/calendar-management/src/lib/calendar-management.module'
import { from } from 'rxjs';
import { LoginManagementModule } from 'projects/login-management/src/lib/login-management.module';
import { TestComponent } from './test/test.component';
import { TestCalenderComponent } from './test-calender/test-calender.component';

/* Category Component */
import { AddEditCategoryComponent } from './category-management/add-edit-category/add-edit-category.component';
import { ListCategoryComponent } from './category-management/list-category/list-category.component';

/* Category Management library */
import { CategoryManagementModule } from '../../projects/category-management/src/lib/category-management.module';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestCalenderComponent,

    /* Category Component */
    AddEditCategoryComponent,
    ListCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    CalendarManagementModule,
    LoginManagementModule,

    MaterialModule,

    /* Category Management library */
    CategoryManagementModule,
    // DataAddEditComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
