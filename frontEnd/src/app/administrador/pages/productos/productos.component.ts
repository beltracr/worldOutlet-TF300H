import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos = [
    { id: 1, categoria: 'Hombre', nombre: 'Nike AirForze', cantidad: 50, imagen: "assets/images/logo.png" },
    { id: 2, categoria: 'Mujer', nombre: 'Blusa Nike', cantidad: 30, imagen: "assets/images/logo.png" },
    // Más productos...
  ];
}
