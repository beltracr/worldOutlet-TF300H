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
  ngOnInit(){
    this.obtenerProductos()
  }


}