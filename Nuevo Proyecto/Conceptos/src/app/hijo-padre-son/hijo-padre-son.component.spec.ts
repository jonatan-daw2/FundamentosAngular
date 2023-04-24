import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoPadreSonComponent } from './hijo-padre-son.component';

describe('HijoPadreSonComponent', () => {
  let component: HijoPadreSonComponent;
  let fixture: ComponentFixture<HijoPadreSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoPadreSonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoPadreSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
