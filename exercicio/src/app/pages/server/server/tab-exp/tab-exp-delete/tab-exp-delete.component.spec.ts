import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabExpDeleteComponent } from './tab-exp-delete.component';

describe('TabExpDeleteComponent', () => {
  let component: TabExpDeleteComponent;
  let fixture: ComponentFixture<TabExpDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabExpDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabExpDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
