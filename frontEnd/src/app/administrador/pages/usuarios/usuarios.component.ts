import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-usuarios',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  usuarios = [
    { id: 1, nombre: 'Juan Pérez', correo: 'juan.perez@bit.com', telefono: '301-525-3233', direccion: 'Calle 1 #  44-20, Ciudad Bolivar' },
    { id: 2, nombre: 'Ana López', correo: 'ana.lopez@bit.com', telefono: '322-401-5678', direccion: 'Avenida 45 # 32-12, Balcones' },
    // Más usuarios...
  ];

  editarUsuario(id: number) {
    // Lógica para editar el usuario
    console.log('Editar usuario con ID:', id);
  }

  eliminarUsuario(id: number) {
    // Lógica para eliminar el usuario
    console.log('Eliminar usuario con ID:', id);
  }
}
