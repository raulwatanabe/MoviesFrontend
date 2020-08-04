import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../model/movie.model';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({ providedIn: 'root' })
export class MovieService {

    apiUrl = 'http://localhost:8080/movies';
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

    constructor(
        private httpClient: HttpClient
    ) {}

    public getMovies(): Observable<ResponsePageable> {
        return this.httpClient.get<ResponsePageable>(this.apiUrl);
    }

    public getMoviesWithFlag(flag: string): Observable<ResponsePageable> {
        return this.httpClient.get<ResponsePageable>(this.apiUrl + '?flag=' + flag);
    }

    public postMovies(movie: any): Observable<Movie> {
        return this.httpClient.post<any>(this.apiUrl, movie, this.httpOptions);
    }

}
