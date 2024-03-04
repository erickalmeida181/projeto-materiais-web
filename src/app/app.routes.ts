import { Routes } from '@angular/router';
import { ListaMateriasComponent } from './views/components/pages/materia/lista-materias/lista-materias.component';
import { DetalheMateriaComponent } from './views/components/pages/materia/detalhe-materia/detalhe-materia.component';

export const routes: Routes = [
  {path: '', component: ListaMateriasComponent},
  {path: 'materia/detalhe/:id', component: DetalheMateriaComponent}
];
