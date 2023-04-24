import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteServicioComponent } from './componente-servicio.component';

describe('ComponenteServicioComponent', () => {
  let component: ComponenteServicioComponent;
  let fixture: ComponentFixture<ComponenteServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
