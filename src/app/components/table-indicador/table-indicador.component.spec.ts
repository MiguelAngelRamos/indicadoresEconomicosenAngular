import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableIndicadorComponent } from './table-indicador.component';

describe('TableIndicadorComponent', () => {
  let component: TableIndicadorComponent;
  let fixture: ComponentFixture<TableIndicadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableIndicadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableIndicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
