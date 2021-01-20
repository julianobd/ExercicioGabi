import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableItemsEditComponent } from './available-items-edit.component';

describe('AvailableItemsEditComponent', () => {
  let component: AvailableItemsEditComponent;
  let fixture: ComponentFixture<AvailableItemsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableItemsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableItemsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
