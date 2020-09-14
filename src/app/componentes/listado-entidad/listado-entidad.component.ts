import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../../modelo/usuario';


@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {

  @Input() listadoUsuariosGrilla: Usuario[];
  @Output() usuarioSeleccionado: EventEmitter<any> = new EventEmitter<any>();	

  constructor() {
  	
  }

  ngOnInit(): void {
  }

  mostrarDetalles(usuario: Usuario){
  	this.usuarioSeleccionado.emit(usuario);
  }

}
