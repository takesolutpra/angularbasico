import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any = [];
  constructor(public servicios: ServiciosService) { }

  ngOnInit() {
    this.findMovies();
  }

  async findMovies() {
    const resp = await this.servicios.getMovies();

    console.log('Data', resp);
    if (resp !== undefined) {
      this.movies = resp.data.movies;
      console.log('Resp: ', resp);
      console.log('Movies', this.movies);
    }

    //console.log('Movies', JSON.parse(this.movies));
  }

}
