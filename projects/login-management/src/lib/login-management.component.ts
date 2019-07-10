import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-login-management',
  template: `
    <p>
      login-management works!
    </p>
    <button mat-fab color="primary">Primary</button>
  `,
  styles: []
})
export class LoginManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
