import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActasExamenComponent } from './actas-examen.component';

describe('ActasExamenComponent', () => {
  let component: ActasExamenComponent;
  let fixture: ComponentFixture<ActasExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActasExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActasExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
