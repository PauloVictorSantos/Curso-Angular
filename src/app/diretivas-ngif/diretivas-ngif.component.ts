import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngif',
  templateUrl: './diretivas-ngif.component.html',
  styleUrls: ['./diretivas-ngif.component.css']
})
export class DiretivasNgifComponent implements OnInit {

  curso: string[] = ['angular' ];

  mostrarCursos: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

}
