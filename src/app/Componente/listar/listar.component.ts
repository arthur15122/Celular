import { ServicieService } from 'src/app/Servicios/service.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Celular } from 'src/app/Entidad/Celular';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{
    constructor( private router: Router, private service: ServicieService){}
  celular !: Celular[];

    ngOnInit(): void{
        this.listar();
    }

    listar(){
      this.service.listarC().subscribe(data=>{
        this.celular = data;
        console.log("lista de celulares"+JSON.stringify(data));
      });
    }

    editar(celular: Celular){
      localStorage.setItem("id",celular.idCelular.toString());
      this.router.navigate(["editar"]);
    }
    
    eliminar(celular: Celular){
      localStorage.setItem("id",celular.idCelular.toString());
      this.router.navigate(["eliminar"]);
    }
}


