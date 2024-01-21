import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesComponent } from './components/classes/classes.component';
import { ObjetosComponent } from './components/objetos/objetos.component';
import { ClassHighlightDirective } from './directives/class-highlight.directive';
import { CarregadorVeiculosComponent } from './components/carregador-veiculos/carregador-veiculos.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    ObjetosComponent,
    ClassHighlightDirective,
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
