import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'lib-data-add-edit',
  templateUrl: './data-add-edit.component.html',
  styleUrls: ['./data-add-edit.component.css']
})

export class DataAddEditComponent implements OnInit {

  categoryCreateForm: FormGroup;
  categoryCreateFormSubmited = false;
  usersData: any = null;

  public categoryData: any;
  @Input()
  set data(receivedCategoryData: any) {
    this.categoryData = receivedCategoryData;
    console.log(this.categoryData);
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    /* Category create form validation */
    this.categoryCreateForm = this.formBuilder.group({
      title:        [ null, [ Validators.required, Validators.maxLength(150) ] ],
      description:  [ null, [ Validators.required, Validators.maxLength(1000) ] ],
      priority:     [ null, [ Validators.required, Validators.max(100) ] ],
    });
  }

  get categoryCreateFormValidate() { return this.categoryCreateForm.controls; }

  categoryCreateFormSubmit() {
    this.categoryCreateFormSubmited = true;

    /* stop here if form is invalid */
    if (this.categoryCreateForm.invalid) {
      return;
    }

    /* start process to submited data */
    let postData: any = this.categoryCreateForm.value;
    console.log(postData);
  }

  /* reset Category create form */
  resetLoginForm() {
    this.categoryCreateForm.reset();
  }

}
