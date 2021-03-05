import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabExpCreateComponent } from './tab-exp-create.component';

describe('TabExpCreateComponent', () => {
  let component: TabExpCreateComponent;
  let fixture: ComponentFixture<TabExpCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabExpCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabExpCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
