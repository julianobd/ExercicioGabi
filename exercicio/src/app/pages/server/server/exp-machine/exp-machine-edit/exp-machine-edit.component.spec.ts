import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpMachineEditComponent } from './exp-machine-edit.component';

describe('ExpMachineEditComponent', () => {
  let component: ExpMachineEditComponent;
  let fixture: ComponentFixture<ExpMachineEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpMachineEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpMachineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
