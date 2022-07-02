import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EnviarinfoComponent } from './enviarinfo/enviarinfo.component';
import { registerLocaleData } from '@angular/common';
import localPt from '@angular/common/locales/pt';

registerLocaleData(localPt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    EnviarinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide:LOCALE_ID, useValue: 'pt'},

    {provide: DEFAULT_CURRENCY_CODE,
     useValue: 'BRL'}

],

  bootstrap: [AppComponent]
})
export class AppModule { }
