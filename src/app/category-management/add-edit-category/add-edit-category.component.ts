import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.css']
})
export class AddEditCategoryComponent implements OnInit {

  /* Config for add and edit start */
  public configAddEdit: any = {
    action: "add",
    apiUrl: "http://166.62.39.137:5001/",
    userData: { id: "test-123", name: "Admin" },
    formConfig: { 
                  endpoint: "addorupdatedata",
                  methord: "post",
                  data: { 
                          source: "category",
                          condition: {},
                          extraField: {}
                        }
                },
    dataListConfig: { 
                      endpoint: "datalist",
                      methord: "post",
                      data: { 
                              source: "category",
                              condition: {},
                              extraField: {}
                            }
                    },
    authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NjM2MDI0NDQsImlhdCI6MTU2MzUxNjA0NH0.A17nQp8mAt9wT0q5oV97nVKRR_SgbVmdBC4CNQlGpo8",
    callBack: "category-management",
    buttonText: "Create"
  }
  /* Config for add and edit end */

  constructor(private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      if(params.id) {
        this.editConfig(params.id);
      }
    });
  }

  editConfig(objectId) {
    /* start process to submited data */
    this.configAddEdit.action = "edit";
    this.configAddEdit.formConfig.data.extraField = { "id": objectId };
    this.configAddEdit.dataListConfig.condition = { "_id": objectId };
    this.configAddEdit.buttonText = "Update";
  }

}
