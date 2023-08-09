import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';
import { CstCidadesService } from './cst-cidades.service';
import { Item } from './item';
import { timer } from 'rxjs';

@Component({
  selector: 'app-cst-cidades',
  templateUrl: './cst-cidades.component.html',
  styleUrls: ['./cst-cidades.component.css'],
})
export class CstCidadesComponent implements OnInit {
  cidadesList: Array<Item> = new Array();
  paginaAtual: number = 1;
  colunasTable: Array<any> = new Array();
  filtro: string = '';
  constructor(
    private CstCidadesService: CstCidadesService,
    private router: Router,
    private poNotification: PoNotificationService
  ) {}

  ngOnInit(): void {
    this.CstCidadesService.getCidadesList(
      this.paginaAtual,
      this.filtro
    ).subscribe((response) => {
      this.cidadesList = response;
    }); //busca a lista em nosso Api
    this.colunasTable = this.CstCidadesService.getColumns(); //atualiza o titulo das colunas
  }
  //Metódo responsável por se isncrever no serviço e atualizar a lista de fornecedores
  updateCidadesList() {
    console.log('teste');
    this.CstCidadesService.getCidadesList(
      ++this.paginaAtual,
      this.filtro
    ).subscribe((listaCidades) => {
      this.cidadesList.push(...listaCidades);
    });
  }

  filtrarElemento() {
    this.paginaAtual = 1;
    this.CstCidadesService.getCidadesList(
      this.paginaAtual,
      this.filtro
    ).subscribe((listaCidades) => {
      this.cidadesList = listaCidades;
    });
  }
}
