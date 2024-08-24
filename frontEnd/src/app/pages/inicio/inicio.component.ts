import { Component,ViewChild, ElementRef } from '@angular/core';
import { NavComponent } from '../../component/nav/nav.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { RegistroComponent } from '../registro/registro.component';
import { NoEncontradoComponent } from '../no-encontrado/no-encontrado.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NavComponent, FooterComponent, RegistroComponent, NoEncontradoComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  @ViewChild('promContainer', { static: true }) promContainer!: ElementRef;

  runLeft (){
    this.promContainer.nativeElement.scrollLeft -= 400
  }

  runRigh (){
    this.promContainer.nativeElement.scrollLeft += 400
  }

  @ViewChild('containerWomen', { static: true }) containerWomen!: ElementRef;

  runLeftW (){
    this.containerWomen.nativeElement.scrollLeft -= 400
  }

  runRighW (){
    this.containerWomen.nativeElement.scrollLeft += 400
  }

  @ViewChild('containerMen', { static: true }) containerMen!: ElementRef;

  runLeftM (){
    this.containerMen.nativeElement.scrollLeft -= 400
  }

  runRighM (){
    this.containerMen.nativeElement.scrollLeft += 400
  }
}
