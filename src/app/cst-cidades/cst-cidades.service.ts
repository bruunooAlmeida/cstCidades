import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PoTableColumn } from '@po-ui/ng-components';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CstCidadesService {
  //Endereço da nossa API responsável por lista
  ApiRest = 'http://localhost:3000/items';

  constructor(private http: HttpClient) {}

  //Método responsável por buscar e listar registros
  getCidadesList(): Observable<any> {
    return this.http.get(this.ApiRest);
  }

  //Método para editarmos o nome das colunas de forma mais apresentavel
  // por exemplo cdnMunpioIbge que apresentamos como Cód.IBGE, mais amigavel ao usuario
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'cidade', label: 'Cidade' },
      { property: 'estado', label: 'Estado' },
      { property: 'sigla', label: 'sigla' },
      { property: 'cdnMunpioIbge', label: 'Cód.IBGE' },
      { property: 'pais', label: 'País' },
    ];
  }
}
