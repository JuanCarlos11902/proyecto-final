import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pregunta } from './pregunta';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { 
  }

  getListaPreguntas(): Observable<Pregunta[]> {
    return this.http.get<Pregunta[]>('http://localhost:5000/obtener-preguntas-generales');
  }
}
