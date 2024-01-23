import { Component } from '@angular/core';
import { WikipediaService } from './services/wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
