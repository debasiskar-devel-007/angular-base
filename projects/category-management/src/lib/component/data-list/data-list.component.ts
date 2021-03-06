import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CategoryManagementService } from '../../category-management.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  public categoryData: any;
  public categoryListingConfig: any;

  @Input()
  set config(receivedCategoryData: any) {
    this.categoryListingConfig = receivedCategoryData;
    this.getCategoryData();
  }

  constructor(private httpRequest: CategoryManagementService, private router: Router) { }

  ngOnInit() {
  }

  /* Category form submit */
  getCategoryData() {
    /* start process to submited data */
    let postData: any = { "source": "category", "condition": {}, "token": this.categoryListingConfig.jwtToken };
    let endPoint: any = this.categoryListingConfig.apiUrl + this.categoryListingConfig.listEndPoint;
    this.httpRequest.submitRequest(endPoint, postData, 'post').subscribe((response) => {
      console.log(response);
      this.categoryData = response.res;
    }, (error) => {
      console.log("Some error occord. Please try angain.");
    });
  }

  addNewCategory() {
    this.router.navigate(['/category-management/add']);
  }

}
