import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../modelo/usuario';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.css']
})
export class DetalleEntidadComponent implements OnInit {

  @Input() unUsuario:Usuario;

  constructor() { }

  ngOnInit(): void {
  }

}
