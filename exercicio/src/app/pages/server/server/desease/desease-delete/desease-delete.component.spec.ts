import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeseaseDeleteComponent } from './desease-delete.component';

describe('DeseaseDeleteComponent', () => {
  let component: DeseaseDeleteComponent;
  let fixture: ComponentFixture<DeseaseDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeseaseDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeseaseDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
