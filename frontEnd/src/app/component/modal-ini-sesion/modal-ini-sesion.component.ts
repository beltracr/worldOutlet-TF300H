import { Component, Input } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-modal-ini-sesion',
  standalone: true,
  imports: [NavComponent, RouterLink],
  templateUrl: './modal-ini-sesion.component.html',
  styleUrl: './modal-ini-sesion.component.css'
})
export class ModalIniSesionComponent {
  
}
