import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColtecComponent } from './coltec/coltec.component';
import { GoogleComponent } from './google/google.component';
import { UfmgComponent } from './ufmg/ufmg.component';

@NgModule({
  declarations: [
    AppComponent,
    ColtecComponent,
    GoogleComponent,
    UfmgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
