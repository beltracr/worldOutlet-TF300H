import { Component, inject } from '@angular/core';
import { NgForOf } from "@angular/common";
import { UsersService } from '../../../services/users.service';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { Users } from '../../../interfaces/users';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    NgForOf, FormsModule,
  ],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  usuarios = inject(UsersService)
  loginService = inject(LoginService)


  todosUsuarios:any[] = [];
  mostrarFormulario: boolean = false;
  id: string = "";
  nombre: string = "";
  correo: string = "";
  contrasena: string = "";
  numeroTelefono: number = 0;
  direccion: string = " ";

  // 
  //crear

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
            this.obtenerusuarios()
            this.notificacionCrear()
           this.toggleDiv()
            
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

// 
// 
// 
// 
// 
// 
// obtener
obtenerusuarios(){
  this.usuarios.getUsers().subscribe((res: any) => {
    try {
      if (res) {
        console.log("res", res);
      this.todosUsuarios = res.datos
        
      
      }
    } catch (error) { console.log(error) }
  })

}
// 
// 
// 
// 
// eliminar usuarios

botonBorrar(id: string){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "¿Estas seguro de eliminar el usuario seleccionado?",
    text: "¡No podras revertirlo!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Si, eliminar",
    cancelButtonText: "No, cancelar!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {


      this.borrarUsuarios(id)
      swalWithBootstrapButtons.fire({
        title: "Enhorabuena",
        text: "El usuario ha sido eliminado",
        icon: "success"
      });
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "cancelado",
        text: "Tu usuario no se elimino",
        icon: "error"
      });
    }
  });

}



borrarUsuarios(id: string){
  this.usuarios.deleteById(id).subscribe((res: any) => {
    try {
      if (res) {
        console.log("res", res);
        console.log("Se elimino correctamente")
        this.obtenerusuarios()
      }
    } catch (error) { console.log(error) }
  })

}





ngOnInit() {
  this.obtenerusuarios()

}


toggleDiv() {
  this.mostrarFormulario = !this.mostrarFormulario;
  if (!this.mostrarFormulario) {
    this.nombre = " ";
    this.correo = " ";
    this.contrasena = " ";
    this.numeroTelefono = 0;
    this.direccion = " ";

  }
}

 
}
