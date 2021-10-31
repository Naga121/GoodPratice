import { Component, OnInit } from '@angular/core';

interface Product {
  sNo: number;
  name: string;
  img: string;
  qty: number;
  price: number;
  inStock: boolean

}

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  count: number = 0;

  msg: string = "Hello";

  public product: Product = {
    sNo: 121,
    name: 'Phone',
    img: 'assets/electronics/e1.png',
    qty: 2,
    price: 1500,
    inStock: true
  };

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.count = this.count + 1;
  }
  decrement() {
    this.count = this.count - 1 > 0 ? this.count - 1 : 0
  }

  sayGm() {
    this.msg = "Hello Sir Good Morning"
  }
  sayAft() {
    this.msg = "Hello Sir Good Aftrnoon"
  }
  sayGev() {
    this.msg = "Hello Sir Good Evening"
  }

  productIncrement() {
    this.product = {
      ...this.product,
      qty: this.product.qty + 1,
    };
  }
  productDecrement() {
    this.product = {
      ...this.product,
      qty: this.product.qty - 1 > 0 ? this.product.qty - 1 : 1,
    };
  }

}
