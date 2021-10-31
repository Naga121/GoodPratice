import { Component, OnInit } from '@angular/core';

interface Product {
  sNo: string;
  name: string;
  img: string;
  qty: number;
  price: number;
  inStock: boolean

}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  products: Product[] = [
    { sNo: 'AA1', name: 'mobile', price: 100, qty: 2, img: 'assets/electronics/e1.png', inStock: true },
    { sNo: 'AA2', name: 'mobile', price: 200, qty: 2, img: 'assets/electronics/e2.jpg', inStock: false },
    { sNo: 'AA3', name: 'mobile', price: 300, qty: 2, img: 'assets/electronics/e3.png', inStock: true },
    { sNo: 'AA4', name: 'mobile', price: 400, qty: 2, img: 'assets/electronics/e4.jpg', inStock: false },

  ];

  constructor() { }

  ngOnInit(): void {
  }

  public qtyInceament(id: any) {
    this.products = this.products.map((product: Product) => {
      if (product.sNo === id) {
        return {
          ...product,
          qty: product.qty + 1,
        }
      }
        return product
    });
  }
  public qtyDeceament(id: any) {
    this.products = this.products.map((product: Product) => {
      if(product.sNo===id){
        return {
          ...product,
          qty:product.qty-1>0?product.qty-1:1
        }
      }
        return product
    });
  }

  grandTotal(){
    let totla:number=0;
    for(let product of this.products){
      totla+=(product.qty*product.price)
    }
    return totla
  }

}


