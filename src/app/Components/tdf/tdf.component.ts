import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/ModelsClass/user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  topics:any=["Angular","React","Java"]
  user=new User("","","","","",false);
  timings:any=["10:00 AM","1:00 PM","4:00 PM"];
  constructor() { }

  ngOnInit(): void {
  }

}
