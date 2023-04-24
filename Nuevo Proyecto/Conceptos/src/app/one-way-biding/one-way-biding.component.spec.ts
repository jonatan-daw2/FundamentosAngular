import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneWayBidingComponent } from './one-way-biding.component';

describe('OneWayBidingComponent', () => {
  let component: OneWayBidingComponent;
  let fixture: ComponentFixture<OneWayBidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneWayBidingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneWayBidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
