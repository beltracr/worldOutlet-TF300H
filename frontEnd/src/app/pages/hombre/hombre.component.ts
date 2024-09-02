import { Component, inject } from '@angular/core';
import { NavComponent } from '../../component/nav/nav.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { CarruselComponent } from "../../component/carrusel/carrusel.component";
import { RouterLink } from "@angular/router";
import { ProductsService } from '../../services/products.service';




@Component({
  selector: 'app-hombre',
  standalone: true,
  imports: [NavComponent, FooterComponent, CarruselComponent, RouterLink],
  templateUrl: './hombre.component.html',
  styleUrl: './hombre.component.css'
})
export class HombreComponent {

  producto = inject(ProductsService);

  todosProductos: any[] = []





  obtenerProductos() {

    this.producto.getProducts().subscribe((res: any) => {
      try {
        console.log("res",res);
        this.todosProductos = res
      } catch (error) { console.log(error) }})}
      ngOnInit() {
        this.obtenerProductos()
      }


    }
