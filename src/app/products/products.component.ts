import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { FilterApplied, Product } from '../interfaces';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule, MatInputModule, FormsModule, MatSelectModule, MatCheckboxModule, MatSliderModule, MatRadioModule, MatCardModule, MatPaginatorModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

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
      newPrice: 9.99,
      oldPrice: 199.99,
      category: 'Clothing',
      rating: 5,
      totalUserRated: 4000
    },
    {
      image: 'https://images.news18.com/ibnlive/uploads/2023/07/324701978_1386965885429372_493005967462813935_n.jpg',
      name: 'Saree',
      newPrice: 40.99,
      oldPrice: 59.99,
      category: 'Clothing',
      rating: 3.4,
      totalUserRated: 5500
    },
    // New unique products
    {
      image: 'https://www.example.com/product1.jpg',
      name: 'Winter Coat',
      newPrice: 89.99,
      oldPrice: 129.99,
      category: 'Clothing',
      rating: 4.5,
      totalUserRated: 1200
    },
    {
      image: 'https://www.example.com/product2.jpg',
      name: 'Running Shoes',
      newPrice: 59.99,
      oldPrice: 79.99,
      category: 'Footwear',
      rating: 4.2,
      totalUserRated: 800
    },
    {
      image: 'https://www.example.com/product3.jpg',
      name: 'Wristwatch',
      newPrice: 199.99,
      oldPrice: 299.99,
      category: 'Accessories',
      rating: 4.8,
      totalUserRated: 300
    },
    {
      image: 'https://www.example.com/product4.jpg',
      name: 'Leather Backpack',
      newPrice: 119.99,
      oldPrice: 159.99,
      category: 'Accessories',
      rating: 4.7,
      totalUserRated: 450
    },
    {
      image: 'https://www.example.com/product5.jpg',
      name: 'Formal Shoes',
      newPrice: 89.99,
      oldPrice: 119.99,
      category: 'Footwear',
      rating: 4.3,
      totalUserRated: 650
    },
    {
      image: 'https://www.example.com/product6.jpg',
      name: 'Denim Jeans',
      newPrice: 39.99,
      oldPrice: 59.99,
      category: 'Clothing',
      rating: 4.0,
      totalUserRated: 1700
    },
    {
      image: 'https://www.example.com/product7.jpg',
      name: 'Sunglasses',
      newPrice: 29.99,
      oldPrice: 39.99,
      category: 'Accessories',
      rating: 4.4,
      totalUserRated: 900
    },
    {
      image: 'https://www.example.com/product8.jpg',
      name: 'Winter Scarf',
      newPrice: 15.99,
      oldPrice: 24.99,
      category: 'Clothing',
      rating: 4.1,
      totalUserRated: 1100
    },
    {
      image: 'https://www.example.com/product9.jpg',
      name: 'Smartphone',
      newPrice: 699.99,
      oldPrice: 899.99,
      category: 'Electronics',
      rating: 4.6,
      totalUserRated: 2200
    },
    {
      image: 'https://www.example.com/product10.jpg',
      name: 'Bluetooth Speaker',
      newPrice: 49.99,
      oldPrice: 69.99,
      category: 'Electronics',
      rating: 4.3,
      totalUserRated: 1200
    },
    {
      image: 'https://www.example.com/product11.jpg',
      name: 'Digital Camera',
      newPrice: 499.99,
      oldPrice: 699.99,
      category: 'Electronics',
      rating: 4.5,
      totalUserRated: 700
    },
    {
      image: 'https://www.example.com/product12.jpg',
      name: 'Yoga Mat',
      newPrice: 24.99,
      oldPrice: 34.99,
      category: 'Sports',
      rating: 4.2,
      totalUserRated: 600
    },
    {
      image: 'https://www.example.com/product13.jpg',
      name: 'Fitness Tracker',
      newPrice: 89.99,
      oldPrice: 119.99,
      category: 'Sports',
      rating: 4.6,
      totalUserRated: 800
    },
    {
      image: 'https://www.example.com/product14.jpg',
      name: 'Travel Pillow',
      newPrice: 19.99,
      oldPrice: 29.99,
      category: 'Accessories',
      rating: 4.0,
      totalUserRated: 300
    }
  ];
  category: any[] = [
    'Clothing',
    'Footwear',
    'Accessories',
    'Electronics',
    'Sports',
  ];
  filterProducts: Product[] = [];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  obs!: Observable<any>;
  dataSource: MatTableDataSource<Product> = new MatTableDataSource<Product>();

  ngOnInit(): void {

    this.filterAndSort();
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }




  selectedCategory: string[] = [];
  searchTerm: string = '';
  filterMenu: boolean = false;
  sortOrder: string = 'relavance';
  checked: string = '';
  // reset: boolean = false;
  filterApplied: FilterApplied[] = []
  priceRangeMin: number | null = null;
  priceRangeMax: number | null = null;
  selectedRating: number = 0;

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

  filterAndSort() {
    this.filterApplied = [];
    // Filter products based on the search term
    let filteredProducts = this.products;
    if (this.searchTerm) {
      const searchTermLower = this.searchTerm.toLowerCase();
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchTermLower)
      );
      this.addFilterAppliced({ type: 'search', value: this.searchTerm });
    }



    // Sort products based on the selected sort order
    if (this.sortOrder != 'relavance') {
      let value = '';
      switch (this.sortOrder) {
        case 'low':
          filteredProducts.sort((a, b) => a.newPrice - b.newPrice);
          value = 'Low to High';
          break;
        case 'high':
          filteredProducts.sort((a, b) => b.newPrice - a.newPrice);
          value = 'High to Low';
          break;
        // any sort order not present here will available as data comming from api
      }

      this.addFilterAppliced({ type: 'sort', value: value })
    }

    if (this.priceRangeMin && this.priceRangeMax) {
      filteredProducts = filteredProducts.filter(p => p.newPrice >= Number(this.priceRangeMin));
      filteredProducts = filteredProducts.filter(p => p.newPrice <= Number(this.priceRangeMax));

      this.addFilterAppliced({ type: 'price', value: this.priceRangeMin + ' - ' + this.priceRangeMax });
    }


    if (this.selectedRating != 0) {
      filteredProducts = filteredProducts.filter(p => p.rating >= this.selectedRating);
      this.addFilterAppliced({ type: 'rating', value: this.selectedRating == 5 ? '5' : this.selectedRating + ' & up' })
    }

    // Further filter products based on selected categories
    if (this.selectedCategory.length) {
      const selectedCategoriesLower = this.selectedCategory.map(c => c.toLowerCase());
      filteredProducts = filteredProducts.filter(product =>
        selectedCategoriesLower.includes(product.category.toLowerCase())
      );

      this.addFilterAppliced({ type: 'category', value: this.selectedCategory.join(', ') })
    }

    // Update the filtered and sorted products
    this.filterProducts = filteredProducts;

    console.log(this.filterProducts);

    this.dataSource.data = this.filterProducts;
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  resetFilter() {
    this.searchTerm = '';
    this.sortOrder = 'relavance';
    this.selectedCategory = [];
    this.filterApplied = [];
    this.priceRangeMin = null;
    this.priceRangeMax = null;
    this.selectedRating = 0;
    this.filterAndSort();
  }

  addFilterAppliced(filter: FilterApplied) {
    var isFilter = this.filterApplied.find(f => f.type == filter.type);
    if (isFilter) {
      isFilter.value = filter.value;
    } else {
      this.filterApplied.push({ type: filter.type, value: filter.value });
    }
  }

  toggleFilter() {
    this.filterMenu = !this.filterMenu;
  }

  // Method to check if a category is selected
  isCategorySelected(category: string): boolean {
    return this.selectedCategory.includes(category);
  }


  categoryChange(event: any, category: string) {
    const isChecked = event.checked;

    if (isChecked) {
      this.selectedCategory.push(category)
    } else {
      this.selectedCategory = this.selectedCategory.filter(c => c != category);
    }

    // this.selectedCategory.length ? this.reset = true : this.reset = false;
    this.filterAndSort();
  }

  ratingFil(rating: number) {
    if (this.selectedRating == rating) {
      this.selectedRating = 0;
    } else {
      this.selectedRating = rating;
    }
    this.filterAndSort();
  }
  removeFilter(type: string) {
    if (type == 'search') {
      this.searchTerm = '';
    } else if (type == 'price') {
      this.priceRangeMin = null;
      this.priceRangeMax = null;
    } else if (type == 'category') {
      this.selectedCategory = []
    } else if (type == 'rating') {
      this.selectedRating = 0
    } else if (type == 'sort') {
      this.sortOrder = 'relavance'
    }

    this.filterApplied = [];
    this.filterAndSort();
  }
}
