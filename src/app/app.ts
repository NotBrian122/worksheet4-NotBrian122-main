import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Movieservice } from './services/movies';
import { Addmovie } from './components/addmovie/addmovie';
import { Listmovies } from './components/listmovies/listmovies';
import { AddNote } from './components/add-note/add-note';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Addmovie, Listmovies,AddNote],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('testLab4');
}
