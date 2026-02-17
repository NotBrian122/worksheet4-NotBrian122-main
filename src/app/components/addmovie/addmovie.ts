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
  protected MovieNumber: number = 0;
 protected DirectorsName: string = '';
 protected YearReleased: string = '';
 protected Note: string = '';

 movies = inject(Movieservice);

 protected add(){
  this.movies.addMovie(this.MovieName,this.MovieNumber,this.DirectorsName, this.YearReleased,this.Note);
  this.MovieName = '';
  this.MovieNumber = 0;
  this.DirectorsName = '';
  this.YearReleased = '';
  this.Note = '';
 }
}
