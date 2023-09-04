import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number): Food{
    return this.getAll().find(food => food.id ==id)!
  }
  getAllFoodByTag(tag:string):Food[]{
    return tag == 'All' ?
    this.getAll() : this.getAll().filter(food => food.tags?.includes(tag))
   
  }
  getAllTag (): Tag[]{
  return [
    {name: 'All', count: 14},
    {name: 'FastFood', count: 4},
    {name: 'Pizza',count: 2},
    {name: 'Lunch', count: 3},
    {name: 'SlowFood', count : 2},
    {name:'Hamburger', count:1},
    {name: 'Fry', count:1},
    {name: 'soup', count:1}
  ]
  }
  getAll():Food[]{
    return[
     
    {
      id:1,
      name:'Piza Pepperoni',
      cookTime:'10-20',
      price: 10,
      favorite:false,
      origin: ['Italy'],
      star: 4.5,
      imageUrl: '/assets/food1.jpg',
      tags: ['FastFoods','Pizza','Launch']

    },
    {
      id:2,
      name:'Meatball',
      cookTime:'10-20',
      price: 200,
      favorite:false,
      origin: ['persie','middle east'],
      star: 3.5,
      imageUrl: '/assets/food2.jpg',
      tags: ['SlowFood', 'Lunch']

    },
    {
      id:3,
      name:'Hamburger',
      cookTime:'10-20',
      price: 10,
      favorite:false,
      origin: ['Europe'],
      star: 2.5,
      imageUrl: '/assets/food3.jpg',
      tags: ['FastFoods','Hamburger']

    },
    {
      id:4,
      name:'Fried Potatoes',
      cookTime:'10-20',
      price: 10,
      favorite:false,
      origin: ['Belgium ', 'France'],
      star: 5,
      imageUrl: '/assets/food2.jpg',
      tags: ['FastFood','Fry',]

    },
    {
      id:5,
      name:'Chiecken Soup',
      cookTime:'10-20',
      price: 10,
      favorite:false,
      origin: ['India', 'asia'],
      star: 4.5,
      imageUrl: '/assets/food5.jpg',
      tags: ['SlowFood', 'soup']

    },
    {
      id:6,
      name:'Vegetable Pizza',
      cookTime:'10-20',
      price: 10,
      favorite:false,
      origin: ['Italy'],
      star: 2.0,
      imageUrl: '/assets/food6.jpg',
      tags: ['FastFood','Pizza','Launch']

    },
    {
      id:7,
      name:'Vegetable spicy Pizza',
      cookTime:'10-20',
      price: 10,
      favorite:false,
      origin: ['India'],
      star: 2,
      imageUrl: '/assets/food8.jpg',
      tags: ['FastFood','Pizza','Launch']

    },
    {
      id:8,
      name:'Vegetable burger',
      cookTime:'10-20',
      price: 50,
      favorite:false,
      origin: ['India'],
      star: 3,
      imageUrl: '/assets/food9.jpg',
      tags: ['FastFood','Pizza','Launch']

    },
    
   



    ]
  }
}
