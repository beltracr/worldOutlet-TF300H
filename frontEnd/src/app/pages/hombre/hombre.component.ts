import { Component } from '@angular/core';
import { NavComponent } from '../../component/nav/nav.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { CarruselComponent } from "../../component/carrusel/carrusel.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-hombre',
  standalone: true,
  imports: [NavComponent, FooterComponent, CarruselComponent, RouterLink],
  templateUrl: './hombre.component.html',
  styleUrl: './hombre.component.css'
})
export class HombreComponent {
}
