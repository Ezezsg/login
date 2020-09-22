import { Component, OnInit, Input, EventEmitter , Output } from '@angular/core';

import { Usuario } from '../../modelo/usuario';

@Component({
  selector: 'app-boton-entidad',
  templateUrl: './boton-entidad.component.html',
  styleUrls: ['./boton-entidad.component.css']
})
export class BotonEntidadComponent implements OnInit {

  @Input() unUsuario: Usuario;
  @Output() porEliminar = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  borrar(){
    this.porEliminar.emit(this.unUsuario);  
  }
}
