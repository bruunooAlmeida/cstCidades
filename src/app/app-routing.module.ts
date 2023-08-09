import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CstCidadesComponent } from './cst-cidades/cst-cidades.component';

const routes: Routes = [
  { path: '', component: CstCidadesComponent },
  { path: 'cidades', component: CstCidadesComponent }, //lista de cidades
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
