import { Component } from '@angular/core';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: any[] = [];
  cartVisible: boolean = false;

  // popup payment
  showPopup: boolean = false;
  countdown: number = 60;
  interval: any;
  openPaymentPopup() {
    this.showPopup = true;
    this.countdown = 60;
    this.interval = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.closePaymentPopup();
      }
    }, 1000);
  }
  closePaymentPopup() {
    this.showPopup = false;
    clearInterval(this.interval);
  }
  // 

  constructor(private movieService: MovieDataService) {}

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  toggleCart() {
    this.cartVisible = !this.cartVisible;
  }

  removeFromCart(id: number) {
    this.cart = this.cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  clearCart() {
    this.cart = [];
    localStorage.removeItem('cart');
  }

  
}
