import {Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
  //outputs: ['mudouValor']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();
  @ViewChild('campoInput') campValorInput: ElementRef;

  incrementa() {
    console.log(this.campValorInput.nativeElement.value);
    this.campValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor:this.valor});
  }

  decrementa() {
    this.campValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor:this.valor});
  }

  constructor() { }

  ngOnInit() {
  }

}
