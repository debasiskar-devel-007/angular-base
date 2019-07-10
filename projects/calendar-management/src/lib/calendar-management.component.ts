import { Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'lib-calendar-management',
  template: `
  
  <mat-card >
  <mat-toolbar color="primary">
  <h2 class="headerSpan">Manage Availability</h2>
</mat-toolbar>
<mat-card-content class="gridListWrapper">
<mat-grid-list cols="2" rowHeight="10px">
<mat-grid-tile [colspan]="cols" [rowspan]="rows">1</mat-grid-tile>
<mat-grid-tile [colspan]="cols" [rowspan]="rows">2</mat-grid-tile>
</mat-grid-list>
</mat-card-content>
<mat-toolbar class="buttonsetToolbar" >
<button class="singleButton" mat-raised-button color="primary"> Sync with Google Calendar </button>
<button class="singleButton" mat-raised-button color="primary"> Add or update calendar settings </button>
<button class="singleButton" mat-raised-button color="primary"> Slot View </button> 
<button class="singleButton" mat-raised-button color="primary"> Add Event </button> 
</mat-toolbar>

</mat-card>
  `,
  styleUrls: ['style.css']
})
export class CalendarManagementComponent implements OnInit {
  cols: number=1;
  rows: number=1;
  public slotlist:any= [];

  constructor() {
    this.slotlist= [
      {
      "id": 1,
      "description": "Test Event 1",
      "end_date": "2019-07-19",
      "end_time": "14:00",
      "meetingwith": "Meeting with T",
      "start_date": "2019-07-01",
      "start_time": "10:00",
      "timespan": "30",
      "timezone": "-08:00|America/Los_Angeles",
      "userid": "5c9b05bed69f4b52413626cf"
      },
      {
      "id": 2,
      "description": "Test Event 2",
      "end_date": "2019-07-20",
      "end_time": "14:00",
      "meetingwith": "Meeting with T",
      "start_date": "2019-07-08",
      "start_time": "10:00",
      "timespan": "60",
      "timezone": "-07:00|America/Los_Angeles",
      "userid": "5c9b05bed69f4b52413626cf"
      },
      {
      "id": 3,
      "description": "Test Event 3",
      "end_date": "2019-08-01",
      "end_time": "14:00",
      "meetingwith": "Meeting with T",
      "start_date": "2019-07-05",
      "start_time": "10:00",
      "timespan": "60",
      "timezone": "-07:00|America/Los_Angeles",
      "userid": "5c9b05bed69f4b52413626cf"
      }
      ]
   }

  ngOnInit() {
  }

}
