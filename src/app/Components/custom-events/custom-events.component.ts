import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-custom-events',
  templateUrl: './custom-events.component.html',
  styleUrls: ['./custom-events.component.css']
})
export class CustomEventsComponent implements OnInit {

  categories:any=[];
  @Input() allCount=0;
  @Input() electronics=0;
  @Input() jewelery=0;
  @Input() mens=0;
  @Input() womens=0;
  selectCategoryName='All';
  constructor() { }
 

  @Output() filter:EventEmitter<string>=new EventEmitter<string>(); 

  ngOnInit(): void {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then(res=>res.json())
      .then(data=>{
        data.unshift('All');
        this.categories=data
        console.log(data);
    });
  }

  categoryClicked(obj:any){
    this.selectCategoryName=obj.target.name;
    this.filter.emit(this.selectCategoryName)
  }

  onChangeCategory(){
    this.filter.emit(this.selectCategoryName);
  }

}
