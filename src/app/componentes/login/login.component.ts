import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelo/usuario';
import { Router } from '@angular/router';

import { MiservicioService } from '../../servicios/miservicio.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario();

  formulario;

  constructor( 
  	private route: Router, 
  	private miservicio: MiservicioService,
  ) {}

  ngOnInit(): void {
  	this.usuario.email = "admin@admin.com";
  	this.usuario.clave = "1234";
  }

  ingresar(){
  	if (this.usuario.email === "admin@admin.com" && this.usuario.clave === "1234") {
  		this.usuario.perfil = "Admin";
  		//se guarda en localStorage
  		localStorage.setItem("usuario", JSON.stringify(this.usuario));
  		//se guarda en miservicio
  		this.miservicio.usuario = this.usuario;
  		console.log("que paso");
  		this.route.navigate(["grilla"]);
  	}else{
  		this.route.navigate(["error"]);
  	}
  }

}
