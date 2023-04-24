import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibeIdComponent } from './recibe-id.component';

describe('RecibeIdComponent', () => {
  let component: RecibeIdComponent;
  let fixture: ComponentFixture<RecibeIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibeIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecibeIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
