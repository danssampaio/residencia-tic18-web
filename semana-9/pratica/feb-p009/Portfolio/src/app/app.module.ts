import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// WikiApi
import { MainWikiComponent } from './components/wiki-api/main/main.component';
import { BoldSearchPipe } from './pipes/bold-search.pipe';
import { ResultadoPesquisaComponent } from './components/wiki-api/resultado-pesquisa/resultado-pesquisa.component';
import { BarraPesquisaComponent } from './components/wiki-api/barra-pesquisa/barra-pesquisa.component';

// JReader
import { MainReaderComponent } from './components/jreader/main/main.component';
import { CarrinhoComponent } from './components/jreader/carrinho/carrinho.component';
import { ClassesComponent } from './components/jreader/classes/classes.component';
import { ObjetosComponent } from './components/jreader/objetos/objetos.component';
import { PropriedadesComponent } from './components/jreader/propriedades/propriedades.component';
import { ValorPropriedadeComponent } from './components/jreader/valor-propriedade/valor-propriedade.component';
import { CarregadorVeiculosComponent } from './components/jreader/carregador-veiculos/carregador-veiculos.component';
import { ClassHighlightDirective } from './directives/class-highlight.directive';
import { CarrinhoHighlightDirective } from './directives/carrinho-highlight.directive';


@NgModule({
  declarations: [
    AppComponent,

    //WikiComponent
    MainWikiComponent,
    ResultadoPesquisaComponent,
    BarraPesquisaComponent,
    BoldSearchPipe,
    MainReaderComponent,

    //jreaderComponent
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
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
