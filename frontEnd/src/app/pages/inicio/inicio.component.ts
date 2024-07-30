import { Component } from '@angular/core';
import { NavComponent } from '../../component/nav/nav.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { RegistroComponent } from '../registro/registro.component';
import { NoEncontradoComponent } from '../no-encontrado/no-encontrado.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NavComponent, FooterComponent, RegistroComponent, NoEncontradoComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
