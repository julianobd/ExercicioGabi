import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabExpEditComponent } from './tab-exp-edit.component';

describe('TabExpEditComponent', () => {
  let component: TabExpEditComponent;
  let fixture: ComponentFixture<TabExpEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabExpEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabExpEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
