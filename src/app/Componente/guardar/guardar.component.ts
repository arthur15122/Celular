import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Celular } from 'src/app/Entidad/Celular';
import { ServicieService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent {
 constructor(private router: Router, private service: ServicieService){}
celular : Celular = new Celular();

guardar(){
  this.service.guardarC(this.celular).subscribe(data =>{
    alert("Guardo el nuevo celular: " + this.celular.marca);
    this.router.navigate(['listar']);
  });
}

 
}
