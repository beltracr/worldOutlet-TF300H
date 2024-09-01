import { Component,inject } from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    RouterOutlet,
    NgIf
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  // isCollapsed = true;

  // expandSidebar() {
  //   this.isCollapsed = false;
  // }

  // collapseSidebar() {
  //   this.isCollapsed = true;
  // }
}
