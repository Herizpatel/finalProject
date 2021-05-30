import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclelistcomponentComponent } from './vehiclelistcomponent.component';

describe('VehiclelistcomponentComponent', () => {
  let component: VehiclelistcomponentComponent;
  let fixture: ComponentFixture<VehiclelistcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclelistcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclelistcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
