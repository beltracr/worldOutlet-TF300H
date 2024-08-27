import { Component, inject } from '@angular/core';
import {NgForOf} from "@angular/common";
import { ProductsService } from '../../../services/products.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    NgForOf,FormsModule
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

  producto = inject(ProductsService)


  todosProductos: any[]=[]
  mostrarFormulario: boolean = false;
  id:string = " ";
  nombre:string = " ";
  imagen:string = " ";
  descripcion:string = " ";
  talla:[string] = [""];
  color: [string]= [""];
  categoria: string = " ";
  cantidad:number = 0;
  precio:number = 0;
  editMode: boolean = false;
  editarProductoId: string | null = null;


  obtenerProductos(){
    this.producto.getProducts().subscribe((res: any) =>{
      if (res){
        console.log("res",res);
        this.todosProductos = res
      } else {
        console.error('hubo un error');
      }
      })

  }

  borrarProducto(id:string){

  }

  crearProductos(){

  }
 editarProductos(){

  }

  identificarId(id:string) {
    this.editarProductoId = id;
     this.editMode = true;
     this.mostrarFormulario = true;
     console.log(this.editarProductoId);
   }



  ngOnInit(){
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