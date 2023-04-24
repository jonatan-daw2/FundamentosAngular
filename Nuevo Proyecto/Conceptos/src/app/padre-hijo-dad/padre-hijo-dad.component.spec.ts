import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreHijoDadComponent } from './padre-hijo-dad.component';

describe('PadreHijoDadComponent', () => {
  let component: PadreHijoDadComponent;
  let fixture: ComponentFixture<PadreHijoDadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreHijoDadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreHijoDadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
