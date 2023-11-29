import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  formularioSignIn!: FormGroup

  constructor(private userService: UserService,private router:Router){
    this.formularioSignIn = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      correo: new FormControl('',[Validators.required]),
      usuario: new FormControl('',[Validators.required]),
      contraseña: new FormControl('',[Validators.required,Validators.minLength(8)]),
    })
  }

  anadirUsuario(){
    if (this.formularioSignIn.valid) {
      this.userService.anadirUsuario(
        this.formularioSignIn.get('nombre')?.value,
        this.formularioSignIn.get('correo')?.value,
        this.formularioSignIn.get('usuario')?.value,
        this.formularioSignIn.get('contraseña')?.value
      )

      this.router.navigate(['login'])

    }
  }

}
