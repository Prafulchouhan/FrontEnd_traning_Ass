import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cur1="";
  cur2="";
  Output=0;
  val:number=0;
  fun(){
    if(this.cur1==this.cur2)alert("Both the selected currency are equal");
    else if(this.cur1=='INR' && this.cur2=='USD'){
      this.Output=this.val*0.012;
    }
    else if(this.cur1=='INR' && this.cur2=='JPY'){
      this.Output=this.val*1.76;
    }
    else if(this.cur1=='INR' && this.cur2=='AUD'){
      this.Output=this.val*0.019;
    }
    else if(this.cur1=='INR' && this.cur2=='ZAR'){
      this.Output=this.val*0.22;
    }
    else if(this.cur1=='USD' && this.cur2=='INR'){
      this.Output=this.val/0.012;
    }
    else if(this.cur1=='USD' && this.cur2=='JPY'){
      this.Output=this.val*143.38;
    }
    else if(this.cur1=='USD' && this.cur2=='AUD'){
      this.Output=this.val*17.93;
    }
    else if(this.cur1=='JPY' && this.cur2=='INR'){
      this.Output=this.val*0.57;
    }
    else if(this.cur1=='JPY' && this.cur2=='USD'){
      this.Output=this.val*0.0070;
    }
    else if(this.cur1=='JPY' && this.cur2=='ZAR'){
      this.Output=this.val*0.13;
    }
    else if(this.cur1=='JPY' && this.cur2=='AUD'){
      this.Output=this.val*0.011;
    }
    else if(this.cur1=='ZAR' && this.cur2=='USD'){
      this.Output=this.val*0.056;
    }
    else if(this.cur1=='ZAR' && this.cur2=='INR'){
      this.Output=this.val*4.53;
    }
    else if(this.cur1=='ZAR' && this.cur2=='JPY'){
      this.Output=this.val*8.00;
    }
    else if(this.cur1=='ZAR' && this.cur2=='AUD'){
      this.Output=this.val*0.085;
    }
    else if(this.cur1=='AUD' && this.cur2=='USD'){
      this.Output=this.val*0.65;
    }
    else if(this.cur1=='AUD' && this.cur2=='INR'){
      this.Output=this.val*53.21;
    }
    else if(this.cur1=='AUD' && this.cur2=='JPY'){
      this.Output=this.val*93.54;
    }
    else if(this.cur1=='AUD' && this.cur2=='ZAR'){
      this.Output=this.val*11.74;
    }
  }
  
}
