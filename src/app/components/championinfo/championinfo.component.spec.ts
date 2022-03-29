import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampioninfoComponent } from './championinfo.component';

describe('ChampioninfoComponent', () => {
  let component: ChampioninfoComponent;
  let fixture: ComponentFixture<ChampioninfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampioninfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampioninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
