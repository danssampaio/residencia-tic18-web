import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carregador-veiculos',
  templateUrl: './carregador-veiculos.component.html',
  styleUrls: ['./carregador-veiculos.component.css'],
})

export class CarregadorVeiculosComponent {
  @Output() veiculosCarregados = new EventEmitter<{ categorias: string[], veiculos: any[] }>();

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        const veiculos = JSON.parse(content);
        const categorias = Object.keys(veiculos);
        this.veiculosCarregados.emit({ categorias, veiculos });
      };

      reader.readAsText(file);
    }
  }
}
