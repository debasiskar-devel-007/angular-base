import { Component, OnInit, Inject, Input } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router, ActivatedRoute, Params } from '@angular/router';

export interface DialogData {
  animal: string ;
}

@Component({
  selector: 'lib-calendar-management',
  templateUrl: 'calendar-management.component.html',
  styleUrls: ['style.css']
})
export class CalendarManagementComponent implements OnInit {
  ///for gridlist colspan and rowspan style
  cols: number=1;             
  rows: number=1;
  public slotlist:any= [];
  public addAvailURL:any='';      // url variable to fetch the add availability form page
  @Input()          //setting the add form url from project
  set addAvailData(addAvailurlval: any) {
    this.addAvailURL = (addAvailurlval) || '<no name set>';
    this.addAvailURL = addAvailurlval;
  }


  constructor(public dialog: MatDialog, public router:Router) {
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
  gotoAvailability() {              //for rendering the project in the add form
    this.router.navigateByUrl('/'+this.addAvailURL);
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
