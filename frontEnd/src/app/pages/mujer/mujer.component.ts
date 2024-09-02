import { Component,inject } from '@angular/core';
import { NavComponent } from '../../component/nav/nav.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { ProductsService } from '../../services/products.service';



@Component({
  selector: 'app-mujer',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './mujer.component.html',
  styleUrl: './mujer.component.css'
})
export class MujerComponent {
  producto = inject(ProductsService);
  
  todosProductos: any[] = []
 
  
 


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
  


  ngOnInit() {
    this.obtenerProductos()
  }

}
