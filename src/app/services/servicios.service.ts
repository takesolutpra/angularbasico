import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Aquí se puede observar en, el codigo providedIn: 'root', en donde 
//root indica el alcance del servicio

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) { }


  async getMovies() {
    let resp;

    resp = await fetch('https://yts.am/api/v2/list_movies.json?genre=action');

    return resp.json();
    // resp contiene la respuesta
    // resp.json();  contiene los datos de la respuesta
  }
}
