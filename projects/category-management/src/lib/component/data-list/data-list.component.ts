import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'lib-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  public categoryData: any;
  @Input()
  set data(receivedCategoryData: any) {
    this.categoryData = receivedCategoryData;
    console.log(this.categoryData);
  }

  constructor() { }

  ngOnInit() {
  }

}
