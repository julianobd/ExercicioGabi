import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpMachEditComponent } from './exp-mach-edit.component';

describe('ExpMachEditComponent', () => {
  let component: ExpMachEditComponent;
  let fixture: ComponentFixture<ExpMachEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpMachEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpMachEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
