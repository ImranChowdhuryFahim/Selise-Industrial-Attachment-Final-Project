import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCartDefaultComponent } from './my-cart-default.component';

describe('MyCartDefaultComponent', () => {
  let component: MyCartDefaultComponent;
  let fixture: ComponentFixture<MyCartDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCartDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCartDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
