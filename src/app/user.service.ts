import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private listaUsuarios: Array<any> = new Array()
  constructor() { 

    this.listaUsuarios.push({
      nombre: "Juan Carlos",
      correo: "jcperezromero02@gmail.com",
      usuario: "juancarlos",
      contraseña: "juancarlos"
    })
    this.listaUsuarios.push({
      nombre: "Christian",
      correo: "christian@gmail.com",
      usuario: "christian",
      contraseña: "christian"
    })
    this.listaUsuarios.push({
      nombre: "Cayetano",
      correo: "cayetano@gmail.com",
      usuario: "cayetano",
      contraseña: "cayetano"
    })

  }

  getLista(){
    let listaCopia: Array<any> = new Array();
    this.listaUsuarios.forEach(usuario => {
      listaCopia.push(usuario)
    });
      return listaCopia;
    }

    anadirUsuario(nombre:string,correo:string,usuario:string,contraseña:string){
      let objeto = {
        nombre: nombre,
        correo: correo,
        usuario:correo,
        contraseña:contraseña
      }
      this.listaUsuarios.push(objeto)
    }
    
}
