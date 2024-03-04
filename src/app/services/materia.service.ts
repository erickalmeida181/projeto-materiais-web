import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Materia } from '../models/Materia';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  
  baseUrl: string = environment.baseUrl;
  
  constructor(
    private http: HttpClient
  ) { }

  listarTodos(pagina: number): Observable<Materia[]>{

    const url = `${this.baseUrl}listarMaterias?page=` + pagina ;
    return this.http.get<Materia[]>(url);
    
    }
  listarTarefa(id: string): Observable<Materia>{
      const url = `${this.baseUrl}listarMateria/${id}`;
      return this.http.get<Materia>(url);
    }

}
