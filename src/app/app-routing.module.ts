import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { MoviesComponent } from './pages/movies/movies.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

// Definicion del sistema de rutas principales
// Generalmente solo existe in forRooten toda la aplicacion de angular

// Este archivo debe ser importado en el app.module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
