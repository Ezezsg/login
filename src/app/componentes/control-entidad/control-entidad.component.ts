import { Component, OnInit } from '@angular/core';
import { MiservicioService } from '../../servicios/miservicio.service';
import { Usuario } from '../../modelo/usuario';

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {

  listadoUsuarios: Usuario[];
  usuarioSeleccionado: Usuario;

  constructor(private miservicio: MiservicioService) { }

  ngOnInit(): void {
  	this.miservicio.obtenerPersonas().subscribe((personas: any) => {
  		console.log(personas);
  		this.listadoUsuarios = personas;
  	});
  }

  tomarUsuarioParaDetalles(nuevoUsuario: Usuario) {
    this.usuarioSeleccionado = nuevoUsuario;
  }

}
