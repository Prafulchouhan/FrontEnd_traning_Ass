import { Component, OnInit } from '@angular/core';
import { UserdataService } from "/Users/prafulchouhan/AngularPro1/Ass2/src/app/service/userdata.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  users:any;
  constructor(private userdata:UserdataService) {
      this.userdata.users().subscribe((data)=>{
        // console.warn("data",data);
        this.users=data;
        // this.userdata.users();
      })
  }
  ngOnInit(): void {
  }

}
