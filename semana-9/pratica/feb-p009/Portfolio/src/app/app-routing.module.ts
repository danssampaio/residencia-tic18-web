import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainWikiComponent } from './components/wiki-api/main/main.component';
import { MainReaderComponent } from './components/jreader/main/main.component';
import { MainUescComponent } from './components/uesc-app/main/main.component';


const routes: Routes = [
  { path: '', redirectTo: '/wiki-api', pathMatch: 'full' },
  { path: 'wiki-api', component: MainWikiComponent },
  { path: 'jreader', component: MainReaderComponent },
  { path: 'uesc-app', component: MainUescComponent }
];

export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
