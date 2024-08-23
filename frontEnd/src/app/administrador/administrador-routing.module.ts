import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductosComponent} from "./productos/productos.component";
import {UsuariosAdminComponent} from "./usuarios-admin/usuarios-admin.component";
import {UsuariosComponent} from "./usuarios/usuarios.component";

const routes: Routes = [
  { path: 'productos', component: ProductosComponent },
  { path: 'usuarios-admin', component: UsuariosAdminComponent},
  { path: 'usuarios', component: UsuariosComponent },
  { path: '', redirectTo: 'productos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
