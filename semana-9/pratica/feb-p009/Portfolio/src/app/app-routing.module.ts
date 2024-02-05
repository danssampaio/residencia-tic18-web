import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainWikiComponent } from './components/wiki-api/main/main.component';
import { MainReaderComponent } from './components/jreader/main/main.component';

const routes: Routes = [
  { path: 'wiki-api', component: MainWikiComponent },
  { path: 'jreader', component: MainReaderComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
