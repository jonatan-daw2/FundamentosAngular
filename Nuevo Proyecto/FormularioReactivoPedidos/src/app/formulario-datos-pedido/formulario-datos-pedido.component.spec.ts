import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDatosPedidoComponent } from './formulario-datos-pedido.component';

describe('FormularioDatosPedidoComponent', () => {
  let component: FormularioDatosPedidoComponent;
  let fixture: ComponentFixture<FormularioDatosPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDatosPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioDatosPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
