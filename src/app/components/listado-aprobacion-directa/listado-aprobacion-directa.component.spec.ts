import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAprobacionDirectaComponent } from './listado-aprobacion-directa.component';

describe('ListadoAprobacionDirectaComponent', () => {
  let component: ListadoAprobacionDirectaComponent;
  let fixture: ComponentFixture<ListadoAprobacionDirectaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoAprobacionDirectaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAprobacionDirectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
