import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColtecComponent } from './coltec/coltec.component';
import { GoogleComponent } from './google/google.component';
import { UfmgComponent } from './ufmg/ufmg.component';

const routes: Routes = [
  {path: 'coltec', component: ColtecComponent},
  {path: 'google', component: GoogleComponent},
  {path: 'ufmg', component: UfmgComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
