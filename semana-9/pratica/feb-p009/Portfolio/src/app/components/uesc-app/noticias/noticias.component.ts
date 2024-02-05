// noticias.component.ts
import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../../services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
})
export class NoticiasComponent implements OnInit {
  noticiasCursosSuperiores: any[] = [];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(): void {
    this.noticiasService.getNoticiasCursosSuperiores().subscribe(
      (data) => {
        this.noticiasCursosSuperiores = data.articles;
      },
      (error) => {
        console.error('Erro ao obter notícias de cursos superiores:', error);
      }
    );
  }
}
