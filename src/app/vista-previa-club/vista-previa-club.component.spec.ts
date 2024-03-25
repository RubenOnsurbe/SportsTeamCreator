import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPreviaClubComponent } from './vista-previa-club.component';

describe('VistaPreviaClubComponent', () => {
  let component: VistaPreviaClubComponent;
  let fixture: ComponentFixture<VistaPreviaClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaPreviaClubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaPreviaClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
