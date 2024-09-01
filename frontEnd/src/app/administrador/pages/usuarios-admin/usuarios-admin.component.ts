import { Component, inject } from '@angular/core';
import { NgForOf } from "@angular/common";
import { AdminService } from '../../../services/admin.service';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { Admin } from '../../../interfaces/admin';
import Swal from 'sweetalert2';






@Component({
  selector: 'app-usuarios-admin',
  standalone: true,
  imports: [
    NgForOf, FormsModule
  ],
  templateUrl: './usuarios-admin.component.html',
  styleUrl: './usuarios-admin.component.css'
})
export class UsuariosAdminComponent {

  admin = inject(AdminService)
  loginSevice = inject(LoginService)

  todosAdministradores:any[] = [];
  mostrarFormulario: boolean = false;
  id: string = "";
  nombre: string = "";
  correo: string = "";
  contrasena: string = "";
  categoriaAdmin: boolean = false;

  //crear
 
  errorCrear() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes ingresar todos los valores",
      footer: '<a href="/admin">¿quieres volver atras?</a>'
    });
  }

  crearAdmin() {

    if (!this.nombre || !this.correo || !this.contrasena ||
      !this.categoriaAdmin) {
      console.log("se debe ingresar todos los campos")
      this.errorCrear()

    } else {
      const nuevoAdministrador: Admin = {
        nombre: this.nombre,
        correo: this.correo,
        contrasena: this.contrasena,
        categoriaAdmin: this.categoriaAdmin
        
        
      }
      this.admin.postAdmin(nuevoAdministrador).subscribe((res: any) => {
        try {
          if (res) {
            console.log("res", res);
            this.obtenerAdmin()
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
    title: "Administrador creado con exito",
    showConfirmButton: false,
    timer: 1500
  });
}

//obtener

obtenerAdmin(){
  this.admin.getAdmin().subscribe((res: any) => {
    try {
      if (res) {
        console.log("res", res);
      this.todosAdministradores = res.datos
        
      
      }
    } catch (error) { console.log(error) }
  })

}

// Eliminar

botonBorrar(id: string){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "¿Estas seguro de eliminar el Administrador seleccionado?",
    text: "¡No podras revertirlo!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Si, eliminar",
    cancelButtonText: "No, cancelar!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {


      this.borrarAdmin(id)
      swalWithBootstrapButtons.fire({
        title: "Enhorabuena",
        text: "El administrador ha sido eliminado",
        icon: "success"
      });
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "cancelado",
        text: "Tu administrador no se elimino",
        icon: "error"
      });
    }
  });

}



borrarAdmin(id: string){
  this.admin.deleteAdmin(id).subscribe((res: any) => {
    try {
      if (res) {
        console.log("res", res);
        console.log("Se elimino correctamente")
        this.obtenerAdmin()
      }
    } catch (error) { console.log(error) }
  })

}


ngOnInit() {
  this.obtenerAdmin()

}


toggleDiv() {
  this.mostrarFormulario = !this.mostrarFormulario;
  if (!this.mostrarFormulario) {
    this.nombre = " ";
    this.correo = " ";
    this.contrasena = " ";
    this.categoriaAdmin = false;
    

  }
}





  
}
