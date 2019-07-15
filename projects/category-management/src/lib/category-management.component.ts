import { Component, OnInit, ViewChild, Input, Inject,
        ComponentFactoryResolver, ComponentRef, Directive,
        ViewContainerRef } from '@angular/core';

@Component({
  selector: 'lib-category-management',
  templateUrl: 'category-management.component.html',
  styleUrls: ['style.css']
})

export class CategoryManagementComponent implements OnInit {

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
