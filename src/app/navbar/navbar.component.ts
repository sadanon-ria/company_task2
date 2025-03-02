import { Component, EventEmitter, Output} from '@angular/core';
import { MovieDataService } from '../movie-data.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cart: any[] = [];

  constructor(private movieService: MovieDataService) {
    this.loadCart();
  }

  loadCart() {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  @Output() onInput = new EventEmitter<string>();
  @Output() onSearch = this.onInput.pipe(debounceTime(400));

  inputSearch(text: string) {
    this.onInput.emit(text);
    console.log(text)
  }
}
