import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/service/movie.service';
import { Movie } from 'src/app/shared/model/movie.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as moment from 'moment';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  moviesToRelease: Movie[];
  moviesAvailable: Movie[];
  url: string = '';
  urlSafe: SafeResourceUrl;


  constructor(
    private rest: MovieService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
   this.getMovies();
  }

  getMovies(){
    this.rest.getMoviesWithFlag('torelease').subscribe(data => {
      this.moviesToRelease = data.content;
      this.moviesToRelease.forEach(movie => {
        movie.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(movie.movieLink);
      });
    });

    this.rest.getMoviesWithFlag('available').subscribe(data => {
      this.moviesAvailable = data.content;
      this.moviesAvailable.forEach(movie => {
        movie.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(movie.movieLink);
      });
    });
  }

}
