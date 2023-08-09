import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CstCidadesBotaoComponent } from './cst-cidades-botao.component';

describe('CstCidadesBotaoComponent', () => {
  let component: CstCidadesBotaoComponent;
  let fixture: ComponentFixture<CstCidadesBotaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CstCidadesBotaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CstCidadesBotaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
