import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HombreComponent } from './pages/hombre/hombre.component';
import { MujerComponent } from './pages/mujer/mujer.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';

export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'hombre', component: HombreComponent},
    {path: 'mujer', component: MujerComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'noEncontrado', component: NoEncontradoComponent},
    {path: '**', redirectTo: '/inicio', pathMatch: 'full'}
];
