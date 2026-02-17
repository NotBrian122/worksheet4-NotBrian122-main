import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Movieservice } from './services/movies';
import { Addmovie } from './components/addmovie/addmovie';
import { Listmovies } from './components/listmovies/listmovies';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Addmovie, Listmovies],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('testLab4');
}
