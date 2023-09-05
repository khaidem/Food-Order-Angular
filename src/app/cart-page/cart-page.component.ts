import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/card';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/models/CardItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit{
  cart!:Cart;
  constructor(private cartSerice:CartService){
    this.setCart();
  }
  ngOnInit(): void {
    
  }
  setCart(){
    this.cart = this.cartSerice.getCart();
  }
  removeFormCart(cartItem: CartItem){
    this.cartSerice.removeFormCart(cartItem.food.id)
    this.setCart();
  }
  changeQuantity(cartItem:CartItem , quantityInString:string){
    const quantity =parseInt(quantityInString);
    this.cartSerice.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

}
