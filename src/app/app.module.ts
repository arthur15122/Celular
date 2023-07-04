import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Componente/listar/listar.component';
import { EditarComponent } from './Componente/editar/editar.component';
import { EliminarComponent } from './Componente/eliminar/eliminar.component';
import { GuardarComponent } from './Componente/guardar/guardar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServicieService } from './Servicios/service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    EditarComponent,
    EliminarComponent,
    GuardarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServicieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
