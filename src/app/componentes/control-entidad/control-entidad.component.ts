import { Component, OnInit, Input } from '@angular/core';
import { MiservicioService } from '../../servicios/miservicio.service';


@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {

  listadoUsuarios = [];

  constructor(private miservicio: MiservicioService) { }

  ngOnInit(): void {
  	this.miservicio.obtenerPersonas().subscribe((personas: any) => {
  		console.log(personas);
  		this.listadoUsuarios = personas;
  	});
  }

}
