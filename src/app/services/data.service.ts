import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor( private http: HttpClient) { }

  obtenerDatos(){
    return this.http.get(this.apiUrl);
  }
  enviarDatos(datos: any) {
    return this.http.post(this.apiUrl, datos);
  }
}
