import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
  @Input() veiculos: any[] = [];
  @Output() categoriaSelecionada = new EventEmitter<string>();

  categorias: string[] = [];

  ngOnChanges() {
    if (this.veiculos) {
      this.categorias = Object.keys(this.veiculos);
    }
  }

  selecionarCategoria(categoria: string) {
    this.categoriaSelecionada.emit(categoria);
  }
}

