import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabExpUpdateComponent } from './tab-exp-update.component';

describe('TabExpUpdateComponent', () => {
  let component: TabExpUpdateComponent;
  let fixture: ComponentFixture<TabExpUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabExpUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabExpUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
