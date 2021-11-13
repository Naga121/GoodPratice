import { Component, OnInit } from '@angular/core';

interface Product{
  name:string;
  price:number;
  qty:number;
  img:string;
  inStock:boolean
}
@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  public isLogin:boolean=false;

  public products: Product[] = [
    { name: 'mobile', price: 100, qty: 2, img: 'assets/electronics/e1.png', inStock:true  },
    { name: 'mobile', price: 200, qty: 2, img: 'assets/electronics/e2.jpg', inStock:false  },
    { name: 'mobile', price: 300, qty: 2, img: 'assets/electronics/e3.png', inStock:true },
    { name: 'mobile', price: 400, qty: 2, img: 'assets/electronics/e4.jpg', inStock:false  },

  ];
  constructor() { }

  ngOnInit(): void {
  }

  public logIn():void{
    this.isLogin=true;
  }
  public logOut():void{
    this.isLogin=false;
  }

}
