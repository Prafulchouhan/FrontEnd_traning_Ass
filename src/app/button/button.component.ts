import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(private x:TableComponent) { }

  ngOnInit(): void {
  }
  clickme(){
    // this.x.fun();
    // alert(this.x.abc);
  }

}
