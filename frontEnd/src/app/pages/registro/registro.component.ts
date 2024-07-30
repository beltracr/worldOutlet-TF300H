import { Component } from '@angular/core';
import { NavComponent } from '../../component/nav/nav.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [NavComponent, FooterComponent, InicioComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

}
