import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ass3';
  data:any;
  fun($event:any){
    this.data=$event;
  }
  sort1(){
    let x = this.data.sort((a:any, b:any) => 0 - (a.age > b.age ? -1 : 1));
    this.data=x;
  }
  sort2(){
    let x = this.data.sort((a:any, b:any) => 0 - (a.name > b.name ? -1 : 1));
    this.data=x;
  }

}
