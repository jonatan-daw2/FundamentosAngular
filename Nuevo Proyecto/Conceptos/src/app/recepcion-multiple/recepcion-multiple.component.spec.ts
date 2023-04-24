import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionMultipleComponent } from './recepcion-multiple.component';

describe('RecepcionMultipleComponent', () => {
  let component: RecepcionMultipleComponent;
  let fixture: ComponentFixture<RecepcionMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepcionMultipleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepcionMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
