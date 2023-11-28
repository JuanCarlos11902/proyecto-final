import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { JuegoComponent } from './juego/juego.component';
import { QuestionsComponent } from './questions/questions.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { UserService } from './user.service';
import { LoginService } from './login.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    JuegoComponent,
    QuestionsComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UserService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
