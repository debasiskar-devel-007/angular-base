import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-calendar-management',
  template: `
    <p>
      calendar-management works!
    </p>
    <mat-checkbox>Check me!</mat-checkbox>
  `,
  styles: []
})
export class CalendarManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
