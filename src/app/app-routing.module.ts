import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { JuegoComponent } from './juego/juego.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'signin', component: SigninComponent},
  {path:'juego',component: JuegoComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
