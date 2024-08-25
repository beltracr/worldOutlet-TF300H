import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-usuarios-admin',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './usuarios-admin.component.html',
  styleUrl: './usuarios-admin.component.css'
})
export class UsuariosAdminComponent {
  usuariosAdmin = [
    { id: 1, nombre: 'Cristian Beltran', correo: 'cb@bit.com', telefono: '301-525-3233', categoria: 'Admin' },
    { id: 2, nombre: 'David Parra', correo: 'dp@bit.com', telefono: '322-401-5678', categoria: 'Admin' },
    // Más usuarios...
  ];
}
