import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWinnersTableComponent } from './the-winners-table.component';

describe('TheWinnersTableComponent', () => {
  let component: TheWinnersTableComponent;
  let fixture: ComponentFixture<TheWinnersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheWinnersTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheWinnersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
