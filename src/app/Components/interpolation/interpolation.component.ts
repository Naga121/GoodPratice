import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {


  public name:string="Nagaraju";

  public img='https://images.pexels.com/photos/3879160/pexels-photo-3879160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  
  public time:string=new Date().toLocaleTimeString();

  constructor() { 
    this.upDateTime();
  }

  ngOnInit(): void {
  }

  getDate(){
    return new Date().toLocaleDateString()
  }

  upDateTime(){
    setInterval(()=>{
      this.time=new Date().toLocaleTimeString()
    },1000)
  }

}
