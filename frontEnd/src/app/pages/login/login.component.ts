import { Component, inject } from '@angular/core';
import { Input } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
import { Credentials } from '../../interfaces/credentials';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginService = inject(LoginService);
  @Input() toggleRegister: () => void = () => {};
  credentialForm = new FormGroup({
    correo: new FormControl(''),
    contrasena: new FormControl('')
  });

  getCredentials(){
    const correo = this.credentialForm.value.correo;
    const contrasena = this.credentialForm.value.contrasena;
    if(typeof correo === 'string' && typeof contrasena === 'string'){
      const validarCredenciales: Credentials = {
        correo,
        contrasena
      }
      return validarCredenciales;
    }
    return null;
  }
  handleSubmint(){
    const credenciales = this.getCredentials();
    console.log(credenciales);
    if(credenciales){
      this.loginService.login(credenciales).subscribe({
        next: (res: any) => {
          console.log(res)
          if(res){
            localStorage.setItem('token', res.tokenGenerado)
            this.loginService.redirect();
          }

        },
        error: (err)=>{
          alert(err.error.mensaje);
          this.credentialForm.reset();
        }
      })
    }


  }
}