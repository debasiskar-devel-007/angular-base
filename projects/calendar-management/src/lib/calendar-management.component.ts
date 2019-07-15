import { Component, OnInit, Inject } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string ;
}

@Component({
  selector: 'lib-calendar-management',
  templateUrl: 'calendar-management.component.html',
  styleUrls: ['style.css']
})
export class CalendarManagementComponent implements OnInit {
  cols: number=1;
  rows: number=1;
  public slotlist:any= [];
  animal: string='jhcksjhkh';


  constructor(public dialog: MatDialog) {
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
  gotoAvailability() {
    const dialogRef = this.dialog.open(AddAvailabilityComponent, {
      width: '250px',
      data: { animal: this.animal}
    });
  }

}
@Component({
  selector: 'lib-add-availability',
  templateUrl: 'add-availability.component.html',
  styleUrls: ['style.css']
})
export class AddAvailabilityComponent {

  constructor( public dialogRef: MatDialogRef<AddAvailabilityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
 
  onNoClick(): void {
    this.dialogRef.close();
  }

}
