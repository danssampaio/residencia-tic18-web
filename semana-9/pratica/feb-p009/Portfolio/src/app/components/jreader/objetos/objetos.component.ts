import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrls: ['./objetos.component.css']
})
export class ObjetosComponent {
  @Input() categoriaSelecionada: any;
  @Input() veiculos: any[]  = [];
  @Output() veiculoSelecionado = new EventEmitter<any>();

  veiculosCategoria: any[] = [];

  ngOnChanges() {
    if (this.categoriaSelecionada && this.veiculos) {
      this.veiculosCategoria = this.veiculos[this.categoriaSelecionada] || [];
      console.log('Veículos da categoria:', this.veiculosCategoria);
    }
  }

  selecionarVeiculo(veiculo: any) {
    this.veiculoSelecionado.emit(veiculo);
  }
}
