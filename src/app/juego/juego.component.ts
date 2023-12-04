
import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Pregunta } from '../pregunta';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit{
  listaPreguntas: any[] = []
  preguntaActual!:Pregunta
  arrayRespuestas: any[] = [];
  indexPregunta = 0;
  resultados: boolean[] = []
  constructor(private questionsService:QuestionsService){
    
  }
  ngOnInit(): void {
    this.questionsService.getListaPreguntas().subscribe((data) => {
      this.listaPreguntas = data;
      this.preguntaActual = this.listaPreguntas[this.indexPregunta];
    });
    this.arrayRespuestas.push(this.preguntaActual.incorrectAnswer[0]);
    this.arrayRespuestas.push(this.preguntaActual.incorrectAnswer[1]);
    this.arrayRespuestas.push(this.preguntaActual.incorrectAnswer[2]);
    this.arrayRespuestas.push(this.preguntaActual.correctAnswer);
    this.arrayRespuestas.sort(() => Math.random() - 0.5);
  }


  siguientePregunta(){
    this.indexPregunta++;
    this.preguntaActual = this.listaPreguntas[this.indexPregunta]
    this.arrayRespuestas = [];
    this.arrayRespuestas.push(this.preguntaActual.incorrectAnswer[0]);
    this.arrayRespuestas.push(this.preguntaActual.incorrectAnswer[1]);
    this.arrayRespuestas.push(this.preguntaActual.incorrectAnswer[2]);
    this.arrayRespuestas.push(this.preguntaActual.correctAnswer);
    this.arrayRespuestas.sort(() => Math.random() - 0.5);
    this.resultados.push(true);
  }
}
