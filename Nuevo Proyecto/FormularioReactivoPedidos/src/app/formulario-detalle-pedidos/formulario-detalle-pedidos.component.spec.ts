import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDetallePedidosComponent } from './formulario-detalle-pedidos.component';

describe('FormularioDetallePedidosComponent', () => {
  let component: FormularioDetallePedidosComponent;
  let fixture: ComponentFixture<FormularioDetallePedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDetallePedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioDetallePedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
