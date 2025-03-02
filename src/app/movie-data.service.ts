import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor(private http: HttpClient) { }

  url = "https://api.themoviedb.org/3/search/movie?api_key=46643b8f7a5893eac59e8155b24285fc&query=a"

  getDataMovie(): Observable<any> {
    return this.http.get<any>(this.url);
  }

}
