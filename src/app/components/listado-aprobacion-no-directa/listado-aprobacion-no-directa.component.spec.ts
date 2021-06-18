import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAprobacionNoDirectaComponent } from './listado-aprobacion-no-directa.component';

describe('ListadoAprobacionNoDirectaComponent', () => {
  let component: ListadoAprobacionNoDirectaComponent;
  let fixture: ComponentFixture<ListadoAprobacionNoDirectaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoAprobacionNoDirectaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAprobacionNoDirectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
