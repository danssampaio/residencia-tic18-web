import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../../../services/servicos.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css'],
})

export class ServicosComponent implements OnInit {
  servicos: any[] = [];

  constructor(private servicosService: ServicosService) {}

  ngOnInit(): void {
    this.servicosService.getServicos().subscribe(
      (data) => {
        this.servicos = data;
      },
      (error) => {
        console.error('Erro ao obter serviços:', error);
      }
    );
  }
}
