import {Component, OnInit} from '@angular/core';
import {CartService} from '../service/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // Define Property items to hold the cart items
  items;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    // On initialization, get the items that are in the cart from the cart service.
    this.items = this.cartService.getItems();
  }

}
