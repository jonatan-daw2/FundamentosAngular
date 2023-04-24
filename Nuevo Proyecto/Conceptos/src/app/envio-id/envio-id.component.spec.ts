import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioIdComponent } from './envio-id.component';

describe('EnvioIdComponent', () => {
  let component: EnvioIdComponent;
  let fixture: ComponentFixture<EnvioIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvioIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvioIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
