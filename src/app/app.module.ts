import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { HomeComponent } from './componentes/home/home.component';
import { GrillaPaisesComponent } from './componentes/grilla-paises/grilla-paises.component';

import { MiservicioService } from './servicios/miservicio.service';

import { FormsModule } from '@angular/forms';
import { ControlEntidadComponent } from './componentes/control-entidad/control-entidad.component';
import { ListadoEntidadComponent } from './componentes/listado-entidad/listado-entidad.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent,
    HomeComponent,
    GrillaPaisesComponent,
    ControlEntidadComponent,
    ListadoEntidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MiservicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
