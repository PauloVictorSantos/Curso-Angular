import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})



export class DataBindingComponent  {

  url: string = 'https://github.com';
  cursoAngular:boolean =true;
  nomeDocurso:string = 'angular';
  getValor() {
    return 1;
  }
  urlImagem: string= "https://loremflickr.com/cache/resized/4577_38598851432_131216a7f8_320_240_nofilter.jpg";
  getCurtirCurso(){
    return true;
  }
   botaoclicado(){
      alert();
   }
 /* valorAtual: string = "";
  onKeyUp( evento: KeyboardEvent) {
    this.valorAtual = <HTMLInputElement>(evento.target).value;
  }
  valorSalvo:string="";
  salvarValor(valor){
    this.valorSalvo = valor;
  }
  isMouseOver: boolean = false;
  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }*/



}
