import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-valor-propriedade',
  templateUrl: './valor-propriedade.component.html',
  styleUrls: ['./valor-propriedade.component.css']
})
export class ValorPropriedadeComponent {
  @Input() propriedadeSelecionada: string = "";
  @Input() veiculoSelecionado: any;
  @Output() adicionarAoCarrinho = new EventEmitter<{ veiculo: any, propriedade: string }>();

  get valorPropriedade(): any {
    return this.veiculoSelecionado ? this.veiculoSelecionado[this.propriedadeSelecionada] : null;
  }

  adicionarCarrinho() {
    this.adicionarAoCarrinho.emit({ veiculo: this.veiculoSelecionado, propriedade: this.propriedadeSelecionada });
  }
}
