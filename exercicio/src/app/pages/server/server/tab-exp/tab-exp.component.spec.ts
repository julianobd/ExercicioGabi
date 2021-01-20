import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabExpComponent } from './tab-exp.component';

describe('TabExpComponent', () => {
  let component: TabExpComponent;
  let fixture: ComponentFixture<TabExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
