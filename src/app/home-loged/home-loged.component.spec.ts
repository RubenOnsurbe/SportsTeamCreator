import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLogedComponent } from './home-loged.component';

describe('HomeLogedComponent', () => {
  let component: HomeLogedComponent;
  let fixture: ComponentFixture<HomeLogedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeLogedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeLogedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
