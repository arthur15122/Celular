import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Celular } from '../Entidad/Celular';

@Injectable({
  providedIn: 'root'
})
export class ServicieService {

  constructor(private http: HttpClient){}

  url = 'http://localhost:7500/api/Celular/'

listarC(){
  return this.http.get<Celular[]>(this.url+'listar');
}

guardarC(celular : Celular){
  return this.http.post<Celular>(this.url+'guardar',celular);

}
eliminarC(celular : Celular){
  return this.http.post<Celular>(this.url+'eliminar',celular);

}
editarC(celular : Celular){
  return this.http.post<Celular>(this.url+'editar',celular);

}
buscarC(celular : Celular){
  return this.http.post<Celular>(this.url+'buscar',celular);

}

}

