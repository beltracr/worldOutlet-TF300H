import { Component } from '@angular/core';
import {RouterOutlet, RouterLink} from "@angular/router";

@Component({
  selector: 'app-admin-vista',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink
  ],
  templateUrl: './admin-vista.component.html',
  styleUrl: './admin-vista.component.css'
})
export class AdminVistaComponent {

}
