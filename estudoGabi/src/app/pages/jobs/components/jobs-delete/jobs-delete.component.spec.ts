import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsDeleteComponent } from './jobs-delete.component';

describe('JobsDeleteComponent', () => {
  let component: JobsDeleteComponent;
  let fixture: ComponentFixture<JobsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
