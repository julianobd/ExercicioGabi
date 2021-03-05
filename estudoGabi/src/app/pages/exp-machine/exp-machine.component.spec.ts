import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpMachineComponent } from './exp-machine.component';

describe('ExpMachineComponent', () => {
  let component: ExpMachineComponent;
  let fixture: ComponentFixture<ExpMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpMachineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
