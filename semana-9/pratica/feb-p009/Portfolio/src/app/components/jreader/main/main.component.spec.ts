import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainReaderComponent } from './main.component';

describe('MainReaderComponent', () => {
  let component: MainReaderComponent;
  let fixture: ComponentFixture<MainReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainReaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
