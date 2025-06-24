import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaComponent } from './components/prueba';
import { EjDosComponent } from './components/Ejercicio2/ej.dos';
import { Examen1Component } from './components/Examen1/script';
import { loginComponent } from './components/login/login';


const routes: Routes = [
  {path: '', component: PruebaComponent},
  {path: 'Formulario', component: EjDosComponent},
  {path: 'Examen1', component: Examen1Component},
  {path: 'iniciar', component: loginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }