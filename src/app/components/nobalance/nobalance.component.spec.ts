import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NobalanceComponent } from './nobalance.component';

describe('NobalanceComponent', () => {
  let component: NobalanceComponent;
  let fixture: ComponentFixture<NobalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NobalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NobalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
