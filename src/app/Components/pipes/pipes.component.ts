import { Component, OnInit } from '@angular/core';

interface Empolyee {
  sNo: string;
  name: string
  age: number;
  designation: string;
  doj: Date;
  sal: number
}
@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public employee: Empolyee = {
    sNo: 'aa1',
    name:'nagaraju',
    age: 25,
    designation: 'deveps',
    doj: new Date(),
    sal: 20.20
  }
  constructor() { }

  ngOnInit(): void {
  }

}
