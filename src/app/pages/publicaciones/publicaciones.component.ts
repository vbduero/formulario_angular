import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-publicaciones',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agrega FormsModule aquí
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  losdatos: any[] = [];
  nuevoDato = { title: '', body: '', userId: 1 };

  constructor(private servicio: DataService) {}

  ngOnInit() {
    this.servicio.obtenerDatos().subscribe((data: any) => {
      console.log(data);
      this.losdatos = data;
    });
  }

  enviarDatos() {
    this.servicio.enviarDatos(this.nuevoDato).subscribe((response: any) => {
      console.log('Respuesta del POST:', response);
      this.losdatos.push(response); // Añadir la nueva publicación a la lista
      this.nuevoDato = { title: '', body: '', userId: 1 }; // Limpiar los campos
    }, (error: any) => {
      console.error('Error al enviar los datos:', error);
    });
  }
}
