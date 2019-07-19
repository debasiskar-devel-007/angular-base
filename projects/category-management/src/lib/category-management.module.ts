import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MaterialModule } from './Module/material-module';
import { CategoryManagementComponent } from './category-management.component';
import { DataListComponent } from './component/data-list/data-list.component';
import { DataAddEditComponent } from './component/data-add-edit/data-add-edit.component';

import { HttpClientModule } from '@angular/common/http';

import { ListingModule } from "listing-angular7";

@NgModule({
  declarations: [
    CategoryManagementComponent,
    DataListComponent,
    DataAddEditComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,

    ListingModule,
  ],
  exports: [
    CategoryManagementComponent,
    DataAddEditComponent
  ]
})
export class CategoryManagementModule { }
