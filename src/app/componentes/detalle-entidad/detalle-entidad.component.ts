import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Usuario } from '../../modelo/usuario';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.css']
})
export class DetalleEntidadComponent implements OnInit {

  @Input() unUsuario:Usuario;
  @Output() eliminar = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  LipiarDetalle(){
  	 this.unUsuario = null;
  }

  borrarEnDetalle(event){
  	this.eliminar.emit(event);
  }

}
