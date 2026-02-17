import { Component, inject } from '@angular/core';
import { Movieservice } from '../../services/movies';
import { CommonModule } from '@angular/common';
import { AddNote } from '../add-note/add-note';
@Component({
  selector: 'app-listmovies',
  imports: [CommonModule, AddNote ],
  templateUrl: './listmovies.html',
  styleUrls: ['./listmovies.css'],
})
export class Listmovies {
  movies = inject(Movieservice);
  protected saveNote(id:number, note:string){
    this.movies.saveNote(id,note);
  }
}
