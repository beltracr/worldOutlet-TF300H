import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIniSesionComponent } from './modal-ini-sesion.component';

describe('ModalIniSesionComponent', () => {
  let component: ModalIniSesionComponent;
  let fixture: ComponentFixture<ModalIniSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalIniSesionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalIniSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
