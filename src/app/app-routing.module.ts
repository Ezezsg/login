import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { HomeComponent } from './componentes/home/home.component';
import { GrillaPaisesComponent } from './componentes/grilla-paises/grilla-paises.component';
import { ControlEntidadComponent } from './componentes/control-entidad/control-entidad.component';
import { ListadoEntidadComponent } from './componentes/listado-entidad/listado-entidad.component';

const routes: Routes = [
	// {path: "", component: BienvenidoComponent}, si en path se deja vacio, se direcciona a esa vista por default
	{path: "bienvenido", component: BienvenidoComponent},
	{path: "login", component: LoginComponent},
	{path: "home", component: HomeComponent},
	{path: "grilla", component: GrillaPaisesComponent},
	{path: "paises/listado", component: ControlEntidadComponent},
	{path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
