import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  constructor() {}

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  ngOnInit(): void {}

  transferir() {
    console.log('Solicitada nova transferêcnia...');
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valorEmitir);
    this.limparCampos();
    // console.log('valor', this.valor);
    // console.log('destino', this.destino);
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

}
