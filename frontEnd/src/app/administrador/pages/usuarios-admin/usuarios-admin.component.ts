import { Component, inject } from '@angular/core';
import { NgForOf } from "@angular/common";
import { ProductsService } from '../../../services/products.service';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { UsersService } from '../../../services/users.service';
import { HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Products } from '../../../interfaces/products';
import {AdminService} from '../../../services/admin.service';





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
