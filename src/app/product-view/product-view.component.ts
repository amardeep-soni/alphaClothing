import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product, ProductVariant, ProductView, Review } from '../interfaces';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


const productView: ProductView = {
  id: 202,
  name: "Elegant Summer Dress",
  category: "Dresses",
  reviews: [
    {
      id: 1,
      email: "maryjohnson@example.com",
      fullName: "Mary Johnson",
      profileImage: "https://images.news18.com/ibnlive/uploads/2023/07/324701978_1386965885429372_493005967462813935_n.jpg",
      rating: 5,
      message: "This dress is absolutely gorgeous! Perfect for summer events and very comfortable.",
      images: [
        "https://i.pinimg.com/564x/62/27/19/62271966ee39ef849fa499a5620516a3.jpg",
        "https://images.news18.com/ibnlive/uploads/2023/07/324701978_1386965885429372_493005967462813935_n.jpg",
        "https://i.pinimg.com/564x/62/27/19/62271966ee39ef849fa499a5620516a3.jpg",
        "https://images.news18.com/ibnlive/uploads/2023/07/324701978_1386965885429372_493005967462813935_n.jpg",
      ],
      sellerReply: "Thank you for the lovely feedback, Mary! We're thrilled you love the dress."
    },
    {
      id: 2,
      fullName: "Lisa Green",
      rating: 4,
      profileImage: "https://i.pinimg.com/564x/62/27/19/62271966ee39ef849fa499a5620516a3.jpg",
      message: "The dress is beautiful but the fit is a bit loose. Consider sizing down.",
      images: [
        "https://e0.pxfuel.com/wallpapers/67/960/desktop-wallpaper-kgf-hero-rocky-bhai.jpg",

      ],
      sellerReply: null,
    },
    {
      id: 3,
      email: "maryjohnson@example.com",
      fullName: "Mary Johnson",
      profileImage: "https://images.news18.com/ibnlive/uploads/2023/07/324701978_1386965885429372_493005967462813935_n.jpg",
      rating: 1,
      message: "This dress is absolutely gorgeous! Perfect for summer events and very comfortable.",
      images: [
        "https://images.news18.com/ibnlive/uploads/2023/07/324701978_1386965885429372_493005967462813935_n.jpg"
      ],
      sellerReply: "Thank you for the lovely feedback, Mary! We're thrilled you love the dress."
    },
    {
      id: 4,
      fullName: "Lisa Green",
      rating: 2,
      profileImage: "https://i.pinimg.com/564x/62/27/19/62271966ee39ef849fa499a5620516a3.jpg",
      message: "The dress is beautiful but the fit is a bit loose. Consider sizing down.",
      images: [
        "https://e0.pxfuel.com/wallpapers/67/960/desktop-wallpaper-kgf-hero-rocky-bhai.jpg",

      ],
      sellerReply: null,
    },
    {
      id: 5,
      fullName: "Lisa Green",
      rating: 4,
      profileImage: "https://i.pinimg.com/564x/62/27/19/62271966ee39ef849fa499a5620516a3.jpg",
      message: "The dress is beautiful but the fit is a bit loose. Consider sizing down.",
      images: [
        "https://e0.pxfuel.com/wallpapers/67/960/desktop-wallpaper-kgf-hero-rocky-bhai.jpg",

      ],
      sellerReply: null,
    },
    {
      id: 6,
      email: "maryjohnson@example.com",
      fullName: "Mary Johnson",
      profileImage: "https://images.news18.com/ibnlive/uploads/2023/07/324701978_1386965885429372_493005967462813935_n.jpg",
      rating: 1,
      message: "This dress is absolutely gorgeous! Perfect for summer events and very comfortable.",
      images: [
        "https://images.news18.com/ibnlive/uploads/2023/07/324701978_1386965885429372_493005967462813935_n.jpg"
      ],
      sellerReply: "Thank you for the lovely feedback, Mary! We're thrilled you love the dress."
    },
    {
      id: 7,
      fullName: "Lisa Green",
      rating: 2,
      profileImage: "https://i.pinimg.com/564x/62/27/19/62271966ee39ef849fa499a5620516a3.jpg",
      message: "The dress is beautiful but the fit is a bit loose. Consider sizing down.",
      images: [
        "https://e0.pxfuel.com/wallpapers/67/960/desktop-wallpaper-kgf-hero-rocky-bhai.jpg",

      ],
      sellerReply: null,
    }
  ],
  rating: 4.5,
  totalUserRated: 7,
  description: "A beautifully designed summer dress with a lightweight fabric and elegant pattern. Ideal for both casual outings and special occasions.",
  brand: "ChicWear",
  relatedProduct: [
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
  ],
  inBox: "1 dress, 1 Thak you Greasure card",
  defaultColor: "Blue",
  defaultSize: "L",
  variants: [
    {
      productId: 202,
      color: "Blue",
      size: "M",
      newPrice: 79.99,
      oldPrice: 99.99,
      images: [
        "https://i.pinimg.com/564x/62/27/19/62271966ee39ef849fa499a5620516a3.jpg",
        "https://images.news18.com/ibnlive/uploads/2023/07/324701978_1386965885429372_493005967462813935_n.jpg"
      ],
      quantity: 30
    },
    {
      productId: 202,
      color: "Red",
      size: "L",
      newPrice: 80,
      images: [
        "https://e0.pxfuel.com/wallpapers/67/960/desktop-wallpaper-kgf-hero-rocky-bhai.jpg",
        "https://i.pinimg.com/564x/62/27/19/62271966ee39ef849fa499a5620516a3.jpg"
      ],
      quantity: 25
    },
    {
      productId: 202,
      color: "Blue",
      size: "L",
      newPrice: 79.99,
      images: [
        "https://i.pinimg.com/564x/62/27/19/62271966ee39ef849fa499a5620516a3.jpg",
        "https://i.pinimg.com/564x/62/27/19/62271966ee39ef849fa499a5620516a3.jpg",
        "https://m.media-amazon.com/images/I/51MAObV9ekL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        "https://e0.pxfuel.com/wallpapers/67/960/desktop-wallpaper-kgf-hero-rocky-bhai.jpg",
        "https://images.news18.com/ibnlive/uploads/2023/07/324701978_1386965885429372_493005967462813935_n.jpg",
        "https://i.pinimg.com/564x/62/27/19/62271966ee39ef849fa499a5620516a3.jpg",
        "https://i.pinimg.com/564x/62/27/19/62271966ee39ef849fa499a5620516a3.jpg",
        "https://m.media-amazon.com/images/I/51MAObV9ekL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        "https://e0.pxfuel.com/wallpapers/67/960/desktop-wallpaper-kgf-hero-rocky-bhai.jpg",
        "https://images.news18.com/ibnlive/uploads/2023/07/324701978_1386965885429372_493005967462813935_n.jpg",
      ],
      quantity: 20
    },
    {
      productId: 202,
      color: "Red",
      size: "XL",
      newPrice: 79.99,
      images: [
        "https://i.pinimg.com/564x/62/27/19/62271966ee39ef849fa499a5620516a3.jpg",
        "https://m.media-amazon.com/images/I/51MAObV9ekL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
      ],
      quantity: 20
    }
  ]
};

const sameCategoryProduct: Product[] = [
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
  }
]

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatIconModule, FormsModule, MatTabsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class ProductViewComponent implements OnInit {
  product!: ProductView;
  sameCategoryProduct!: Product[];
  oldPrice?: number | null;
  newPrice?: number;
  allSizes: string[] = [];
  allColors: { color: string, image: string }[] = [];
  hoverImage: string = '';
  hoverColorName: string = '';
  allImages: string[] = [];
  quantity: number = 0;
  quantityCounter: number = 1;
  activeIndex: number = 0;
  isMobile: boolean = false;
  lens: HTMLElement | null = null;
  cx!: number;
  cy!: number;
  selectedTabIndex: number = 0;
  filteredReviews: Review[] = [];
  sortValue: string = 'recent';
  filterValue: string = 'all';

  @ViewChild('smallSwiper', { static: false }) swiper?: any;
  @ViewChild('bigSwiper', { static: false }) bigSwiper?: any;

  constructor(private route: ActivatedRoute, private el: ElementRef) {

  }
  starRatings = [5, 4, 3, 2, 1];
  ratingsCount: { [key: number]: number } = {};

  ngOnInit(): void {
    this.isMobileDevice();

    this.route.params.subscribe(params => {
      let productId = params['id'];

      // get product with productId and assign to this variable
      this.product = productView;

      this.filterVariant(this.product.defaultColor, this.product.defaultSize);

      this.product.variants.forEach(v => {
        if (!this.allColors.find(c => c.color == v.color)) {
          this.allColors.push({ color: v.color, image: v.images[0] })
        }
      });

      // Update allSizes with unique sizes
      this.allSizes = Array.from(new Set(this.product.variants.map(v => v.size)));

      // get products with same category with top rating max 5 and assign to this variable
      this.sameCategoryProduct = sameCategoryProduct;

      // calculate ratings
      this.starRatings.forEach(star => {
        this.ratingsCount[star] = this.product.reviews.filter(review => review.rating === star).length;
      });

      this.filterChange();
    });
  }

  ngAfterViewInit(): void {
    // removing default next prev button
    this.swiper.nativeElement.swiper.navigation.nextEl.style.display = 'none';
    this.swiper.nativeElement.swiper.navigation.prevEl.style.display = 'none';
    this.bigSwiper.nativeElement.swiper.autoplay.start();


    this.bigSwiper.nativeElement.swiper.on('slideChange', (swiper: any) => {
      this.activeIndex = swiper.activeIndex;
      this.lens = null;
    });

    document.addEventListener('mousemove', (e: MouseEvent) => {
      if (this.isMobile) {
        return;
      }
      let images: any = document.querySelectorAll('.bigImage')
      let img = images[this.activeIndex];


      const rect = img.getBoundingClientRect();
      const isInBox = (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      );

      if (isInBox) {
        this.bigSwiper.nativeElement.swiper.autoplay.stop();
        if (this.lens) {
          this.moveLens(e, img)
        } else {
          this.imageZoomInit(e, img);
        }
      } else {
        this.bigSwiper.nativeElement.swiper.autoplay.start();
        this.onMouseLeave();
      }
    });
  }

  event!: MouseEvent;
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
  scrollToSection() {
    this.tabGroup._elementRef.nativeElement.scrollIntoView({ block: 'start' });
    this.tabGroup.selectedIndex = 1;
  }

  filterVariant(color: string, size: string) {
    var variant: any;
    if (color) this.product.defaultColor = color;
    if (size) this.product.defaultSize = size;

    variant = this.product.variants.find(v => v.color === this.product.defaultColor && v.size === this.product.defaultSize);

    if (!variant) {
      variant = this.product.variants.find(v => v.color === this.product.defaultColor);
      this.product.defaultSize = variant.size;
    }

    // Update old and new prices if the product variant is found
    if (variant) {
      this.oldPrice = variant.oldPrice;
      this.newPrice = variant.newPrice;
      this.allImages = variant.images;
      this.quantity = variant.quantity;
      this.activeIndex = 0;
    }
    if (color) {
      if (this.swiper) {
        this.bigSwiper.nativeElement.swiper.slideTo(0);
      }
    }
  }
  @ViewChild('tabGroup') tabGroup!: MatTabGroup;

  isSizeDisabled(size: string) {
    return this.product.variants.some(v => v.color === this.product.defaultColor && v.size === size);
  }

  hoverColorFamily(item: any) {
    this.product.defaultColor != item.color ? this.hoverImage = item.image : this.hoverImage = '';
    this.hoverColorName = item.color;
  }
  hoverLeaveColorFamily() {
    this.hoverColorName = '';
    this.hoverImage = '';
  }
  quantityChage(type: string) {
    if (type == 'add') {
      if (this.quantityCounter < this.quantity) {
        this.quantityCounter = ++this.quantityCounter;
      }
    } else if (type == 'sub') {
      if (this.quantityCounter > 1) {
        this.quantityCounter = --this.quantityCounter;
      }
    } else if (type == 'input') {

      if (this.quantityCounter > this.quantity) {
        this.quantityCounter = this.quantity;

      }
    }
  }

  isNavDisable(type: string): boolean {
    let classLength = 0;
    let swiper = this.swiper;
    if (swiper) {
      if (type == 'prev') {
        classLength = this.swiper.nativeElement.swiper.navigation.prevEl.classList.length;
      } else {
        classLength = this.swiper.nativeElement.swiper.navigation.nextEl.classList.length;
      }
    }
    return classLength > 1;
  }

  imageZoomInit(e: MouseEvent, mainImage: HTMLImageElement): void {
    let zoomLevel = 1.2;

    let result: any = document.querySelector('#zoomedImage');
    result.style.display = 'block';

    let oldLens: any = document.querySelector('#img-zoom-lens');

    if (oldLens) {
      oldLens.remove();
    }


    this.lens = document.createElement('DIV');
    this.lens.setAttribute('id', 'img-zoom-lens');
    mainImage.parentElement?.insertBefore(this.lens, mainImage);

    // Calculate the zoom factors

    this.cx = (result.offsetWidth / this.lens.offsetWidth) * zoomLevel;
    this.cy = (result.offsetHeight / this.lens.offsetHeight) * zoomLevel;

    // Set the background image and size
    result.style.backgroundImage = `url('${mainImage.src}')`;
    result.style.backgroundSize = `${mainImage.width * this.cx}px ${mainImage.height * this.cy}px`;

    this.moveLens(e, mainImage)
  }

  moveLens(e: MouseEvent, mainImage: HTMLImageElement): void {
    let pos = this.getCursorPos(e, mainImage);

    let lensWidth = Number(this.lens?.offsetWidth);
    let lensHeight = Number(this.lens?.offsetHeight);
    let result: any = document.querySelector('#zoomedImage');


    // Calculate the position of the lens
    let x = pos.x - (lensWidth / 2);
    let y = pos.y - (lensHeight / 2);


    // Ensure the lens does not go out of bounds

    if (x > mainImage.width - lensWidth / this.cx) x = mainImage.width - lensWidth / this.cx;
    if (x < 0) x = 0;
    if (x > 190) x = 190;
    if (y > mainImage.height - lensHeight / this.cy) y = mainImage.height - lensHeight / this.cy;
    if (y < 0) y = 0;
    if (y > 300) y = 300;

    // Update lens and result background position
    if (this.lens) {
      this.lens.style.left = `${x}px`;
      this.lens.style.top = `${y}px`;
    }
    result.style.backgroundPosition = `-${x * this.cx}px -${y * this.cy}px`;

  }

  getCursorPos(e: MouseEvent | TouchEvent, myImage: any): { x: number; y: number } {
    let a, x = 0, y = 0;
    e = e as MouseEvent;

    a = myImage.getBoundingClientRect();
    x = (e as MouseEvent).pageX - a.left;
    y = (e as MouseEvent).pageY - a.top;

    x = x - window.pageXOffset;
    y = y - window.pageYOffset;

    return { x, y };
  }

  onMouseLeave() {
    let oldLens: any = document.querySelector('#img-zoom-lens');

    if (oldLens) {
      oldLens.remove();
    }
    this.lens = null;
    let result: any = document.querySelector('#zoomedImage');
    result.style.display = 'none';
  }

  isMobileDevice() {
    const userAgent = navigator.userAgent || navigator.vendor;

    // List of mobile user agents
    const mobileUserAgents = ['Android', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone'];

    for (const agent of mobileUserAgents) {
      if (userAgent.toLowerCase().includes(agent.toLowerCase())) {
        this.isMobile = true;
        return;
      }
    }
    this.isMobile = false;

  }
  sortChange() {
    if (this.sortValue === 'recent') {
      this.filteredReviews = [...this.filteredReviews];
    } else if (this.sortValue === 'htol') {
      this.filteredReviews = [...this.filteredReviews].sort((a, b) => b.rating - a.rating);
    } else if (this.sortValue === 'ltoh') {
      this.filteredReviews = [...this.filteredReviews].sort((a, b) => a.rating - b.rating);
    }
  }


  filterChange() {
    if (this.filterValue == 'all') {
      this.filteredReviews = [...this.product.reviews];
    } else {
      this.filteredReviews = [...this.product.reviews].filter(review => review.rating >= Number(this.filterValue));
    }
    this.sortChange();
  }

  celarFilter() {
    this.sortValue = "recent";
    this.filterValue = "all";
    this.filteredStar = null;
    this.filterChange();
  }

  getPercentage(star: number): number {
    const percentage = this.product.totalUserRated ? (this.ratingsCount[star] / this.product.totalUserRated) * 100 : 0;
    return percentage;
  }
  filteredStar: number | null = null;
  
  filterStarReview(star: number) {
    this.filteredStar = star;
    this.filteredReviews = this.product.reviews.filter(r => r.rating == star);
  }

}
