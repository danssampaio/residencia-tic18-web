import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarregadorVeiculosComponent } from './carregador-veiculos.component';

describe('CarregadorVeiculosComponent', () => {
  let component: CarregadorVeiculosComponent;
  let fixture: ComponentFixture<CarregadorVeiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarregadorVeiculosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarregadorVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
