import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaHomeLogedComponent } from './prueba-home-loged.component';

describe('PruebaHomeLogedComponent', () => {
  let component: PruebaHomeLogedComponent;
  let fixture: ComponentFixture<PruebaHomeLogedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PruebaHomeLogedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PruebaHomeLogedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
