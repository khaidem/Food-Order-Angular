import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Food[]{
    return[
     
    {
      id:1,
      name:'Piza',
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
      name:'Ceramic Plate',
      cookTime:'10-20',
      price: 200,
      favorite:false,
      origin: ['Africa'],
      star: 3.5,
      imageUrl: '/assets/food2.jpg',
      tags: ['FastFoods','Pizza','Launch']

    },
    {
      id:3,
      name:'Socha',
      cookTime:'10-20',
      price: 10,
      favorite:false,
      origin: ['Europe'],
      star: 2.5,
      imageUrl: '/assets/food3.jpg',
      tags: ['FastFoods','Pizza','Launch']

    },
    {
      id:4,
      name:'Funfaai',
      cookTime:'10-20',
      price: 10,
      favorite:false,
      origin: ['China'],
      star: 5,
      imageUrl: '/assets/food2.jpg',
      tags: ['FastFoods','Pizza','Launch']

    },
    {
      id:5,
      name:'Piza',
      cookTime:'10-20',
      price: 10,
      favorite:false,
      origin: ['Italy'],
      star: 4.5,
      imageUrl: '/assets/food5.jpg',
      tags: ['FastFoods','Pizza','Launch']

    },
    {
      id:6,
      name:'Piza',
      cookTime:'10-20',
      price: 10,
      favorite:false,
      origin: ['Italy'],
      star: 2.0,
      imageUrl: '/assets/food6.jpg',
      tags: ['FastFoods','Pizza','Launch']

    },
    {
      id:7,
      name:'Tranmautritam',
      cookTime:'10-20',
      price: 500,
      favorite:false,
      origin: ['India'],
      star: 2,
      imageUrl: '/assets/food8.jpg',
      tags: ['FastFoods','Pizza','Launch']

    },
    {
      id:8,
      name:'Sebastian Coman ',
      cookTime:'10-20',
      price: 50,
      favorite:false,
      origin: ['USA'],
      star: 3,
      imageUrl: '/assets/food9.jpg',
      tags: ['FastFoods','Pizza','Launch']

    },
    {
      id:9,
      name:'Mona Sabha  ',
      cookTime:'10-20',
      price: 1000,
      favorite:false,
      origin: ['UK'],
      star: 4,
      imageUrl: '/assets/food11.jpg',
      tags: ['FastFoods','Pizza','Launch']

    },
    {
      id:10,
      name:'Pastries on Plate  ',
      cookTime:'10-20',
      price: 300,
      favorite:false,
      origin: ['Japan'],
      star: 3.5,
      imageUrl: '/assets/food12.jpg',
      tags: ['FastFoods','Pizza','Launch']

    },
   



    ]
  }
}
