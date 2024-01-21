import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { ClassesComponent } from './components/classes/classes.component';
import { ObjetosComponent } from './components/objetos/objetos.component';
import { PropriedadesComponent } from './components/propriedades/propriedades.component';
import { ValorPropriedadeComponent } from './components/valor-propriedade/valor-propriedade.component';
import { ClassHighlightDirective } from './directives/class-highlight.directive';
import { CarrinhoHighlightDirective } from './directives/carrinho-highlight.directive';
import { CarregadorVeiculosComponent } from './components/carregador-veiculos/carregador-veiculos.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    ClassesComponent,
    ObjetosComponent,
    PropriedadesComponent,
    ValorPropriedadeComponent,
    ClassHighlightDirective,
    CarrinhoHighlightDirective,
    CarregadorVeiculosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
