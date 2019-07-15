import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  data: any =[
    {
      name:'username',id:'username',placeholder:'username',type:'text'
    },
    {
      name:'password',id:'password',placeholder:'Password',type:'password'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
