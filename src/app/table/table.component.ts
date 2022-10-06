import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserdataService } from '../service/userdata.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() userdata:any;
  @Output() event=new EventEmitter<object>();
  // userdata:any;
  abc="hi";
  constructor(private user:UserdataService) { }

  ngOnInit(): void {
    this.user.getdata().subscribe((data)=>{
      this.userdata=data;
    })
    this.sendMessage();
  }
  
  sendMessage(){
    setTimeout(()=>{
      this.event.emit(this.userdata);
    },4000)
  }
}
