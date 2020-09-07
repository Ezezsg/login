import { Component, OnInit } from '@angular/core';
import { MiservicioService } from '../../servicios/miservicio.service';

@Component({
  selector: 'app-grilla-paises',
  templateUrl: './grilla-paises.component.html',
  styleUrls: ['./grilla-paises.component.css']
})
export class GrillaPaisesComponent implements OnInit {

  listadoPaises = [];

  constructor( private miservicio: MiservicioService ) { }

  ngOnInit(): void {

  	this.miservicio.obtenerPaises().subscribe((paises: any) => {
  		console.log(paises);
  		this.listadoPaises = paises;
  	});
  }

  mostrarUsuario(){
    return this.miservicio.usuario.perfil;
  }

}
