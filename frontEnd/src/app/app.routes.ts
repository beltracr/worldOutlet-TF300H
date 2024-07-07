import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HombreComponent } from './pages/hombre/hombre.component';
import { MujerComponent } from './pages/mujer/mujer.component';
import { RegistroComponent } from './pages/registro/registro.component';

export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'hombre', component: HombreComponent},
    {path: 'mujer', component: MujerComponent},
    {path: 'registro', component: RegistroComponent},
    {path: '**', redirectTo: '/inicio', pathMatch: 'full'}
];
