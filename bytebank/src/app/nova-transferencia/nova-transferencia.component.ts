import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  constructor(private service: TransferenciaService, private router: Router) {}

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  ngOnInit(): void {}

  transferir() {
    console.log('Solicitada nova transferêcnia...');
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };


    this.service.adicionar(valorEmitir).subscribe(
      (result) => {
        console.log(result);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
      (error) => console.error(error)
    );

  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
