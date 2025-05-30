import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaComponent } from './components/prueba';
import { EjDosComponent } from './components/Ejercicio2/ej.dos';


const routes: Routes = [
  {path: '', component: PruebaComponent},
  {path: 'Formulario', component: EjDosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }