import { Component } from '@angular/core';
import { MateriaService } from '../../../../../services/materia.service';
import { Materia } from '../../../../../models/Materia';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-lista-materias',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-materias.component.html',
  styleUrl: './lista-materias.component.css'
})
export class ListaMateriasComponent {

  materias: Materia[] = [];
  baseUrl: string = 'http://localhost:4200/assets/';

  page: number = 1;
  total: number = 0;
  numPorPagina: number = 0;
  validaBotao = true;
  constructor(
    private materiaService: MateriaService
    ) {
  
    
  }
  ngOnInit(): void {
    
    this.listarMaterias();
    
  }
  
  listarMaterias(): any{
    this.materiaService.listarTodos(this.page).subscribe
    ((resposta: any) =>{
      
      this.materias = resposta.data;
      this.total = resposta.meta.total;
      this.numPorPagina = resposta.meta.per_page;

      this.ValidarBotaoSeguinte();
   
    });
  }
 ValidarBotaoSeguinte(){
  if(Math.ceil((this.total/this.numPorPagina)) == this.page){
    this.validaBotao = false;
  }else{
    this.validaBotao = true;
  }
 }
  Anterior(){
    this.page -= 1; 
    this.listarMaterias();
}
  Proximo(){
  this.page += 1; 
  this.listarMaterias();
}
}
