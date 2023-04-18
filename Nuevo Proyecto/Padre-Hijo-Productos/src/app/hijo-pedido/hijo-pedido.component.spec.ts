import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoPedidoComponent } from './hijo-pedido.component';

describe('HijoPedidoComponent', () => {
  let component: HijoPedidoComponent;
  let fixture: ComponentFixture<HijoPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
