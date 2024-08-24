import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HombreComponent } from './pages/hombre/hombre.component';
import { MujerComponent } from './pages/mujer/mujer.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';
import {AdminVistaComponent} from "./pages/admin-vista/admin-vista.component";
import {UsuariosComponent} from "./administrador/usuarios/usuarios.component";
import {UsuariosAdminComponent} from "./administrador/usuarios-admin/usuarios-admin.component";
import {ProductosComponent} from "./administrador/productos/productos.component";

export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'hombre', component: HombreComponent},
    {path: 'mujer', component: MujerComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'admin', component: AdminVistaComponent, children:[
        {path: 'controlUsuarios', component: UsuariosComponent},
        {path: 'controlUsuariosAdmin', component: UsuariosAdminComponent},
        {path: 'inventario', component: ProductosComponent}
      ]},
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: '**', component: NoEncontradoComponent, title:'404'}
];
