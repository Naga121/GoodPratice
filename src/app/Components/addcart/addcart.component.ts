import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {

  categories:any[]=[];
  products:any[]=[];
  searchedProduct:any={};
  cartItems:any[]|null=[];
  count:number|undefined=0;
  isCartVisible:boolean=false


  constructor() { }

  // get Categories Method
  getCategories(){
    fetch('https://fakestoreapi.com/products/categories')
    .then(response=>response.json())
    .then(data=>{
      console.log(data);
      data.unshift('All');
      this.categories=data;
    });
  }

  // get Products Method
  getProducts(){
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      this.products=data
    });
  }

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  //Change Category Method 
  changeCategory(obj:any){
    if(obj.target.value == 'All'){
      this.getProducts();
      console.log(obj);
    }else{
      fetch(`https://fakestoreapi.com/products/category/${obj.target.value}`)
      .then(res=>res.json())
      .then(data=>{
        this.products=data;
        console.log(this.products);
      });
    }
  }
  //Change Product 
  changeProduct(obj:any){
  }

  // add CartItems
  addToCartItem(id:any){
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(data=>{
      this.searchedProduct=data;
      this.cartItems?.push(this.searchedProduct);
      this.count=this.cartItems?.length;
    });
    alert('Item Added to cart');
  }

  // toggleCart
  toggleCart(){
    this.isCartVisible=this.isCartVisible==false?true:false
  }

  // remove item
  removeItem(i:number){
    let flag=confirm(`Are you sure? want to delete `);
    if(flag==true){
      this.cartItems?.splice(i,1);
    }  
  }



}
