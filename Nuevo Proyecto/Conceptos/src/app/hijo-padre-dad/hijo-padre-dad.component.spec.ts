import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoPadreDadComponent } from './hijo-padre-dad.component';

describe('HijoPadreDadComponent', () => {
  let component: HijoPadreDadComponent;
  let fixture: ComponentFixture<HijoPadreDadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoPadreDadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoPadreDadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
