import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainWikiComponent } from './components/wiki-api/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/wiki-api', pathMatch: 'full' },
  { path: 'wiki-api', component: MainWikiComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
