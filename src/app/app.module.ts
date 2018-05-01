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


@NgModule({
  declarations: [
    AppComponent, MeuPrimeiroComponent, MeuPrimeiro2Component, DataBindingComponent, MeuFormComponent, InputPropertyComponent
  ],
  imports: [
    BrowserModule,
    CursosModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
