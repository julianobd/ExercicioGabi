import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeseaseComponent } from './desease.component';

describe('DeseaseComponent', () => {
  let component: DeseaseComponent;
  let fixture: ComponentFixture<DeseaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeseaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
