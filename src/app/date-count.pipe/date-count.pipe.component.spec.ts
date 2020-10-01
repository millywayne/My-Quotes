import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCountPipe } from './date-count.pipe.component';

describe('DateCountPipe', () => {
  let component: DateCountPipe;
  let fixture: ComponentFixture<DateCountPipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateCountPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateCountPipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
