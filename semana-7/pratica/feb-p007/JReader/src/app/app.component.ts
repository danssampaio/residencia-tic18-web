import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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

}
