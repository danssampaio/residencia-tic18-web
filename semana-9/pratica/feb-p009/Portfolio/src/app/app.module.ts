import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
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

@NgModule({
  declarations: [
    AppComponent,
    MainWikiComponent,
    ResultadoPesquisaComponent,
    BarraPesquisaComponent,
    BoldSearchPipe,
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
