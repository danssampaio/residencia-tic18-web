import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWikiComponent } from './main.component';

describe('MainWikiComponent', () => {
  let component: MainWikiComponent;
  let fixture: ComponentFixture<MainWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainWikiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
