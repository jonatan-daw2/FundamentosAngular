import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreHijoSonComponent } from './padre-hijo-son.component';

describe('PadreHijoSonComponent', () => {
  let component: PadreHijoSonComponent;
  let fixture: ComponentFixture<PadreHijoSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreHijoSonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreHijoSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
