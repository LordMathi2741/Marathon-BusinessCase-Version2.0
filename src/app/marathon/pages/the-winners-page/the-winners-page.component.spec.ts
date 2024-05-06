import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWinnersPageComponent } from './the-winners-page.component';

describe('TheWinnersPageComponent', () => {
  let component: TheWinnersPageComponent;
  let fixture: ComponentFixture<TheWinnersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheWinnersPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheWinnersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
