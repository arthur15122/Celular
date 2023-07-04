import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Celular } from 'src/app/Entidad/Celular';
import { ServicieService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  constructor(private router: Router, private service: ServicieService){}
  celular : Celular = new Celular();
  
  ngOnInit():void{
    this.buscar();
  }
  
  buscar(){
  let idCelular = localStorage.getItem('id');
  this.celular.idCelular = Number(idCelular);
  this.service.buscarC(this.celular).subscribe(data =>{
    this.celular = data;
  });
  }
  
  editar(){
    this.service.editarC(this.celular).subscribe(data =>{
      alert("se edito el  celular: " + this.celular.marca);
      this.router.navigate(['listar']);
    });
  }
}
