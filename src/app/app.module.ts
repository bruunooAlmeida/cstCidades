import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CstCidadesComponent } from './cst-cidades/cst-cidades.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CstCidadesBotaoComponent } from './cst-cidades/cst-cidades-botao/cst-cidades-botao.component';

@NgModule({
  declarations: [
    AppComponent,
    CstCidadesComponent,
    CstCidadesBotaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
