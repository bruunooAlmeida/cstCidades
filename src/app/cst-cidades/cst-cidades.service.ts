import { Item } from './item';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

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
  getCidadesList(pagina: number, filtro: string): Observable<Item[]> {
    const itensPorPagina = 6;
    let params = new HttpParams()
      .set('_page', pagina)
      .set('_limit', itensPorPagina);
    if (filtro.trim().length > 2) {
      params = params.set('q', filtro);
    }

    return this.http.get<Item[]>(this.ApiRest, { params });
  }

  //Método para editarmos o nome das colunas de forma mais apresentavel
  // por exemplo cdnMunpioIbge que apresentamos como Cód.IBGE, mais amigavel ao usuario
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'cidade', label: 'Cidade' },
      { property: 'sigla', label: 'sigla' },
      { property: 'pais', label: 'País' },
    ];
  }
}
