import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movieservice } from '../../services/movies';

@Component({
  selector: 'app-addmovie',
  imports: [FormsModule],
  templateUrl: './addmovie.html',
  styleUrls: ['./addmovie.css'],
})
export class Addmovie {
 protected MovieName: string = '';
 protected DirectorsName: string = '';
 protected YearReleased: string = '';

 movies = inject(Movieservice);

 protected add(){
  this.movies.addMovie(this.MovieName, this.DirectorsName, this.YearReleased);
  this.MovieName = '';
  this.DirectorsName = '';
  this.YearReleased = '';
 }
}
