import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpConnectionComponent } from './http-connection.component';

describe('HttpConnectionComponent', () => {
  let component: HttpConnectionComponent;
  let fixture: ComponentFixture<HttpConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
