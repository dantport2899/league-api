import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HystoryComponent } from './hystory.component';

describe('HystoryComponent', () => {
  let component: HystoryComponent;
  let fixture: ComponentFixture<HystoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HystoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HystoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
