import { Component } from '@angular/core';
import { WikipediaService } from '../../../services/wikipedia.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainWikiComponent {
  termoPesquisa: string = '';
  resultados: any[] = [];

  constructor(private wikipediaService: WikipediaService) {}

  pesquisar(termo: string) {
    this.termoPesquisa = termo;
    this.wikipediaService.search(termo).subscribe(data => {
      this.resultados = data.query.search;
    });
  }
}
