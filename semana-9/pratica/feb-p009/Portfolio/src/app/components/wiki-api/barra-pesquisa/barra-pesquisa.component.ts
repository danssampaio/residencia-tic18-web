import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})

export class BarraPesquisaComponent {
  @Output() termoPesquisaEvent = new EventEmitter<string>();
  termoPesquisa: string = '';

  buscar() {
    this.termoPesquisaEvent.emit(this.termoPesquisa);
  }
}
