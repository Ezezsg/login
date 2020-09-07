import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { HomeComponent } from './componentes/home/home.component';
import { GrillaPaisesComponent } from './componentes/grilla-paises/grilla-paises.component';

const routes: Routes = [
	{path: "", component: BienvenidoComponent},
	{path: "login", component: LoginComponent},
	{path: "home", component: HomeComponent},
	{path: "grilla", component: GrillaPaisesComponent},
	{path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
