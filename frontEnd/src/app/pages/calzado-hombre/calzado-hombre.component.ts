import { Component } from '@angular/core';
import {NavComponent} from "../../component/nav/nav.component";
import {RouterLink} from "@angular/router";
import {FooterComponent} from "../../component/footer/footer.component";

@Component({
  selector: 'app-calzado-hombre',
  standalone: true,
  imports: [
    NavComponent, RouterLink, FooterComponent
  ],
  templateUrl: './calzado-hombre.component.html',
  styleUrl: './calzado-hombre.component.css'
})
export class CalzadoHombreComponent {

}
