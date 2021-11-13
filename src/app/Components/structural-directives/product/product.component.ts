import { Component, Input, OnInit } from '@angular/core';

interface Product {
  name: string;
  price: number;
  qty: number;
  img: string;
  inStock: boolean
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() item:Product|undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
