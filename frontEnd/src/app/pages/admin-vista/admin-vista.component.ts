import { Component } from '@angular/core';
import {RouterOutlet, RouterLink} from "@angular/router";
import {SidebarComponent} from "../../administrador/components/sidebar/sidebar.component";

@Component({
  selector: 'app-admin-vista',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink, SidebarComponent
  ],
  templateUrl: './admin-vista.component.html',
  styleUrl: './admin-vista.component.css'
})
export class AdminVistaComponent {

}
