import { Component, inject } from '@angular/core';
import { NavComponent } from '../../component/nav/nav.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { InicioComponent } from '../inicio/inicio.component';
import { RouterLink } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Users } from '../../interfaces/users';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgForOf } from "@angular/common";
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [NavComponent, FooterComponent, InicioComponent, RouterLink, NgForOf, FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  usuarios = inject(UsersService)
  todosUsuarios:any[] = [];
  id: string = "";
  nombre: string = "";
  correo: string = "";
  contrasena: string = "";
  numeroTelefono: number = 0;
  direccion: string = " ";

  constructor(private router: Router ){}
  goBack  (){
    this.router.navigate(["/inicio"])
  }


  errorCrear() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes ingresar todos los valores",
      footer: '<a href="/admin">¿quieres volver atras?</a>'
    });
  }

  crearUsuarios() {

    if (!this.nombre || !this.correo || !this.contrasena ||
      !this.numeroTelefono || !this.direccion) {
      console.log("se debe ingresar todos los campos")
      this.errorCrear()

    } else {
      const nuevoUsuario: Users = {
        nombre: this.nombre,
        correo: this.correo,
        contrasena: this.contrasena,
        numeroTelefono: this.numeroTelefono,
        direccion: this.direccion
      }
      this.usuarios.postUsers(nuevoUsuario).subscribe((res: any) => {
        try {
          if (res) {
            console.log("res", res);
            this.notificacionCrear()
            this.goBack  ()          
          }
        } catch (error) { alert(error) }
      })
    }
  }

  notificacionCrear(){

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Usuario creado con exito",
      showConfirmButton: false,
      timer: 1500
    });
  }



}
