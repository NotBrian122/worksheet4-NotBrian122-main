import { Component, inject } from '@angular/core';
import { Movieservice } from '../../services/movies';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listmovies',
  imports: [CommonModule],
  templateUrl: './listmovies.html',
  styleUrls: ['./listmovies.css'],
})
export class Listmovies {
  movies = inject(Movieservice);
}
