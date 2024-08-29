import { Component, inject } from '@angular/core';
import { NgForOf } from "@angular/common";
import { ProductsService } from '../../../services/products.service';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { UsersService } from '../../../services/users.service';
import { HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Products } from '../../../interfaces/products';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';













@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    NgForOf, FormsModule,
  ],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
//export class ProductosComponent {
// productos = [
// { id: 1, categoria: 'Hombre', nombre: 'Nike AirForze', cantidad: 50, imagen: "assets/images/logo.png" },
//{ id: 2, categoria: 'Mujer', nombre: 'Blusa Nike', cantidad: 30, imagen: "assets/images/logo.png" },
// Más productos...
//];
//}

export class ProductosComponent {

  producto = inject(ProductsService);
  loginService = inject(LoginService);





  todosProductos: any[] = []
  mostrarFormulario: boolean = false;
  id: string = " ";
  nombre: string = " ";
  imagen: string = " ";
  descripcion: string = " ";
  talla: [string] = [""];
  color: [string] = [""];
  categoria: string = " ";
  cantidad: number = 0;
  precio: number = 0;
  editMode: boolean = false;
  editarProductoId: string | null = null;


 todosLosCampos(){
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "se debe ingresar todos los campos",
    footer: '<a href="/admin/inventario">¿Quieres ir atras?</a>'
  });
 }



  obtenerProductos() {
    this.producto.getProducts().subscribe((res: any) => {
      try {
        if (res) {
          console.log("res", res);
          this.todosProductos = res
        }
      } catch (error) { console.log(error) }
    })

  }
// 
// 
// 
// 
// borrar

botonBorrar(id:string){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "¿Estas seguro de eliminar el producto seleccionado?",
    text: "¡No podras revertirlo!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Si, eliminar",
    cancelButtonText: "No, cancelar!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {

      
      this.borrarProducto(id)
      swalWithBootstrapButtons.fire({
        title: "Enhorabuena",
        text: "El producto ha sido editado",
        icon: "success"
      });
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "cancelado",
        text: "Tu producto no se elimino",
        icon: "error"
      });
    }
  });

}




  borrarProducto(id: string) {

      this.producto.deleteProducts(id).subscribe((res: any) => {
        try {
          if (res) {
            console.log("res", res);
            console.log("Se elimino correctamente")
            this.obtenerProductos()
          }
        } catch (error) { console.log(error) }
      })
    }
  
// 
// 
// 
// 
// 
// 
//   Crear 

  crearProductos() {

    if (!this.nombre || !this.imagen || !this.descripcion ||
      !this.talla || !this.color || !this.categoria ||
      !this.cantidad || !this.precio) {
      console.log("se debe ingresar todos los campos")
      this.errorCrear()
      
    } else {

      const nuevoProducto: Products = {
        nombre: this.nombre,
        imagen: this.imagen,
        descripcion: this.descripcion,
        talla: this.talla,
        color: this.color,
        categoria: this.categoria,
        cantidad: this.cantidad,
        precio: this.precio
      }
      this.producto.postProducts(nuevoProducto).subscribe((res: any) => {
        try {
          if (res) {
            console.log("res", res)
            this.obtenerProductos()
            this.notificacionCrear()
          }
        } catch (error) { alert(error) }
      })
    }
  }

notificacionCrear(){
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500
  });
}

errorCrear(){
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Debes ingresar todos los valores",
    footer: '<a href="/admin">¿quieres volver atras?</a>'
  });
}




// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
//editar:




  identificarId(id: string) {
    this.editarProductoId = id;
    this.editMode = true;
    this.mostrarFormulario = true;
    console.log(this.editarProductoId);
  }

  botonEditar() {

    if (!this.nombre || !this.imagen || !this.descripcion ||
      !this.talla || !this.color || !this.categoria ||
      !this.cantidad || !this.precio) {
      console.log("se debe ingresar todos los campos")
      this.todosLosCampos()
      
    } else {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "¿Estas seguro de editar el producto seleccionado?",
      text: "¡No podras revertirlo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, editar",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.editarProductos()
        swalWithBootstrapButtons.fire({
          title: "Enhorabuena",
          text: "El producto ha sido editado",
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "cancelado",
          text: "Tu producto sigue igual",
          icon: "error"
        });
      }
    });
  }}

  editarProductos() {


    if (!this.nombre || !this.imagen || !this.descripcion ||
      !this.talla || !this.color || !this.categoria ||
      !this.cantidad || !this.precio) {
      alert("se debe ingresar todos los campos")
      
    } else {
      try {

        const productoActualizado: Products = {
          nombre: this.nombre,
          imagen: this.imagen,
          descripcion: this.descripcion,
          talla: this.talla,
          color: this.color,
          categoria: this.categoria,
          cantidad: this.cantidad,
          precio: this.precio
        }
        if (this.editarProductoId) {
          this.producto.updateProducts(productoActualizado, this.editarProductoId).subscribe((res: any) => {
            if (res) {
              console.log("res", res);
              console.log("se elimino correctamente")
              this.obtenerProductos()

            }
          })
        }
      } catch (error) {
        console.log(error)
      }

    }

  }
// 
// 
// 
// 
// 
// 


  ngOnInit() {
    this.obtenerProductos()
  }
  toggleDiv() {
    this.mostrarFormulario = !this.mostrarFormulario;
    if (!this.mostrarFormulario) {
      this.nombre = " ";
      this.imagen = " ";
      this.descripcion = " ";
      this.talla = [""];
      this.color = [""];
      this.categoria = " ";
      this.cantidad = 0;
      this.precio = 0;
      this.editMode = false;
      this.editarProductoId = null;
    }
  }


}