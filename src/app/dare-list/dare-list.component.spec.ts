import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DareListComponent } from './dare-list.component';

describe('DareListComponent', () => {
  let component: DareListComponent;
  let fixture: ComponentFixture<DareListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DareListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
