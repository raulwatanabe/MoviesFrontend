import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovieService } from 'src/app/shared/service/movie.service';
import * as moment from 'moment';

@Component({
  selector: 'app-movie-form-dialog',
  templateUrl: './movie-form-dialog.component.html',
  styleUrls: ['./movie-form-dialog.component.css']
})
export class MovieFormDialogComponent implements OnInit {
  public movieForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<MovieFormDialogComponent>,
    private fb: FormBuilder,
    private rest: MovieService
  ) { }

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      movieName: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      where: ['', [Validators.required]],
      movieLink: ['', [Validators.required]],
      movieDate: ['', [Validators.required]],
      movieTime: ['', [Validators.required]]
    });
  }

  createMovie(){
    let newDate: moment.Moment = moment.utc(this.movieForm.value.movieDate).local();
    this.movieForm.value.movieDate = newDate.format("YYYY-MM-DD") + 'T' + this.movieForm.value.movieTime;
    console.log(this.movieForm.value);
    this.rest.postMovies(this.movieForm.value).subscribe(result => {});
    this.dialogRef.close(true);
    this.movieForm.reset();
  }

  cancel(){
    this.dialogRef.close(true);
    this.movieForm.reset();
  }

}
