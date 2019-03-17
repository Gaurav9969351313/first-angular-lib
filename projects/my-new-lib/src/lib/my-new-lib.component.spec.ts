import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewLibComponent } from './my-new-lib.component';

describe('MyNewLibComponent', () => {
  let component: MyNewLibComponent;
  let fixture: ComponentFixture<MyNewLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
