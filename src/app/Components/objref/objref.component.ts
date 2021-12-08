import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objref',
  templateUrl: './objref.component.html',
  styleUrls: ['./objref.component.css']
})
export class ObjrefComponent implements OnInit {

  public OnTextEffect=false
  public OnBordEffect=false
  public OnBackgroundEffect=false

  public textEven:number=0;
  public applyErrorStyle:boolean=false;
  public applyValidStyle:boolean=false;
  public OnBlur(){
    if(this.textEven%2==0){
      this.applyValidStyle=true;
      this.applyErrorStyle=false;
    }else{
      this.applyValidStyle=false;
      this.applyErrorStyle=true;
    }
  }


  

  constructor() { }

  ngOnInit(): void {
  }

}
