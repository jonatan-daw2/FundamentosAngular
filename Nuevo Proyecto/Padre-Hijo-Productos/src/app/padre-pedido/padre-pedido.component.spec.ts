import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadrePedidoComponent } from './padre-pedido.component';

describe('PadrePedidoComponent', () => {
  let component: PadrePedidoComponent;
  let fixture: ComponentFixture<PadrePedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadrePedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadrePedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
