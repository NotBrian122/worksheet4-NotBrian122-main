import { Injectable } from '@angular/core';
import { signal } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class Movieservice {

private _movies = signal<{MovieName:string,DirectorName:string,YearReleased:string}[]>([]);

public movies = this._movies.asReadonly();

addMovie(MovieName:string,DirectorName:string,YearReleased:string){
  const newMovie={
    MovieName:MovieName,
    DirectorName:DirectorName,
    YearReleased:YearReleased
  }

  this._movies.update(movies => [...movies,newMovie]);
  console.log(this._movies())
}
getMovies(){
  return this.movies;
}
}
