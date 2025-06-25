import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PruebaComponent,
         EjDosComponent,
         Examen1Component,
         loginComponent
} from './components/barril';


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