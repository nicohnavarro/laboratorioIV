import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboProfesorComponent } from './combo-profesor.component';

describe('ComboProfesorComponent', () => {
  let component: ComboProfesorComponent;
  let fixture: ComponentFixture<ComboProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
