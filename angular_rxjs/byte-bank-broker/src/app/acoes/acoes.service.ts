import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck, tap } from 'rxjs/operators';
import { Acao, Acoes } from './modelo/acoes';
@Injectable({
  providedIn: 'root',
})
export class AcoesService {
  constructor(private httpClient: HttpClient) {}

  getAcoes(): any {
    return this.httpClient.get<any>('http://localhost:3000/acoes').pipe(
      tap((data) => console.log(data)),
      //map((api) => api.payload),
      pluck('payload'),
      map((acoes) =>
        acoes.sort((acaoA, acaoB) => this.ordenaPorCodigo(acaoA, acaoB))
      )
    );
  }

  private ordenaPorCodigo(acaoA: Acao, acaoB: Acao) {
    if (acaoA.codigo > acaoB.codigo) return 1;

    if (acaoA.codigo < acaoB.codigo) return -1;

    return 0;
  }
}
