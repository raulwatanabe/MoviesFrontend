import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieFormDialogComponent } from './movie-form-dialog/movie-form-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  addMovie(): void {
    const dialogRef = this.dialog.open(MovieFormDialogComponent, {
      maxHeight: '95vh',
      minWidth: '400px',
      width: '25vw',
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      window.location.reload();
    });
  }

}
