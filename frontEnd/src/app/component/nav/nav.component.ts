import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalIniSesionComponent } from '../modal-ini-sesion/modal-ini-sesion.component';
import { Input } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
import { Credentials } from '../../interfaces/credentials';
import { UserloginServiceService } from '../../services/userlogin.service.service';
import {CartComponent} from "../cart/cart.component";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, ModalIniSesionComponent, ReactiveFormsModule, CartComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  // activación bottom menu hmaburguesa


  loginService = inject(UserloginServiceService);
  @Input() toggleRegister: () => void = () => {
  };
  credentialForm = new FormGroup({
    correo: new FormControl(''),
    contrasena: new FormControl('')
  });

  getCredentials() {
    const correo = this.credentialForm.value.correo;
    const contrasena = this.credentialForm.value.contrasena;
    if (typeof correo === 'string' && typeof contrasena === 'string') {
      const validarCredenciales: Credentials = {
        correo,
        contrasena
      }
      return validarCredenciales;
    }
    return null;
  }

  handleSubmint() {
    const credenciales = this.getCredentials();
    console.log(credenciales);
    if (credenciales) {
      this.loginService.login(credenciales).subscribe({
        next: (res: any) => {
          console.log(res)
          if (res) {
            localStorage.setItem('token', res.tokenGenerado)
            this.loginService.redirect();
          }

        },
        error: (err) => {
          alert(err.error.mensaje);
          this.credentialForm.reset();
        }
      })
    }
  }
}
