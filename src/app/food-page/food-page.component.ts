import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent  implements OnInit{

  food!:Food;
  constructor(private activateRoute:ActivatedRoute, private foodSerice:FoodService, private cartService:CartService
    ,private router:Router
    ){
    activateRoute.params.subscribe((params)=>{
      if(params['id'])
      this.food = foodSerice.getFoodById(params['id'])
    })
  }
  ngOnInit(): void {
    
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
}
