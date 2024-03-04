import { Component } from '@angular/core';
import { MateriaService } from '../../../../../services/materia.service';
import { Materia } from '../../../../../models/Materia';
import { ActivatedRoute, RouterModule } from '@angular/router';


@Component({
  selector: 'app-detalhe-materia',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detalhe-materia.component.html',
  styleUrl: './detalhe-materia.component.css'
})
export class DetalheMateriaComponent {
  
  baseUrl: string = 'http://localhost:4200/assets/';

  id!: string;
  materia: Materia = {
   
    id:'',
    titulo: '',
    descricao: '',
    texto_completo: '',
    imagem: '',
    data_de_publicacao: ''

  }

  constructor(
    private materiaService: MateriaService,
    private route: ActivatedRoute,
  ){}
  
  ngOnInit(): void {
    
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }
  
  findById():void{
    this.materiaService.listarTarefa(this.id).subscribe(
      (resposta) => { 
        this.materia = resposta;
  })
  }

}
