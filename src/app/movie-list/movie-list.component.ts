import { Component } from '@angular/core';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies: any[] = [];

  constructor(private movieService: MovieDataService) { }
  
  ngOnInit() {
    this.dataMovie()
  }

  dataMovie() {
    this.movieService.getDataMovie().subscribe((response) => {
      this.movies = response.results.slice(6); // Get movies array
    });
  }

  addToCart(movie: any) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    // ตรวจสอบว่ามีหนังอยู่ในตะกร้าแล้วหรือไม่
    if (!cart.some((m: any) => m.id === movie.id)) {
      cart.push(movie);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  isInCart(movieId: number): boolean {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    return cart.some((m: any) => m.id === movieId);
  }
}
