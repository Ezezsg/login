import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../modelo/usuario';


@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {

  @Input() listadoUsuariosGrilla: Usuario[];	

  constructor() {
  	
  }

  ngOnInit(): void {
  }

}
