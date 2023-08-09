import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';
import { CstCidadesService } from './cst-cidades.service';

@Component({
  selector: 'app-cst-cidades',
  templateUrl: './cst-cidades.component.html',
  styleUrls: ['./cst-cidades.component.css'],
})
export class CstCidadesComponent implements OnInit {
  cidadesList: Array<any> = new Array();
  colunasTable: Array<any> = new Array();

  constructor(
    private CstCidadesService: CstCidadesService,
    private router: Router,
    private poNotification: PoNotificationService
  ) {}

  ngOnInit(): void {
    this.updateCidadesList(); //busca a lista em nosso Api
    this.colunasTable = this.CstCidadesService.getColumns(); //atualiza o titulo das colunas
  }
  //Metódo responsável por se isncrever no serviço e atualizar a lista de fornecedores
  updateCidadesList(): void {
    this.CstCidadesService.getCidadesList().subscribe((response) => {

      this.cidadesList = response;
      console.log(response);
      console.log(response);
      console.log(this.cidadesList);
    });
  }
}
