import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrls: ['./propriedades.component.css']
})
export class PropriedadesComponent {
  @Input() veiculoSelecionado: any;
  @Output() propriedadeSelecionada = new EventEmitter<string>();

  propriedadesVeiculo: string[] = [];

  ngOnChanges() {
    if (this.veiculoSelecionado) {
      this.propriedadesVeiculo = Object.keys(this.veiculoSelecionado);
    }
  }

  selecionarPropriedade(propriedade: string) {
    this.propriedadeSelecionada.emit(propriedade);
  }
}
