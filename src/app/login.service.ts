import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private logued:boolean = false;
  constructor(private userService: UserService) { }

  login(usuario:string,contraseña:string){
    this.userService.getLista().forEach(user =>{
      if (user.usuario === usuario && user.contraseña === contraseña) {
        this.logued = true;
      }
    })
  }

  getAuthenticated(){
    return this.logued;
  }

}
