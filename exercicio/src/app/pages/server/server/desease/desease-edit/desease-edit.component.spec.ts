import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeseaseEditComponent } from './desease-edit.component';

describe('DeseaseEditComponent', () => {
  let component: DeseaseEditComponent;
  let fixture: ComponentFixture<DeseaseEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeseaseEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeseaseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
