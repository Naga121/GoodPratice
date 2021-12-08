import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-event-product',
  templateUrl: './custom-event-product.component.html',
  styleUrls: ['./custom-event-product.component.css']
})
export class CustomEventProductComponent implements OnInit {

  products:any=[];
  allCount=0;
  electronics=0;
  jewelery=0;
  mens=0;
  womens=0;

  constructor() { }

  ngOnInit(): void {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
      this.products=data;
      this.allCount=this.products.length;
      this.electronics=this.products.filter((product:any)=>product.category=='electronics').length;
      this.jewelery=this.products.filter((product:any)=>product.category=='jewelery').length;
      this.mens=this.products.filter((product:any)=>product.category=='mens').length;
      this.womens=this.products.filter((product:any)=>product.category=='womens').length;
    });
  }

  selectCategory='All';
  filterChange(obj:any){
    this.selectCategory=obj;
  }

}
