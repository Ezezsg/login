import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {
  
  public usuario;

  private url = environment.urlpaises;
  private url2 = environment.urlpersonas;
  constructor(
  	private http: HttpClient
  ) { }

  public obtenerPaises(){
  	return this.http.get(this.url);
  }

  public obtenerPersonas(){
  	return this.http.get(this.url2);
  }

  public elmiminarPersona(){
    
  }
}
