import { Component, Input } from '@angular/core';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  movies: any[] = [];
  available: boolean = false;

  constructor(private movieService: MovieDataService) { }

  ngOnInit(): void {
    this.showMovie();
  }

  showMovie() {
    this.movieService.getDataMovie().subscribe((response) => {
      this.movies = response.results.slice(0, 5); // Get movies array
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
  
  searchMovie(text: string) {
    console.log("ค้นหาหนัง",text)
  }
}
