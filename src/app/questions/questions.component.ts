import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pregunta } from '../pregunta';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @Input() pregunta!: Pregunta
  @Output() avanzar = new EventEmitter<boolean>();
  @Input() arrayRespuestas: any[] = [];

  ngOnInit() {
    this.arrayRespuestas.push(this.pregunta.incorrectAnswer[0]);
    this.arrayRespuestas.push(this.pregunta.incorrectAnswer[1]);
    this.arrayRespuestas.push(this.pregunta.incorrectAnswer[2]);
    this.arrayRespuestas.push(this.pregunta.correctAnswer);
    this.arrayRespuestas.sort(() => Math.random() - 0.5);
  }

  comprobarRespuesta(event: any) {
    if (event.target.textContent === this.pregunta.correctAnswer) {
      event.target.id = 'correcta';
      this.emitirAvanzar();
      
    }
  }

  emitirAvanzar() {
    this.avanzar.emit(true);
  }
}
