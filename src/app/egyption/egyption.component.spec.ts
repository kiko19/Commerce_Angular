import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgyptionComponent } from './egyption.component';

describe('EgyptionComponent', () => {
  let component: EgyptionComponent;
  let fixture: ComponentFixture<EgyptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgyptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EgyptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
