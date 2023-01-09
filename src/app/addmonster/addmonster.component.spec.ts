import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmonsterComponent } from './addmonster.component';

describe('AddmonsterComponent', () => {
  let component: AddmonsterComponent;
  let fixture: ComponentFixture<AddmonsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmonsterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
