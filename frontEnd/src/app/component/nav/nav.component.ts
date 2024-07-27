import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalIniSesionComponent } from '../modal-ini-sesion/modal-ini-sesion.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ RouterLink,ModalIniSesionComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
 
}
