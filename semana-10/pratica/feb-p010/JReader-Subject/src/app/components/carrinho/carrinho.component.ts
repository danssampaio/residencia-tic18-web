import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})

export class CarrinhoComponent {
  @Input() veiculosSelecionados: any[] = [];
  @Output() veiculoRemovido = new EventEmitter<any>();
  @Output() carrinhoFinalizado = new EventEmitter<any>();

  removerVeiculo(veiculo: any) {
    const index = this.veiculosSelecionados.indexOf(veiculo);
    if (index !== -1) {
      this.veiculosSelecionados.splice(index, 1);
      this.veiculoRemovido.emit(veiculo);
    }
  }

  concluirCarrinho(veiculosSelecionados: any) {
    this.carrinhoFinalizado.emit(veiculosSelecionados);
  }
}
