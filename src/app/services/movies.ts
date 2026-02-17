import { Injectable } from '@angular/core';
import { signal } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class Movieservice {

private _movies = signal<{MovieName:string,MovieNumber:number,DirectorName:string,YearReleased:string,Note:string}[]>([]);

public movies = this._movies.asReadonly();

addMovie(MovieName:string,MovieNumber:number,DirectorName:string,YearReleased:string,Note:string){
  const newMovie={
    MovieName:MovieName,
    MovieNumber:MovieNumber,
    DirectorName:DirectorName,
    YearReleased:YearReleased,
    Note:Note
  }

  this._movies.update(movies => [...movies,newMovie]);
  console.log(this._movies())
}

saveNote(MovieNumber:number, note:string){
  this._movies.update(movies => movies.map(m => m.MovieNumber === MovieNumber ? { ...m, Note: note } : m));
}

getMovies(){
  return this.movies;
}
}
