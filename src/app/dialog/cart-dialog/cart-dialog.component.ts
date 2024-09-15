import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { CartView } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const demoCartData: CartView[] = [
  {
    productId: 0,
    image: 'https://loremflickr.com/200/200?random=1',
    name: 'Wireless Mouse',
    quantity: 2,
    price: 25.99,
  },
  {
    productId: 0,
    image: 'https://loremflickr.com/200/200?random=2.jpg',
    name: 'Bluetooth Keyboard',
    quantity: 1,
    price: 45.50,
  },
  {
    productId: 0,
    image: 'https://loremflickr.com/200/200?random=3.jpg',
    name: 'USB-C Hub',
    quantity: 3,
    price: 12.75,
  },
  {
    productId: 0,
    image: 'https://loremflickr.com/200/200?random=4.jpg',
    name: 'Laptop Stand',
    quantity: 1,
    price: 29.99,
  },
];

@Component({
  selector: 'app-cart-dialog',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './cart-dialog.component.html',
  styleUrl: './cart-dialog.component.css'
})

export class CartDialogComponent implements OnInit {
  cartList: CartView[] = [];
  totalCart!: number;
  totalPrice: number | undefined;
  routeSubscription: any;
  id!: number;

  constructor(private router: Router, private route: ActivatedRoute, public dialogRef: MatDialogRef<CartDialogComponent>) { }

  async ngOnInit() {
    this.cartList = demoCartData;
    this.totalCart = this.cartList.reduce((accumulator, product) => accumulator + product.quantity, 0);
    const totalPrices = this.cartList.map(product => product.price * product.quantity);
    this.totalPrice = totalPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }

  goToProductDetailPage(id: number) {
    close();
    this.router.navigate(['products', id]);
  }

  close() {
    this.dialogRef.close(null)
  }
}
