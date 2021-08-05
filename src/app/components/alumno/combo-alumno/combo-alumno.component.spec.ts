import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboAlumnoComponent } from './combo-alumno.component';

describe('ComboAlumnoComponent', () => {
  let component: ComboAlumnoComponent;
  let fixture: ComponentFixture<ComboAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
