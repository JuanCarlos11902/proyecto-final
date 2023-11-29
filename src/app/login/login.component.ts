import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin!: FormGroup
  constructor(private loginService: LoginService, private router:Router){
    this.formLogin = new FormGroup({
      usuario: new FormControl('',[Validators.required]),
      contraseña: new FormControl('',[Validators.required,Validators.minLength(8)])
    })
  }

  checkUser(){
    if (this.formLogin.get("usuario")?.valid && this.formLogin.get("contraseña")?.valid ) {
      this.loginService.login(this.formLogin.get("usuario")?.value,this.formLogin.get("contraseña")?.value)
      this.router.navigate(['juego']);
    }
  }

  cambiarFormulario(){
    this.router.navigate(['signin']);
  }
}
