import {Component, OnInit, ViewChild, Input, Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-login-management',
  template: `
    <form [formGroup]="myForm" (ngSubmit)="loginSubmit()">
  <span *ngFor="let item of data_val">
     <mat-form-field class="form-group">
        <input matInput placeholder="{{item.placeholder}}" type="{{item.type}}" formControlName="{{item.name}}">
      </mat-form-field>
      <br>
</span>
   <button mat-raised-button color="primary">Primary</button>
</form>
  `,
  styles: []
})

export class LoginManagementComponent implements OnInit {
  public data_val: any;
  public myForm: any;
  @Input()
  set data(data: any) {
    this.data_val = data;
    console.log('this.data_val');
    console.log(this.data_val);
  }
  constructor(public fb: FormBuilder) {
   this.myForm = this.fb.group({
   username: new FormControl('', Validators.minLength(2)),
   password: new FormControl('',Validators.required),

    })
  }

  ngOnInit() {
  }
  loginSubmit() {
    console.log(this.myForm.value);
  }

}
