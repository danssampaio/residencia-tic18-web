import { Component, OnInit } from '@angular/core';
import { ResultadoServices } from '../../../services/resultados.service ';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css'
})

export class ResultadosComponent implements OnInit {
  resultados: any[] = [];

  constructor(private resultadosService: ResultadoServices) {}

  ngOnInit(): void {
    this.resultadosService.getServicos().subscribe(
      (data) => {
        this.resultados = data;
      },
      (error) => {
        console.error('Erro ao obter serviços:', error);
      }
    );
  }
}
