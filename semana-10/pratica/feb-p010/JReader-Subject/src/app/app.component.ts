import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  veiculos: any[] = [];
  veiculosSelecionados: any[] = [];
  categoriaSelecionada: string = "";
  veiculoSelecionado: any;
  propriedadeSelecionada: string = "";

 onVeiculosCarregados(veiculosData: any) {
  this.veiculos = veiculosData.veiculos;
}
  
onCategoriaSelecionada(categoria: string) {
  this.categoriaSelecionada = categoria;
  this.veiculoSelecionado = null;
  this.propriedadeSelecionada = "";
  console.log('Categoria selecionada:', this.categoriaSelecionada);
}
  
  onVeiculoSelecionado(veiculo: any) {
    this.veiculoSelecionado = veiculo;
    this.propriedadeSelecionada = "";
  }
  
  onPropriedadeSelecionada(propriedade: string) {
    this.propriedadeSelecionada = propriedade;
  }

  adicionarAoCarrinho(event: { veiculo: any, propriedade: string }) {
    const { veiculo, propriedade } = event;
    const veiculoNoCarrinho = { ...veiculo, propriedade };
    this.veiculosSelecionados.push(veiculoNoCarrinho);
  }

  removerVeiculo(veiculo: any) {
    const index = this.veiculosSelecionados.indexOf(veiculo);
    if (index !== -1) {
      this.veiculosSelecionados.splice(index, 1);
    }
  }

  finalizarCarrinho(veiculosSelecionados: any) {
    const jsonContent = JSON.stringify(veiculosSelecionados, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'veiculos_selecionados.json';
    link.click();
  }

}
