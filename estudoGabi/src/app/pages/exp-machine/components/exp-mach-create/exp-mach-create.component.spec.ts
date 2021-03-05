import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpMachCreateComponent } from './exp-mach-create.component';

describe('ExpMachCreateComponent', () => {
  let component: ExpMachCreateComponent;
  let fixture: ComponentFixture<ExpMachCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpMachCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpMachCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
