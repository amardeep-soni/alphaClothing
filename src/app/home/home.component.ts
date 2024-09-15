import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: Product[] = [
    {
      image: 'https://i.pinimg.com/564x/62/27/19/62271966ee39ef849fa499a5620516a3.jpg',
      name: 'Casual T-Shirt',
      newPrice: 19.99,
      oldPrice: 0,
      category: 'Clothing',
      rating: 4,
      totalUserRated: 2000
    },
    {
      image: 'https://assets.gqindia.com/photos/64f87619a950de2459eeb4d4/16:9/w_1920,c_limit/Shah-Rukh-Khan%E2%80%99s-iconic-shirt-from-%E2%80%98Pathaan%E2%80%99-can-be-yours-at-this-affordable-price_001.jpg',
      name: 'Shirt',
      newPrice: 49.99,
      oldPrice: 69.99,
      category: 'Clothing',
      rating: 2.4,
      totalUserRated: 500
    },
    {
      image: 'https://e0.pxfuel.com/wallpapers/67/960/desktop-wallpaper-kgf-hero-rocky-bhai.jpg',
      name: 'Leather Jacket',
      newPrice: 149.99,
      oldPrice: 199.99,
      category: 'Clothing',
      rating: 5,
      totalUserRated: 4000
    },
    {
      image: 'https://images.news18.com/ibnlive/uploads/2023/07/324701978_1386965885429372_493005967462813935_n.jpg',
      name: 'Saree',
      newPrice: 39.99,
      oldPrice: 59.99,
      category: 'Clothing',
      rating: 3.4,
      totalUserRated: 5500
    }
  ];

  constructor(private router: Router) { }
  
  getStars(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.1;
    const stars = Array(fullStars).fill('fa-solid fa-star'); // Full stars
    if (hasHalfStar) {
      stars.push('fa-solid fa-star-half-alt'); // Half star
    }
    const emptyStars = 5 - stars.length;
    stars.push(...Array(emptyStars).fill('fa-regular fa-star')); // Empty stars
    return stars;
  }
  productDetails(id: number) {
    this.router.navigate(['/products', id]);
  }
}
