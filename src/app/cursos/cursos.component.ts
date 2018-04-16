import {Component, OnInit} from '@angular/core';
import {CursosService} from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomeRepositorio: any;
  repositorio: string[]

  constructor(private cursoService: CursosService ) {
    this.nomeRepositorio = 'http://github.com/PauloVictorSantos';
    this.repositorio = this.cursoService.getCursos();
  }


  ngOnInit() {
  }

}
