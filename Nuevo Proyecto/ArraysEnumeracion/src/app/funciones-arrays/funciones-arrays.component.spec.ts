import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionesArraysComponent } from './funciones-arrays.component';

describe('FuncionesArraysComponent', () => {
  let component: FuncionesArraysComponent;
  let fixture: ComponentFixture<FuncionesArraysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionesArraysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionesArraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
