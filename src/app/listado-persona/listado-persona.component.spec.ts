import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPersonaComponent } from './listado-persona.component';

describe('ListadoPersonaComponent', () => {
  let component: ListadoPersonaComponent;
  let fixture: ComponentFixture<ListadoPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
