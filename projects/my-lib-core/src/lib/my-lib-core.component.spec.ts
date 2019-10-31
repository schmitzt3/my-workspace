import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibCoreComponent } from './my-lib-core.component';

describe('MyLibCoreComponent', () => {
  let component: MyLibCoreComponent;
  let fixture: ComponentFixture<MyLibCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLibCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLibCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
