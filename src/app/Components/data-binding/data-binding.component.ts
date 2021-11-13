import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public userName:string='';
  public message:string='';

  public maxCharCount:number=200;

  public inputType="password";

  public amount:any='';

  public darkTheme:boolean=false;


  constructor() { }

  ngOnInit(): void {
  }

  public upDate(obj:any):void{
    this.userName=obj.target.value; 
  }

  public showPassword(obj:any):void{
    obj.target.checked?this.inputType="text":this.inputType="password";
  }

}
