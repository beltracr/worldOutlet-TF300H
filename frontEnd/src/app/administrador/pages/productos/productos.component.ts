import { Component, inject } from '@angular/core';
import { NgForOf } from "@angular/common";
import { ProductsService } from '../../../services/products.service';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { UsersService } from '../../../services/users.service';
import { HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Products } from '../../../interfaces/products';







@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    NgForOf, FormsModule
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



  borrarProducto(id: string) {
    console.log("producto que se borrara tiene el id =", id);
    let isConfirm: boolean = false 
    isConfirm = confirm("Esta seguro que quiere eliminar este producto");
    if (isConfirm){
      this.producto.deleteProducts(id).subscribe((res: any) => {
        try {
          if (res) {
            console.log("res", res);
            alert("Se elimino correctamente")
            this.obtenerProductos()
          }
        } catch (error) { console.log(error) }
      })
    }
  }

 

// logica para crear producto

  crearProductos() {

    if (!this.nombre || !this.imagen || !this.descripcion ||
      !this.talla || !this.color || !this.categoria ||
      !this.cantidad || !this.precio) {
      console.log("se debe ingresar todos los campos")
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
          }
        } catch (error) { alert(error) }
      })
    }
  }

  identificarId(id: string) {
    this.editarProductoId = id;
    this.editMode = true;
    this.mostrarFormulario = true;
    console.log(this.editarProductoId);
  }

  editarProductos() {

    if (!this.nombre || !this.imagen || !this.descripcion ||
      !this.talla || !this.color || !this.categoria ||
      !this.cantidad || !this.precio) {
      console.log("se debe ingresar todos los campos")
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
              console.log("res", res)

            }
          })
        }
      } catch (error) {
        console.log(error)

      }

    }

  }





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