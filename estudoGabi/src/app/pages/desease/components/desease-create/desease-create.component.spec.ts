import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeseaseCreateComponent } from './desease-create.component';

describe('DeseaseCreateComponent', () => {
  let component: DeseaseCreateComponent;
  let fixture: ComponentFixture<DeseaseCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeseaseCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeseaseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
