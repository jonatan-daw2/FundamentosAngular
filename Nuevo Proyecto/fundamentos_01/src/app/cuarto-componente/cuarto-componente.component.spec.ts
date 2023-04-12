import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartoComponenteComponent } from './cuarto-componente.component';

describe('CuartoComponenteComponent', () => {
  let component: CuartoComponenteComponent;
  let fixture: ComponentFixture<CuartoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuartoComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuartoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
