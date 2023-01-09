import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterdetailComponent } from './monsterdetail.component';

describe('MonsterdetailComponent', () => {
  let component: MonsterdetailComponent;
  let fixture: ComponentFixture<MonsterdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
