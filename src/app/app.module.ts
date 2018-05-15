import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MeuPrimeiroComponent} from './meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import {CursosModule} from './cursos/cursos.module';
import { DataBindingComponent } from './meu-primeiro/data-binding/data-binding.component';
import {FormsModule} from '@angular/forms';
import { MeuFormComponent } from './meu-form/meu-form.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { DiretivasNgifComponent } from './diretivas-ngif/diretivas-ngif.component';


@NgModule({
  declarations: [
    AppComponent, MeuPrimeiroComponent, MeuPrimeiro2Component, DataBindingComponent, MeuFormComponent, InputPropertyComponent, OutputPropertyComponent, CicloComponent, DiretivasNgifComponent
  ],
  imports: [
    BrowserModule,
    CursosModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
