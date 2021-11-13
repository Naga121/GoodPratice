import { Component, OnInit } from '@angular/core';

interface User{
 
  name:string;
  email:string;
  password:string
  role:string;
  message:string;
  tc:boolean;
}

@Component({
  selector: 'app-form-binding',
  templateUrl: './form-binding.component.html',
  styleUrls: ['./form-binding.component.css']
})
export class FormBindingComponent implements OnInit {

  public user:User={
    name:'',
    email:'',
    password:'',
    role:'',
    message:'',
    tc:false
  };
  constructor() { }

  ngOnInit(): void {
  }

  public onSubRegister():void{
    console.log(this.user)
  }

}
