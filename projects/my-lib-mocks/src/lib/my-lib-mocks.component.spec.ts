import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibMocksComponent } from './my-lib-mocks.component';

describe('MyLibMocksComponent', () => {
  let component: MyLibMocksComponent;
  let fixture: ComponentFixture<MyLibMocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLibMocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLibMocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
