import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableDefaultComponent } from './data-table-default.component';

describe('DataTableDefaultComponent', () => {
  let component: DataTableDefaultComponent;
  let fixture: ComponentFixture<DataTableDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTableDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
