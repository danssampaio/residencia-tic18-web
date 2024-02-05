import { Component, OnInit } from '@angular/core';
import { DestaqueService } from '../../../services/destaque.service';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.css'],
})
export class DestaqueComponent implements OnInit {
  destaques: any[] = [];

  constructor(private unsplashService: DestaqueService) {}

  ngOnInit(): void {
    this.unsplashService.getDestaques().subscribe(
      (dados) => {
        this.destaques = dados;
      },
      (erro) => {
        console.error('Erro ao obter destaques do Unsplash:', erro);
      }
    );
  }
}
