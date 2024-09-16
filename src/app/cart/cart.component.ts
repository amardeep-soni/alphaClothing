import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartView, ShippingAddress } from '../interfaces';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


const demoCartData: CartView[] = [
  {
    productId: 1,
    image: 'https://loremflickr.com/200/200?random=1',
    name: 'Wireless Mouse',
    quantity: 2,
    price: 25.99,
    color: 'red',
    size: 'XL',
    productQuantity: 5
  },
  {
    productId: 2,
    image: 'https://loremflickr.com/200/200?random=2.jpg',
    name: 'Bluetooth Keyboard',
    quantity: 1,
    price: 45.50,
    color: 'green',
    size: 'L',
    productQuantity: 3
  },
  {
    productId: 3,
    image: 'https://loremflickr.com/200/200?random=3.jpg',
    name: 'USB-C Hub',
    quantity: 3,
    price: 12.75,
    color: 'blue',
    size: 'M',
    productQuantity: 2
  },
  {
    productId: 4,
    image: 'https://loremflickr.com/200/200?random=4.jpg',
    name: 'Laptop Stand',
    quantity: 1,
    price: 29.99,
    color: 'pink',
    size: 'L',
    productQuantity: 10
  },
];
const demoAddresses: ShippingAddress[] = [
  {
    id: 1,
    name: "John Doe",
    state: "JanakpurDham",
    city: "Dhanusha",
    address: "janak chowk",
    phoneNumber1: "555-1234",
    phoneNumber2: "555-5678",
    isDefault: false
  },
  {
    id: 2,
    name: "John Doe",
    state: "Parsa",
    city: "Birgunj",
    address: "Ranighat -14",
    phoneNumber1: "555-8765",
    phoneNumber2: "555-4321",
    isDefault: true
  }
];

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCheckboxModule, MatCardModule, MatButtonModule, RouterModule, MatIconModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartList: CartView[] = [];
  totalCart: number = 0;
  subTotal: number = 0;
  grandTotal: number = 0;
  shippingAddress: ShippingAddress[] = [];
  selectedAddressId: number | undefined = 0;
  selectedItems: CartView[] = [];

  ngOnInit(): void {
    // get all cart items of the user
    this.cartList = demoCartData;
    this.cartItemsChange();

    // get all shipping addresses of the user
    this.shippingAddress = demoAddresses;

    this.selectedAddressId = this.shippingAddress.find(a => a.isDefault == true)?.id;
  }

  cartItemsChange() {
    this.totalCart = this.cartList.reduce((accumulator, product) => accumulator + product.quantity, 0);
    this.subTotal = this.cartList.map(product => product.price * product.quantity).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    this.grandTotal = this.subTotal;
  }

  qunatityMinus(cart: CartView) {
    // call the backend and subtract 1 item to the same id
    if (cart.quantity != 1) {
      cart.quantity--;
      this.cartItemsChange();
    }
  }
  qunatityPlus(cart: CartView) {
    // call the backend and add +1 item to the same id
    if (cart.quantity < cart.productQuantity) {
      cart.quantity++;
      this.cartItemsChange();
    }
  }

  deleteItem(cartid: number) {
    // delete item from cart
    this.cartItemsChange();
  }

  checkout() {
    let selectedAddress = this.shippingAddress.find(a => a.id == this.selectedAddressId);
    if (!selectedAddress) {
      return;
    }
    console.log(this.selectedItems);

  }

  onCheck(e: any, cart: CartView) {
    console.log(e);
    console.log(e.checked);

    let isItem = this.selectedItems.find(c => c.productId == cart.productId);
    if (isItem) {
      this.selectedItems = this.selectedItems.filter(c => c.productId != cart.productId);
    } else {
      this.selectedItems.push(cart);
    }
  }
}
