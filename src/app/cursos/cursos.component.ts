import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomeRepositorio: any;
  repositorio: string[] = ['java', 'angular', 'note'];

  constructor() {
    this.nomeRepositorio = 'http://github.com/PauloVictorSantos';
  }

  ngOnInit() {
  }

}
