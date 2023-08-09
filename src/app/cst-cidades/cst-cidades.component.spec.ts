import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CstCidadesComponent } from './cst-cidades.component';

describe('CstCidadesComponent', () => {
  let component: CstCidadesComponent;
  let fixture: ComponentFixture<CstCidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CstCidadesComponent]
    });
    fixture = TestBed.createComponent(CstCidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
