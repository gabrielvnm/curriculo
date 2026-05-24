import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacaoComponent } from './educacao/educacao.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "experiencia", component: ExperienciaComponent },
  { path: "educacao", component: EducacaoComponent },
  { path: "habilidades", component: HabilidadesComponent },
  { path: '**', redirectTo: '/home' } 
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

console.log('Routes configured:', routes);
